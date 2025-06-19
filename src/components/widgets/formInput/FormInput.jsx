import styles from "./formInput.module.scss"
import AlertSymbol from "@/components/icons/AlertSymbol.jsx";

const FormInput = ({ name, label, icon: Icon, rules, placeholder, type, register, error,   isPasswordVisible = false, toggleVisibility = () => {}, isPassword = false}) => {
    return (
        <div className={styles.authElement}>
            <label className={styles.authElementLabel}>{label}</label>
            <div className={styles.authInput}>
                {isPassword ? (
                    <div className={styles.iconWrapper} onClick={toggleVisibility}>
                        <Icon />
                    </div>
                ) : (
                    <Icon />
                )}
                <input
                    className={styles.authElementInput}
                    {...register(name, rules)}
                    placeholder={placeholder}
                    type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                />
            </div>
            {error && <span className={styles.authError}>
                <AlertSymbol/>
                {error.message}</span>}
        </div>
    );
};

export default FormInput;