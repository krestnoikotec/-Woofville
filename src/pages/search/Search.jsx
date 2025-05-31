import React from 'react';
import styles from "./search.module.scss";
import { useDispatch } from "react-redux";
import { fetchDogImages } from "@/redux/thunk/FetchDogsThunk.js";
import DogCardList from "@/components/widgets/dogCardList/DogCardList.jsx";
import MyButton from "@/components/ui/button/MyButton.jsx";
import Loader from "@/components/ui/loader/Loader.jsx";

const Search = () => {
    const dispatch = useDispatch();
    const apiKey = import.meta.env.VITE_API_KEY;

    const [displayedImages, setDisplayedImages] = React.useState([]);
    const [bufferImages, setBufferImages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const loadInitialImages = async () => {
        setIsLoading(true);
        try {
            const result = await dispatch(fetchDogImages({ apiKey, limit: 20 })).unwrap();
            setDisplayedImages(result.slice(0, 10));
            setBufferImages(result.slice(10));
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    const loadMoreToBuffer = async () => {
        try {
            const result = await dispatch(fetchDogImages({ apiKey, limit: 10 })).unwrap();
            setBufferImages(prev => [...prev, ...result]);  // Додаємо до буфера
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

    return (
        <div className={`${styles.search} ${isLoading ? styles.loading : ''}`}>
            {error && <p>Помилка: {error}</p>}
            {isLoading && <Loader/>}
            <DogCardList images={displayedImages} />
            <MyButton
                onClick={showMoreImages}
            >
                {isLoading ? "Loading..." : "Show more"}
            </MyButton>
        </div>
    );
};

export default Search;