import { useForm } from "react-hook-form";
import MyButton from "@/components/widgets/button/MyButton"
import styles from "./authForm.module.scss"

interface FormInput {
    email: string;
    password: string;
    confirmPassword: string;
}

const AuthForm = () => {

    const { register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm<FormInput>();

    const onSubmit = (data: FormInput) => {
        console.log("Зареєстровано: ", data);
    }

    const password = watch('password')

    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
                <div className={styles.authElement}>
                    <label className={styles.authElementLabel}>
                        Email
                    </label>
                    <input
                        className={styles.authElementInput}
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                message: "Write valid address",
                            },
                        })}
                        type="email"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className={styles.authElement}>
                    <label className={styles.authElementLabel}>
                        Password
                    </label>
                    <input
                        className={styles.authElementInput}
                        {...register('password', {
                            required: 'This field is required',
                            minLength: {
                                value: 6,
                                message: "minimum 6 symbols"
                            }
                        })}
                        type="password"
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div className={styles.authElement}>
                    <label className={styles.authElementLabel}>
                        Repeat password
                    </label>
                    <input
                        className={styles.authElementInput}
                        {...register("confirmPassword", {
                            required: "Repeat password",
                            validate: (value) =>
                                value === password || "Passwords must be same",
                        })}
                        type="password"
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                <MyButton type="submit">
                    Login
                </MyButton>
            </form>
        </div>
    );
};

export default AuthForm;