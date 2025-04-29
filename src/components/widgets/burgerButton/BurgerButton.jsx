import React from 'react';
import styles from './burgerButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {toggleBurger} from "../../../redux/reducers/BurgerSlice.js";

const BurgerButton = () => {
    const dispatch = useDispatch();

    useSelector((state) => state.burger);

    return (
        <div>
            <input onChange={() => dispatch(toggleBurger())} type="checkbox" id="burger-toggle" className={styles.checkbox} />
            <label htmlFor="burger-toggle" className={styles.toggle}>
                <div className={`${styles.bars} ${styles.bar1}`} />
                <div className={`${styles.bars} ${styles.bar2}`} />
                <div className={`${styles.bars} ${styles.bar3}`} />
            </label>
        </div>
    );
};

export default BurgerButton;
