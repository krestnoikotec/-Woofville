import React from 'react';
import {motion} from 'framer-motion';
import styles from './about.module.scss';
import MyButton from "../../components/widgets/button/MyButton.jsx";
import curlyDog from "@/assets/images/curlyDog.webp"
import brownDog from "@/assets/images/brownDog.webp"
import dogWithBeard from "@/assets/images/dogWithBeard.webp"
import dogWithCollar from "@/assets/images/dogWithCollar.webp"
import dogWithGlasses from "@/assets/images/dogWithGlasses.webp"
import dogWithOpenMouth from "@/assets/images/dogWithOpenMouth.webp"
import happyDog from "@/assets/images/happyDog.webp"
import userPhoto from "@/assets/images/userPhoto.webp"

const listItems = [
    {
        title: "Puppy Love",
        description: "Discover the charm of puppies through captivating images that warm your heart.",
    },
    {
        title: "Adorable Dog Moments",
        description: "Delight in heartwarming images of dogs that will make you smile.",
    },
    {
        title: "Joyful Paws",
        description: "Experience the happiness that comes from viewing playful and loving dog photos.",
    },
];

const scrollAnimation = {
    hidden: {
        y: 70,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { duration: .4, delay: custom * 0.2 },
    }),
}

const animation = {
    initial: "hidden",
    whileInView: "visible",
}

const About = () => {

    return (
        <div className={styles.aboutPage}>
            <section
                className={styles.heroSection}>
                <motion.h1
                    variants={scrollAnimation}
                    {...animation}
                    viewport={{once: true}}
                    className={styles.heroTitle}>
                    Escape into a World of Adorable Dogs
                </motion.h1>
                <motion.p
                    custom={.5}
                    variants={scrollAnimation}
                    {...animation}
                    viewport={{once: true}}
                    className={styles.heroSubtitle}>
                    Brighten your day with delightful dog photos that bring joy and warmth to your heart.
                </motion.p>
                <motion.div
                    custom={1}
                    variants={scrollAnimation}
                    {...animation}
                    viewport={{once: true}}
                >
                    <MyButton to="/search">
                        Explore
                    </MyButton>
                </motion.div>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.infoContent}>
                    <motion.h3
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.infoTitle}>
                        Discover Joy Through Dog Photos
                    </motion.h3>
                    <motion.p
                        custom={.5}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.infoSubtitle}>
                        Welcome to Woofville, where we celebrate the joy and warmth that dogs bring to our lives through captivating images that uplift your spirit and brighten your day.
                    </motion.p>
                    <motion.div
                        custom={1}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={`${styles.statItem}  ${styles.statsFirst}`}>
                        <h3 className={styles.statNumber}>150+</h3>
                        <p className={styles.statLabel}>Love Dogs</p>
                    </motion.div>
                    <motion.div
                        custom={1.5}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={`${styles.statItem} ${styles.statsSecond}`}>
                        <h3 className={styles.statNumber}>15</h3>
                        <p className={styles.statLabel}>Join Our Community</p>
                    </motion.div>
                    <motion.img
                        loading="lazy"
                        custom={2}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.infoImage}
                        src={curlyDog}
                        alt="A fluffy dog with curly fur and big eyes gazes attentively at the camera, resting on soft, neutral-toned blankets. The lighting is warm and cozy, highlighting the dog's mischievous yet endearing expression."
                    />
                </div>
            </section>
            <section className={styles.connectionSection}>
                <div className={styles.connectionContent}>
                    <motion.h3
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.connectionTitle}>
                        Cute Dog Gallery
                    </motion.h3>
                    <motion.p
                        custom={.5}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.connectionSubTitle}>
                        Explore adorable dog photos that brighten your day and bring joy to your life.
                    </motion.p>
                    <motion.ul
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        className={styles.connectionTextGroup}>
                        {listItems.map((item, i) => {
                            return (
                            <motion.li
                                custom={i*0.7}
                                variants={scrollAnimation}
                                key={item.title} className={styles.connectionItem}>
                                <h5 className={styles.itemHeading}>{item.title}</h5>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </motion.li>
                        )})}
                    </motion.ul>
                    <motion.img
                        loading="lazy"
                        custom={1}
                        variants={scrollAnimation}
                        {...animation}
                        viewport={{once: true}}
                        src={happyDog}
                        alt="A small dog rests its head on a person's knees, smiling as its ear is gently scratched."
                        className={styles.connectionImage}
                    />
                </div>
            </section>
            <section className={styles.gallerySection}>
                <div className={styles.galleryContent}>
                    <div className={styles.galleryText}>
                        <motion.h3
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            className={styles.galleryTitle}
                        >
                            Dog Gallery
                        </motion.h3>
                        <motion.p
                            custom={.5}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            className={styles.gallerySubtitle}>
                            Explore heartwarming dog photos that brighten your day instantly.
                        </motion.p>
                    </div>
                    <div className={styles.galleryPhotoGroup}>
                        <motion.img
                            loading="lazy"
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            src={dogWithCollar}
                            alt="A close-up of a fluffy puppy with collar."
                            className={styles.photoFirst}
                        />
                        <motion.img
                            loading="lazy"
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            src={dogWithGlasses}
                            alt="A dog with a concentrated expression on his face sits outside and wears glasses."
                            className={styles.photoSecond}
                        />
                        <motion.img
                            loading="lazy"
                            custom={.5}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            src={dogWithBeard}
                            alt="A black dog looking at the camera and having a white beard"
                            className={styles.photoThird}
                        />
                        <motion.img
                            loading="lazy"
                            custom={.5}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            src={dogWithOpenMouth}
                            alt="Happy dog with open mouth."
                            className={styles.photoFourth}
                        />
                    </div>
                </div>
            </section>
            <motion.section
                variants={scrollAnimation}
                {...animation}
                viewport={{once: true}}
                className={styles.commentSection}
            >
                <div className={styles.commentContent}>
                    <img
                        loading="lazy"
                        src={brownDog}
                        alt="Brown dog with a dark muzzle looking to the side."
                        className={styles.commentImage}
                    />
                    <div className={styles.commentTextBox}>
                        <motion.p
                            custom={.3}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            className={styles.commentStars}
                        >
                            ★★★★★
                        </motion.p>
                        <motion.p
                            custom={.6}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            className={styles.commentText}>
                            Woofville's dog photos bring joy and warmth, brightening my day with every adorable image!
                        </motion.p>
                        <motion.div
                            custom={.9}
                            variants={scrollAnimation}
                            {...animation}
                            viewport={{once: true}}
                            className={styles.commentUser}>
                            <img
                                loading="lazy"
                                src={userPhoto}
                                alt="Small brown puppy with a white spot."
                                className={styles.userImage}
                            />
                            <p className={styles.userName}>
                                Happy User
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;