import React from 'react';
import styles from "./dogCardList.module.scss"
import DogCard from "@/components/ui/dogCard/DogCard.jsx";

const DogCardList = ( { images, ...props} ) => {
    return (
        <div className={styles.cardList}>
            {images.map((image) => (
                <DogCard url={image.url} key={image.id} breed={image.breeds[0].name}/>
            ))}
        </div>
    );
};

export default DogCardList;