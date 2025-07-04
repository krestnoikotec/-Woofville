import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "@/redux/slices/BurgerSlice.js";
import {Link} from "react-router-dom";
import {toggleOpenAuth} from "@/redux/slices/OpenAuthSlice.js";
import {AnimatePresence} from "framer-motion";
import styles from './header.module.scss';
import MyButton from "@/components/widgets/button/MyButton.jsx";
import LoginIcon from "@/components/icons/LoginIcon.jsx";
import LogoIcon from "@/components/icons/LogoIcon.jsx";
import ThemeSwitcher from "@/components/widgets/themeSwitcher/ThemeSwitcher.jsx";
import BurgerButton from "@/components/widgets/burgerButton/BurgerButton.jsx";
import UserIcon from "@/components/icons/UserIcon.jsx";
import UserMenu from "@/components/widgets/userMenu/UserMenu.jsx";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const isBurgerOpen = useSelector(state => state.burger.isBurgerOpen);
    const isAuth = useSelector(state => state.user.isAuthenticated);
    const userName = useSelector(state => state.user.displayName);

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

    const closeUserMenu = () => {
        setIsUserMenuOpen(false);
    }

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
                        {isAuth ? (
                            <div className={styles.userWrapper}>
                                <button className={styles.headerAuthentication} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                                    <UserIcon className={styles.headerLoginIcon} height={48} width={48} strokeWidth={1.8}/>
                                    <p className={styles.headerLoginText}>{userName}</p>
                                </button>

                            </div>
                        ) : (
                            <button className={styles.headerAuthentication} onClick={() => dispatch(toggleOpenAuth())}>
                                <LoginIcon className={styles.headerLoginIcon} />
                                <p className={styles.headerLoginText}>LOG IN</p>
                            </button>
                        )}
                    </div>
                    <AnimatePresence mode="wait">
                        {isUserMenuOpen && (
                                <UserMenu closeMenu={closeUserMenu}/>
                        )}
                    </AnimatePresence>
                </>
            )}
            {!isDesktop && (
                <BurgerButton />
            )}
        </header>
    );
};


export default Header;