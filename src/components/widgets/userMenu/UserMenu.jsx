import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {motion} from "framer-motion";
import {signOutUser} from "@/features/auth.js";
import {logoutUser} from "@/redux/slices/UserSlice.js";
import styles from "./userMenu.module.scss";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import FormInput from "@/components/widgets/formInput/FormInput.jsx";

const UserMenu = ({closeMenu}) => {

    const dispatch = useDispatch();

    const menuRef = useRef(null);

    const handleLogout = async () => {
        try{
            await signOutUser();
            dispatch(logoutUser());
            closeMenu();
        }
        catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [closeMenu]);

    return (
        <motion.div
            ref={menuRef}
            className={styles.userMenuContainer}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <MyButton onClick={() => handleLogout()}>
                Logout
            </MyButton>
        </motion.div>
    );
};

export default UserMenu;