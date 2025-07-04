import React, {useState} from 'react';
import {toggleBurger} from "@/redux/slices/BurgerSlice.js";
import {toggleOpenAuth} from "@/redux/slices/OpenAuthSlice.js";
import {motion} from "framer-motion";
import {logoutUser} from "@/redux/slices/UserSlice.js";
import {useDispatch, useSelector} from "react-redux";
import styles from "./menu.module.scss";
import LoginIcon from "@/components/icons/LoginIcon.jsx";
import ThemeSwitcher from "@/components/widgets/themeSwitcher/ThemeSwitcher.jsx";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import BurgerButton from "@/components/widgets/burgerButton/BurgerButton.jsx";
import UserIcon from "@/components/icons/UserIcon.jsx";
import {signOutUser} from "@/features/auth.js";

const Menu = () => {

    const isAuth = useSelector(state => state.user.isAuthenticated);
    const userName = useSelector(state => state.user.displayName);
    const isOpen = useSelector((state) => state.burger.isBurgerOpen);

    const dispatch = useDispatch();


    const handleLogout = async () => {
        try{
            await signOutUser();
            dispatch(logoutUser());
            if(isOpen) {
                dispatch(toggleBurger());
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            className={styles.menu}
            onClick={() => dispatch(toggleBurger())}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.menuHead}>
                    <ThemeSwitcher/>
                    <BurgerButton/>
                </div>
                {isAuth ? (
                        <button className={styles.menuAuthentication}>
                            <UserIcon className={styles.menuLoginIcon} height={48} width={48} strokeWidth={1.8}/>
                            <p className={styles.menuLoginText}>{userName}</p>
                        </button>
                ) : (
                    <button className={styles.menuAuthentication} onClick={() => dispatch(toggleOpenAuth())}>
                        <LoginIcon className={styles.menuLoginIcon} />
                        <p className={styles.menuLoginText}>LOG IN</p>
                    </button>
                )}
                <div className={styles.userMenuButtContainer}>
                    <nav className={styles.menuNavButtons}>
                        <MyButton to="/" onClick={() => dispatch(toggleBurger())}>About</MyButton>
                        <MyButton to="/search" onClick={() => dispatch(toggleBurger())}>Search</MyButton>
                        <MyButton to="/favorites" onClick={() => dispatch(toggleBurger())}>Favorites</MyButton>
                    </nav>
                    {isAuth && (<>
                        <MyButton onClick={() => handleLogout()}>
                            Logout
                        </MyButton>
                    </>)}
                </div>
            </div>
        </motion.div>
    );
};

export default Menu;