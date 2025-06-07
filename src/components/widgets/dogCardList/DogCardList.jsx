import React from 'react';
import styles from "./dogCardList.module.scss"
import DogCard from "@/components/widgets/dogCard/DogCard.jsx";

const DogCardList = ( { images, ...props} ) => {
    return (
        <div className={styles.cardList}>
            {images.map((image) => (
                <DogCard url={image.url} key={image.id} breed={image.breed?.name || "Unknown"}/>
            ))}
        </div>
    );
};

export default DogCardList;