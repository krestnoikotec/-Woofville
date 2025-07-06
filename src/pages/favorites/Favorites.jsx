import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import DogCardList from "@/components/widgets/dogCardList/DogCardList.jsx";
import { get, ref, remove, set } from "firebase/database";
import { db } from "@/firebase.js";
import { addLike, removeLike, setLike } from "@/redux/slices/LikedDogsSlice.js";
import styles from "./favorites.module.scss";
import Loader from "@/components/widgets/loader/Loader.jsx";

const Favorites = () => {
    const dispatch = useDispatch();
    const likedDogs = useSelector((state) => state.likes);
    const user = useSelector((state) => state.user);

    const [favoriteImages, setFavoriteImages] = React.useState([]);
    const [isLoadingFavorites, setIsLoadingFavorites] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (!user?.uid) {
            setError("You are not logged in. Please sign in to view your favorites.");
            return;
        }

        const loadFavorites = async () => {
            setIsLoadingFavorites(true);
            setError(null);
            const likesRef = ref(db, `likedDogs/${user.uid}`);
            try {
                const snapshot = await get(likesRef);
                const data = snapshot.val() || {};
                dispatch(setLike(data));
                setFavoriteImages(Object.values(data));
            } catch (e) {
                console.error("Failed to load favorites", e);
                setError("Failed to load favorite photos. Please try again later.");
            } finally {
                setIsLoadingFavorites(false);
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
                setFavoriteImages(prevImages =>
                    prevImages.map(img =>
                        img.id === image.id ? { ...img, _unliked: true } : img
                    )
                );
            } else {
                await set(likeRef, image);
                dispatch(addLike(image));
                setFavoriteImages(prevImages =>
                    prevImages.map(img =>
                        img.id === image.id ? { ...img, _unliked: false } : img
                    )
                );
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
            ) : isLoadingFavorites ? (
                <Loader />
            ) : favoriteImages.length > 0 ? (
                <DogCardList images={favoriteImages} likedDogs={likedDogs} onToggleLike={onToggleLike} />
            ) : (
                <p className={styles.favoritesText}>You don't have any favorite photos yet.</p>
            )}
        </div>
    );
};

export default Favorites;