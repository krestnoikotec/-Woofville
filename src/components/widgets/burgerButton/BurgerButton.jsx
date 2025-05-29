import React from 'react';
import styles from './burgerButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {toggleBurger} from "../../../redux/slices/BurgerSlice.js";

const BurgerButton = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state) => state.burger.isBurgerOpen);

    return (
        <div className={styles.burger}>
            <input onChange={() => dispatch(toggleBurger())} type="checkbox" id="burger-toggle" className={styles.checkbox} checked={isOpen}/>
            <label htmlFor="burger-toggle" className={styles.toggle}>
                <div className={`${styles.bars} ${styles.bar1}`} />
                <div className={`${styles.bars} ${styles.bar2}`} />
                <div className={`${styles.bars} ${styles.bar3}`} />
            </label>
        </div>
    );
};

export default BurgerButton;
