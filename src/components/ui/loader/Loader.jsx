import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.threeBody}>
                <div className={styles.threeBodyDot} />
                <div className={styles.threeBodyDot} />
                <div className={styles.threeBodyDot} />
            </div>
        </div>
    );
};

export default Loader;