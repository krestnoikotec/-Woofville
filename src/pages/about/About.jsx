import React from 'react';
import styles from './about.module.scss';
import MyButton from "../../components/ui/button/MyButton.jsx";

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
                {/*<img className={styles.aboutDogImage1} src="https://media.istockphoto.com/id/1041987488/photo/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-hands-scratching-her-ear.jpg?s=612x612&w=0&k=20&c=NKGf8nmXVdksmNS0Ay696cVPNSIfCJJ1yu_y9jFGBsM=" alt="smillig dog"/>*/}
                {/*<img className={styles.aboutDogImage2} src="https://media.istockphoto.com/id/1155030342/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B6-%D0%BD%D0%B0-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%96.jpg?s=612x612&w=0&k=20&c=YtOaHQpZelmAYt5eGFZnBzwv5qd4C9Zzhb4yy6UJgfY=" alt="dog in the car"/>*/}
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
                        src="https://images.unsplash.com/photo-1584720611279-4bafbc05600a?auto=format&fit=clip&w=1224&q=100"
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
                        src="https://media.istockphoto.com/id/1041987488/photo/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-hands-scratching-her-ear.jpg?s=612x612&w=0&k=20&c=NKGf8nmXVdksmNS0Ay696cVPNSIfCJJ1yu_y9jFGBsM="
                        alt=""
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
                            src="https://images.unsplash.com/photo-1562619404-4589ea593cfa?auto=format&fit=clip&w=812&q=100"
                            alt=""
                            className={styles.photoFirst}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1544142092-9c5da16c05b8?auto=format&fit=clip&h=432&q=100"
                            alt=""
                            className={styles.photoSecond}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1619079647665-dcbf0ee7d720?auto=format&fit=clip&h=432&q=100"
                            alt=""
                            className={styles.photoThird}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1703345364306-8eb8d9174a46?auto=format&fit=clip&w=812&q=100"
                            alt=""
                            className={styles.photoFourth}
                        />
                    </div>
                </div>
            </section>
            <section className={styles.commentSection}>
                <div className={styles.commentContent}>
                    <img
                        src="https://images.unsplash.com/photo-1553882809-11e20087a8e0?auto=format&fit=clip&w=612&q=100"
                        alt=""
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
                                src="https://images.unsplash.com/photo-1621122082654-73c40fd4bc57?auto=format&fit=clip&w=48&q=100"
                                alt=""
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