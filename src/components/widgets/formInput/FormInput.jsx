import styles from "./formInput.module.scss"

const FormInput = ({ name, label, icon: Icon, rules, placeholder, type, register, error, isPasswordVisible }) => {
    return (
        <div className={styles.authElement}>
            <label className={styles.authElementLabel}>{label}</label>
            <div>
                <Icon />
                <input
                    className={styles.authElementInput}
                    {...register(name, rules)}
                    placeholder={placeholder}
                    type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                />
            </div>
            {error && <span className={styles.authError}>{error.message}</span>}
        </div>
    );
};

export default FormInput;