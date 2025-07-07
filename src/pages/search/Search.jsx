import React from 'react';
import styles from "./search.module.scss";
import {useDispatch, useSelector} from "react-redux";
import { ref, remove, set, onValue } from "firebase/database"
import { fetchDogImages } from "@/redux/thunk/FetchDogsThunk.js";
import { db } from "@/firebase.js"
import {removeLike, addLike, setLike} from "@/redux/slices/LikedDogsSlice.js";
import DogCardList from "@/components/widgets/dogCardList/DogCardList.jsx";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import {setLoading} from "@/redux/slices/LoaderSlice.js";

const Search = () => {
    const dispatch = useDispatch();
    const apiKey = import.meta.env.VITE_API_KEY;

    const [displayedImages, setDisplayedImages] = React.useState([]);
    const [bufferImages, setBufferImages] = React.useState([]);
    const [error, setError] = React.useState(null);

    const likedDogs = useSelector((state) => state.likes);
    const user = useSelector((state) => state.user);

    React.useEffect(() => {
        if (user?.uid) {
            const likesRef = ref(db, `likedDogs/${user.uid}`);
            onValue(likesRef, (snapshot) => {
                const data = snapshot.val() || {};
                dispatch(setLike(data));
            });
        }
    }, [user?.uid, dispatch]);

    const loadInitialImages = async () => {

        const stored = sessionStorage.getItem("images");

        if(stored){
            const result = JSON.parse(stored);
            setDisplayedImages(result.slice(0, 10));
            setBufferImages(result.slice(10));
        }
        else{
            try {
                dispatch(setLoading(true));
                const result = await dispatch(fetchDogImages({ apiKey, limit: 20 })).unwrap();
                setDisplayedImages(result.slice(0, 10));
                setBufferImages(result.slice(10));
                sessionStorage.setItem("images", JSON.stringify(result));
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                dispatch(setLoading(false));
            }
        }
    };

    const loadMoreToBuffer = async () => {
        try {
            const result = await dispatch(fetchDogImages({ apiKey, limit: 10 })).unwrap();
            console.log("NEW IMAGES", result);
            setBufferImages(prev => [...prev, ...result]);
                const stored = sessionStorage.getItem("images");
                let storedImages = [];
                if(stored){
                    try{
                        storedImages = JSON.parse(stored);
                    } catch(e){
                      console.error("Failed to parse sessionStorage:", e);
                        storedImages = [];
                    }
                }

                const newStoredImages = [...storedImages, ...result];
                sessionStorage.setItem("images", JSON.stringify(newStoredImages));
        } catch (err) {
            setError(err.message || "Could not load more images");
        }
    };

    const showMoreImages = () => {
        if (bufferImages.length >= 10) {
            const nextToShow = bufferImages.slice(0, 10);
            setDisplayedImages(prev => [...prev, ...nextToShow]);
            setBufferImages(prev => prev.slice(10));
            loadMoreToBuffer();
        } else if (bufferImages.length > 0) {
            setDisplayedImages(prev => [...prev, ...bufferImages]);
            setBufferImages([]);
            loadMoreToBuffer();
        }
    };

    React.useEffect(() => {
        loadInitialImages();
    }, []);

    const onToggleLike = async (image, isLiked) => {
        if (!user?.uid) return;
        const likeRef = ref(db, `likedDogs/${user.uid}/${image.id}`);
        try {
            if (isLiked) {
                await remove(likeRef);
                dispatch(removeLike(image.id));
            } else {
                const likedImageWithTimestamp = { ...image, addedAt: Date.now() };
                await set(likeRef, likedImageWithTimestamp);
                dispatch(addLike(likedImageWithTimestamp));
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.search}>
            {error && <p>Помилка: {error}</p>}
            <DogCardList images={displayedImages} likedDogs={likedDogs} onToggleLike={onToggleLike}/>
            <MyButton
                onClick={showMoreImages}
            >
                Load more
            </MyButton>
        </div>
    );
};

export default Search;