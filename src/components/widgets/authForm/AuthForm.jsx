import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import styles from "./authForm.module.scss";
import {useDispatch} from "react-redux";
import {toggleOpenAuth} from "@/redux/slices/OpenAuthSlice.js";
import AppleLogo from "@/components/icons/AppleLogo.jsx";
import GoogleLogo from "@/components/icons/GoogleLogo.jsx";
import LockSymbol from "@/components/icons/LockSymbol.jsx";
import AtSymbol from "@/components/icons/AtSymbol.jsx";
import UserIcon from "@/components/icons/UserIcon.jsx";
import FormInput from "@/components/widgets/formInput/FormInput.jsx";
import OpenLockSymbol from "@/components/icons/OpenLockSymbol.jsx";

const AuthForm = () => {
    const dispatch = useDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleFormSubmit = (data) => {
        console.log("Зареєстровано:", data);
    };

    const passwordValue = watch("password");

    useEffect(() => {
        const handleEscapePress = (e) => {
            if (e.key === "Escape") {
                dispatch(toggleOpenAuth());
            }
        }

            document.addEventListener("keydown", handleEscapePress);

            return () => {
                document.removeEventListener("keydown", handleEscapePress);
            };
    }, [dispatch]);

    const signInFields = [
        {
            name: "email",
            label: "Email",
            icon: AtSymbol,
            placeholder: "Enter your Email",
            type: "text",
            isPassword: false,
            rules: {
                required: "This field is required",
                pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Write valid address",
                },
            }
        },
        {
            name: "password",
            label: "Password",
            icon: isPasswordVisible ? OpenLockSymbol : LockSymbol,
            placeholder: "Enter your Password",
            type: "password",
            isPassword: true,
            isPasswordVisible: isPasswordVisible,
            toggleVisibility: () => setIsPasswordVisible((prev) => !prev),
            rules: {
                required: "This field is required",
                minLength: { value: 6, message: "Minimum 6 symbols" },
                pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message: "Must contain letters and numbers",
                },
            }
        }
    ];

    const signUpFields = [
        {
            name: "userName",
            label: "User name",
            icon: UserIcon,
            placeholder: "Enter your user name",
            type: "text",
            isPassword: false,
            rules: {
                required: "This field is required",
                pattern: {
                    value: /^[a-zA-Z0-9._-]{3,20}$/,
                    message: "Username must be 3-20 characters and contain only letters, numbers, '.', '-', '_'",
                },
            }
        },
        ...signInFields,
        {
            name: "repeatPassword",
            label: "Repeat Password",
            icon: isRepeatPasswordVisible ? OpenLockSymbol : LockSymbol,
            placeholder: "Repeat your Password",
            type: "password",
            isPassword: true,
            isPasswordVisible: isRepeatPasswordVisible,
            toggleVisibility: () => setIsRepeatPasswordVisible((prev) => !prev),
            rules: {
                required: "This field is required",
                validate: (value) => value === passwordValue || "Passwords do not match",
            }
        }
    ];

    return isSignIn ? (
                <div className={styles.authContainer} onClick={() => dispatch(toggleOpenAuth())}>
                    <div className={styles.authFormWrapper} onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.authForm}>
                            <div className={styles.authInfo}>
                                {signInFields.map((field) => (
                                    <FormInput
                                        key={field.name}
                                        {...field}
                                        register={register}
                                        error={errors[field.name]}
                                        isPasswordVisible={field.isPasswordVisible}
                                        isPassword={field.isPassword}
                                        toggleVisibility={field.toggleVisibility}
                                    />
                                ))}
                            </div>

                            <MyButton type="submit">Sign In</MyButton>
                        </form>
                        <p className={styles.authText}>Don't have an account?<a className={`${styles.authText} ${styles.authLink}`} onClick={() => setIsSignIn(!isSignIn)}> Sign up now </a></p>
                        <p className={styles.authText}>Or With</p>
                        <div className={styles.authButtons} >
                            <button className={styles.authButton}>
                                <GoogleLogo/>
                                Google</button>
                            <button className={styles.authButton}>
                                <AppleLogo/>
                                Apple</button>
                        </div>
                    </div>
                </div>
                ) : (
                <div className={styles.authContainer} onClick={() => dispatch(toggleOpenAuth())}>
                    <div className={styles.authFormWrapper} onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.authForm}>
                            <div className={styles.authInfo}>
                                {signUpFields.map((field) => (
                                    <FormInput
                                        key={field.name}
                                        {...field}
                                        register={register}
                                        error={errors[field.name]}
                                        isPasswordVisible={field.isPasswordVisible}
                                        isPassword={field.isPassword}
                                        toggleVisibility={field.toggleVisibility}
                                    />
                                ))}
                            </div>

                            <MyButton type="submit">Sign Up</MyButton>
                        </form>
                        <p className={styles.authText}>Already have an account?<a className={`${styles.authText} ${styles.authLink}`} onClick={() => setIsSignIn(!isSignIn)}> Sign in now </a></p>
                    </div>
                </div>
            )
    ;
};

export default AuthForm;
