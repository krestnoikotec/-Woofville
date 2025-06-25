import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import {loginUser, registerUser, signInWithGitHub, signInWithGoogle} from "@/features/auth.js";
import {setUser} from "@/redux/slices/UserSlice.js";
import {useDispatch} from "react-redux";
import {toggleOpenAuth} from "@/redux/slices/OpenAuthSlice.js";
import {motion} from "framer-motion";
import styles from "./authForm.module.scss";
import MyButton from "@/components/widgets/button/MyButton.jsx";
import GoogleLogo from "@/components/icons/GoogleLogo.jsx";
import LockSymbol from "@/components/icons/LockSymbol.jsx";
import AtSymbol from "@/components/icons/AtSymbol.jsx";
import UserIcon from "@/components/icons/UserIcon.jsx";
import FormInput from "@/components/widgets/formInput/FormInput.jsx";
import OpenLockSymbol from "@/components/icons/OpenLockSymbol.jsx";
import GitHubLogo from "@/components/icons/GitHubLogo.jsx";

const AuthForm = () => {

    const dispatch = useDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        watch,
    } = useForm();

    const handleFormSubmit = async (data) => {
        try{
            const {email, password, userName} = data;

            if(isSignIn){
                const res = await loginUser(email, password, userName);
                console.log(res.user);
                dispatch(setUser({
                    email: res.user.email,
                    uid: res.user.uid,
                    displayName: res.user.displayName,
                }));
                dispatch(toggleOpenAuth())
            } else {
                const res = await registerUser(email, password, userName);
                console.log(res.user);
                dispatch(setUser({
                    email: res.user.email,
                    uid: res.user.uid,
                    displayName: res.user.displayName,
                }));
                dispatch(toggleOpenAuth())
            }
        }
        catch(err){
            console.log("Error catch:", err);
            switch(err.code) {
                case "auth/user-not-found":
                    setError("email", { type: "manual", message: "Account does not exist" });
                    break;
                case "auth/wrong-password":
                    setError("password", { type: "manual", message: "Wrong password" });
                    break;
                case "auth/email-already-in-use":
                    setError("email", { type: "manual", message: "This email is already registered" });
                    break;
                case "auth/invalid-credential":
                    // Тут можеш показати загальне повідомлення, наприклад:
                    setError("email", { type: "manual", message: "Invalid credentials provided" });
                    break;
                default:
                    console.error("Unhandled error:", err);
                // Можеш показати глобальне повідомлення про помилку, якщо хочеш
            }
        }
    };

    const handleGoogleLogin = async () => {
        try{
            const res = await signInWithGoogle();

            dispatch(setUser({
                email: res.user.email,
                uid: res.user.uid,
                displayName: res.user.displayName,
            }))
            dispatch(toggleOpenAuth())
        }
        catch(err){
            console.error(err);
        }
    }

    const handleGitHubLogin = async () => {
        try{
            const res = await signInWithGitHub();

            dispatch(setUser({
                email: res.user.email,
                uid: res.user.uid,
                displayName: res.user.displayName,
            }))
            dispatch(toggleOpenAuth())
        }
        catch(err){
            console.error(err);
        }
    }

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
                    message: "Must contain only letters and numbers",
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

    return (
                <motion.div
                    className={styles.authContainer}
                    onClick={() => dispatch(toggleOpenAuth())}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.authFormWrapper}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {isSignIn ? (<>
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
                            <p className={styles.authText}>Don't have an account? <a className={`${styles.authText} ${styles.authLink}`} onClick={() => setIsSignIn(!isSignIn)}>Sign up now </a></p>
                            <p className={styles.authText}>Or With</p>
                            <div className={styles.authButtons} >
                                <button className={styles.authButton} onClick={handleGoogleLogin}>
                                    <GoogleLogo/>
                                    Google</button>
                                <button className={styles.authButton} onClick={handleGitHubLogin}>
                                    <GitHubLogo/>
                                    GitHub</button>
                            </div>
                        </>) : (
                            <>
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

                            </>
                        )}
                    </motion.div>
                </motion.div>
            );
};

export default AuthForm;
