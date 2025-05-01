import React from 'react';
import styles from "./menu.module.scss";
import LoginIcon from "../../icons/LoginIcon.jsx";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher.jsx";
import MyButton from "../../ui/button/MyButton.jsx";

const Menu = () => {
    return (
        <div>
            <div className={styles.headerAuthentication}>
                <LoginIcon className={styles.headerLoginIcon}/>
                <p className={styles.headerLoginText}>LOGIN</p>
            </div>
            <ThemeSwitcher/>
            <nav className={styles.headerNavButtons}>
                <MyButton to="/">ABOUT</MyButton>
                <MyButton to="/search">SEARCH</MyButton>
                <MyButton to="/favorites">FAVORITES</MyButton>
            </nav>
        </div>
    );
};

export default Menu;