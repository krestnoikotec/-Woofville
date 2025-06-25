import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "@/redux/slices/UserSlice.js";
import styles from "./userMenu.module.scss";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import {signOutUser} from "@/features/auth.js";
import FormInput from "@/components/widgets/formInput/FormInput.jsx";

const UserMenu = ({closeMenu}) => {

    const [changedUser, setChangedUser] = React.useState(false);

    const dispatch = useDispatch();

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

    return (
        <div className={styles.userMenuContainer}>
            <MyButton onClick={() => handleLogout()}>
                Logout
            </MyButton>
            <MyButton onClick={() => setChangedUser(true)}>
                Change user name
            </MyButton>
            {changedUser && (
                <></>
            )}
            <MyButton>
                Delete user
            </MyButton>
        </div>
    );
};

export default UserMenu;