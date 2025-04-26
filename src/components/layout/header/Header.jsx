import React from 'react';
import styles from './header.module.scss';
import MyButton from "../../ui/button/MyButton.jsx";
import LoginIcon from "../../icons/LoginIcon.jsx";
import LogoIcon from "../../icons/LogoIcon.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.headerLogo}>
                    <LogoIcon size = "5em" className={styles.headerLogoIcon}/>
                    <p></p>
                </Link>
            </div>
            <nav>
                <MyButton to="/">1</MyButton>
                <MyButton to="/search">2</MyButton>
                <MyButton to="/favorites">3</MyButton>
            </nav>
            <div>
                <LoginIcon />
            </div>
        </header>
    );
};

export default Header;