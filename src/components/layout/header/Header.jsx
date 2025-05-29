import React, {useEffect, useState} from 'react';
import styles from './header.module.scss';
import MyButton from "../../ui/button/MyButton.jsx";
import LoginIcon from "../../icons/LoginIcon.jsx";
import LogoIcon from "../../icons/LogoIcon.jsx";
import {Link} from "react-router-dom";
import ThemeSwitcher from "../../widgets/themeSwitcher/ThemeSwitcher.jsx";
import BurgerButton from "../../widgets/burgerButton/BurgerButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../../../redux/slices/BurgerSlice.js";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const isBurgerOpen = useSelector(state => state.burger.isBurgerOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 800);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isBurgerOpen && isDesktop) {
            dispatch(toggleBurger());
        }
    }, [isDesktop]);

    return (
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.headerLogo}>
                    <LogoIcon size="4em" className={styles.headerLogoIcon} />
                    <p className={styles.headerLogoText}>WOFVILLE</p>
                </Link>
            </div>
            {isDesktop && (
                <>
                    <nav className={styles.headerNavButtons}>
                        <MyButton to="/">ABOUT</MyButton>
                        <MyButton to="/search">SEARCH</MyButton>
                        <MyButton to="/favorites">FAVORITES</MyButton>
                    </nav>
                    <div className={styles.headerRightSide}>
                        <ThemeSwitcher />
                        <button className={styles.headerAuthentication}>
                            <LoginIcon className={styles.headerLoginIcon} />
                            <p className={styles.headerLoginText}>LOG IN</p>
                        </button>
                    </div>
                </>
            )}
            {!isDesktop && (
                <BurgerButton />
            )}
        </header>
    );
};


export default Header;