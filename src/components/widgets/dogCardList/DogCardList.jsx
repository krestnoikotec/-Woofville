import React from 'react';
import styles from "./dogCardList.module.scss"
import DogCard from "@/components/widgets/dogCard/DogCard.jsx";

const DogCardList = ( { images, likedDogs, onToggleLike } ) => {
    return (
        <div className={styles.cardList}>
            {images.map((image) => (
                <DogCard
                    url={image.url}
                    key={image.id}
                    breed={image.breed?.name || "Unknown"}
                    bred_for={image.breed?.bred_for}
                    temperament={image.breed?.temperament}
                    life_span={image.breed?.life_span}
                    origin={image.breed?.origin}
                    liked={!!likedDogs[image.id]}
                    onToggleLike={() => onToggleLike(image, !!likedDogs[image.id])}
                />
            ))}
        </div>
    );
};

export default DogCardList;