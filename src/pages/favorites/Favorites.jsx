import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import DogCardList from "@/components/widgets/dogCardList/DogCardList.jsx";
import { get, ref, remove, set } from "firebase/database";
import { db } from "@/firebase.js";
import { addLike, removeLike, setLike } from "@/redux/slices/LikedDogsSlice.js";
import styles from "./favorites.module.scss";
import {setLoading} from "@/redux/slices/LoaderSlice.js";

const Favorites = () => {
    const dispatch = useDispatch();
    const likedDogs = useSelector((state) => state.likes);
    const user = useSelector((state) => state.user);

    const [favoriteImages, setFavoriteImages] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (!user?.uid) {
            setError("You are not logged in. Please sign in to view your favorites.");
            return;
        }
        const loadFavorites = async () => {
            dispatch(setLoading(true));
            setError(null);
            const likesRef = ref(db, `likedDogs/${user.uid}`);
            try {
                const snapshot = await get(likesRef);
                const data = snapshot.val() || {};
                dispatch(setLike(data));
                const arr = Object.values(data)
                    .sort((a, b) => b.addedAt - a.addedAt);
                setFavoriteImages(arr);
            } catch (e) {
                console.error("Failed to load favorites", e);
                setError("Failed to load favorite photos. Please try again later.");
            } finally {
                dispatch(setLoading(false));
            }
        };
        loadFavorites();
    }, [user?.uid, dispatch]);


    const onToggleLike = async (image, isLiked) => {
        if (!user?.uid) {
            setError("You are not logged in. Please sign in to manage likes.");
            return;
        }

        const likeRef = ref(db, `likedDogs/${user.uid}/${image.id}`);

        try {
            if (isLiked) {
                await remove(likeRef);
                dispatch(removeLike(image.id));

                // ❌ Більше нічого! Фото лишається у favoriteImages до оновлення сторінки
            } else {
                const likedImageWithTimestamp = { ...image, addedAt: Date.now() };
                await set(likeRef, likedImageWithTimestamp);
                dispatch(addLike(likedImageWithTimestamp));

                setFavoriteImages(prev => {
                    const exists = prev.find(img => img.id === image.id);
                    if (exists) {
                        return prev.map(img =>
                            img.id === image.id ? likedImageWithTimestamp : img
                        );
                    } else {
                        return [...prev, likedImageWithTimestamp];
                    }
                });
            }
        } catch (err) {
            console.error(err);
            setError("Failed to update like status. Please try again later.");
        }
    };



    return (
        <div className={styles.favoritesWrapper}>
            {error ? (
                <p className={styles.favoritesText}>{error}</p>
            ) : favoriteImages.length > 0 ? (
                <DogCardList
                    images={favoriteImages}
                    likedDogs={likedDogs}
                    onToggleLike={onToggleLike}
                />
            ) : (
                <p className={styles.favoritesText}>
                    You don't have any favorite photos yet.
                </p>
            )}
        </div>
    );

};

export default Favorites;