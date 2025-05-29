import React from 'react';
import styles from "./menu.module.scss";
import LoginIcon from "../../icons/LoginIcon.jsx";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher.jsx";
import MyButton from "../../ui/button/MyButton.jsx";
import BurgerButton from "../burgerButton/BurgerButton.jsx";
import {useDispatch} from "react-redux";
import {toggleBurger} from "../../../redux/slices/BurgerSlice.js";

const Menu = () => {

    const dispatch = useDispatch();

    return (
        <div className={styles.menu} onClick={() => dispatch(toggleBurger())}>
            <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.menuHead}>
                    <ThemeSwitcher/>
                    <BurgerButton/>
                </div>
                <div className={styles.menuAuthentication}>
                    <LoginIcon className={styles.menuLoginIcon}/>
                    <p className={styles.menuLoginText}>LOG IN</p>
                </div>
                <nav className={styles.menuNavButtons}>
                    <MyButton to="/" onClick={() => dispatch(toggleBurger())}>ABOUT</MyButton>
                    <MyButton to="/search" onClick={() => dispatch(toggleBurger())}>SEARCH</MyButton>
                    <MyButton to="/favorites" onClick={() => dispatch(toggleBurger())}>FAVORITES</MyButton>
                </nav>
            </div>
        </div>
    );
};

export default Menu;