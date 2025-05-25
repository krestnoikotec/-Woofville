import React from 'react';
import styles from './about.module.scss';
import MyButton from "../../components/ui/button/MyButton.jsx";
import curlyDog from "@/assets/images/curlyDog.webp"
import brownDog from "@/assets/images/brownDog.webp"
import dogWithBeard from "@/assets/images/dogWithBeard.webp"
import dogWithCollar from "@/assets/images/dogWithCollar.webp"
import dogWithGlasses from "@/assets/images/dogWithGlasses.webp"
import dogWithOpenMouth from "@/assets/images/dogWithOpenMouth.webp"
import happyDog from "@/assets/images/happyDog.webp"
import userPhoto from "@/assets/images/userPhoto.webp"

const About = () => {

    return (
        <div className={styles.aboutPage}>
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    Escape into a World of Adorable Dogs
                </h1>
                <p className={styles.heroSubtitle}>
                    Brighten your day with delightful dog photos that bring joy and warmth to your heart.
                </p>
                <MyButton to="/search">
                    Explore
                </MyButton>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>Discover Joy Through Dog Photos</h3>
                    <p className={styles.infoSubtitle}>Welcome to Woofville, where we celebrate the joy and warmth that dogs bring to our lives through captivating images that uplift your spirit and brighten your day.</p>
                    <div className={`${styles.statItem}  ${styles.statsFirst}`}>
                        <h3 className={styles.statNumber}>150+</h3>
                        <p className={styles.statLabel}>Love Dogs</p>
                    </div>
                    <div className={`${styles.statItem} ${styles.statsSecond}`}>
                        <h3 className={styles.statNumber}>15</h3>
                        <p className={styles.statLabel}>Join Our Community</p>
                    </div>
                    <img
                        className={styles.infoImage}
                        src={curlyDog}
                        alt="A fluffy dog with curly fur and big eyes gazes attentively at the camera, resting on soft, neutral-toned blankets. The lighting is warm and cozy, highlighting the dog's mischievous yet endearing expression."
                    />
                </div>
            </section>
            <section className={styles.connectionSection}>
                <div className={styles.connectionContent}>
                    <h3 className={styles.connectionTitle}>
                        Cute Dog Gallery
                    </h3>
                    <p className={styles.connectionSubTitle}>
                        Explore adorable dog photos that brighten your day and bring joy to your life.
                    </p>
                    <div className={styles.connectionTextGroup}>
                        <div className={styles.connectionItem}>
                            <h5 className={styles.itemHeading}>
                                Puppy Love
                            </h5>
                            <p className={styles.itemDescription}>
                                Discover the charm of puppies through captivating images that warm your heart.
                            </p>
                        </div>
                        <div className={styles.connectionItem}>
                            <h5 className={styles.itemHeading}>
                                Adorable Dog Moments
                            </h5>
                            <p className={styles.itemDescription}>
                                Delight in heartwarming images of dogs that will make you smile.
                            </p>
                        </div>
                        <div className={styles.connectionItem}>
                            <h5 className={styles.itemHeading}>
                                Joyful Paws
                            </h5>
                            <p className={styles.itemDescription}>
                                Experience the happiness that comes from viewing playful and loving dog photos.
                            </p>
                        </div>
                    </div>
                    <img
                        src={happyDog}
                        alt="A small dog rests its head on a person's knees, smiling as its ear is gently scratched."
                        className={styles.connectionImage}
                    />
                </div>
            </section>
            <section className={styles.gallerySection}>
                <div className={styles.galleryContent}>
                    <div className={styles.galleryText}>
                        <h3 className={styles.galleryTitle}>
                            Dog Gallery
                        </h3>
                        <p className={styles.gallerySubtitle}>
                            Explore heartwarming dog photos that brighten your day instantly.
                        </p>
                    </div>
                    <div className={styles.galleryPhotoGroup}>
                        <img
                            src={dogWithCollar}
                            alt="A close-up of a fluffy puppy with collar."
                            className={styles.photoFirst}
                        />
                        <img
                            src={dogWithGlasses}
                            alt="A dog with a concentrated expression on his face sits outside and wears glasses."
                            className={styles.photoSecond}
                        />
                        <img
                            src={dogWithBeard}
                            alt="A black dog looking at the camera and having a white beard"
                            className={styles.photoThird}
                        />
                        <img
                            src={dogWithOpenMouth}
                            alt="Happy dog with open mouth."
                            className={styles.photoFourth}
                        />
                    </div>
                </div>
            </section>
            <section className={styles.commentSection}>
                <div className={styles.commentContent}>
                    <img
                        src={brownDog}
                        alt="Brown dog with a dark muzzle looking to the side."
                        className={styles.commentImage}
                    />
                    <div className={styles.commentTextBox}>
                        <p className={styles.commentStars}>
                            ★★★★★
                        </p>
                        <p className={styles.commentText}>
                            Woofville's dog photos bring joy and warmth, brightening my day with every adorable image!
                        </p>
                        <div className={styles.commentUser}>
                            <img
                                src={userPhoto}
                                alt="Small brown puppy with a white spot."
                                className={styles.userImage}
                            />
                            <p className={styles.userName}>
                                Happy User
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;