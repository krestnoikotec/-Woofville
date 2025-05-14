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
                    <h3 className={styles.iconsTitle}>
                        Joy
                    </h3>
                    <p className={styles.iconsSubtitle}>
                        Explore delightful dog photos to brighten your day.
                    </p>
                    <div className={styles.iconsGroup}>
                        <FacebookIcon className={styles.socialIcon}/>
                        <InstagramIcon className={styles.socialIcon}/>
                        <TiktokIcon className={styles.socialIcon}/>
                        <XIcon className={styles.socialIcon}/>
                    </div>
                </div>
                <div className={styles.footerContacts}>
                    <h5 className={styles.constactsTitle}>
                        Paws
                    </h5>
                    <div className={styles.contactsGroup}>
                        <p className={styles.contant}>
                            woofville@dogmail.com
                        </p>
                        <p className={styles.contact}>
                            123-456-7890
                        </p>
                    </div>
                </div>
                <div className={styles.footerNews}>
                    <h5 className={styles.newsTitle}>
                        Bark
                    </h5>
                    <p className={styles.newsSybtitle}>
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