import React from 'react';
import styles from './footer.module.scss';
import FacebookIcon from "../../icons/FacebookIcon.jsx";
import InstagramIcon from "../../icons/InstagramIcon.jsx";
import TiktokIcon from "../../icons/TiktokIcon.jsx";
import XIcon from "../../icons/XIcon.jsx";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerIcons}>
                    <h4 className={styles.footerTitle}>
                        Joy
                    </h4>
                    <p className={styles.footerSubtitle}>
                        Explore delightful dog photos to brighten your day.
                    </p>
                    <div className={styles.iconsGroup}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className={styles.socialIcon} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className={styles.socialIcon}/>
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                            <TiktokIcon className={styles.socialIcon}/>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <XIcon className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.footerContacts}>
                    <h4 className={styles.footerTitle}>
                        Paws
                    </h4>
                    <p className={styles.footerSubtitle}>
                        woofville@dogmail.com
                    </p>
                    <p className={styles.footerSubtitle}>
                        123-456-7890
                    </p>
                </div>
                <div className={styles.footerNews}>
                    <h4 className={styles.footerTitle}>
                        Bark
                    </h4>
                    <p className={styles.footerSubtitle}>
                        Enter your email address
                    </p>
                    <form className={styles.newsForm}>
                        <input type="text" placeholder="example@example.com" className={styles.newsInput}/>
                        <input type="submit" value="Subscribe for cute updates" className={styles.newsButton}/>
                    </form>
                </div>
                <p className={styles.footerRights}>
                    © 2025. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;