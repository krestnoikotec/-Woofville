import React from 'react';
import styles from "./search.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { fetchDogImages } from "@/redux/thunk/FetchDogsThunk.js";
import DogCard from "@/components/ui/dogCard/DogCard.jsx";

const Search = () => {
    const dispatch = useDispatch();
    const apiKey = import.meta.env.VITE_API_KEY;
    const images = useSelector((state) => state.dogs.images);
    const status = useSelector((state) => state.dogs.status);
    const error = useSelector((state) => state.dogs.error);

    React.useEffect(() => {
        if (status === "idle") {
            dispatch(fetchDogImages({ apiKey, limit: 20 }));
        }
    }, [status, dispatch, apiKey]);

    return (
        <div className={styles.search}>
            {images.map((image) => (
                <DogCard url={image.url} key={image.id} breed={image.breeds[0].name}/>
            ))}
        </div>
    )
};

export default Search;