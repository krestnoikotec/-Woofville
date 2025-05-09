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
                <h3 className={styles.infoTitle}>Discover Joy Through Dog Photos</h3>
                <p className={styles.infoSubtitle}>Welcome to Woofville, where we celebrate the joy and warmth that dogs bring to our lives through captivating images that uplift your spirit and brighten your day.</p>
                <div className={styles.infoStats}>
                    <div className={styles.statItem}>
                        <h3 className={styles.statNumber}>150+</h3>
                        <p className={styles.statLabel}>Love Dogs</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3 className={styles.statNumber}>15</h3>
                        <p className={styles.statLabel}>Join Our Community</p>
                    </div>
                </div>
                <img
                    className={styles.infoImage}
                    src="https://images.unsplash.com/photo-1584720611279-4bafbc05600a?auto=format&fit=clip&w=1224&q=100"
                    alt="A fluffy dog with curly fur and big eyes gazes attentively at the camera, resting on soft, neutral-toned blankets. The lighting is warm and cozy, highlighting the dog's mischievous yet endearing expression."
                />
            </section>
        </div>
    );
};

export default About;