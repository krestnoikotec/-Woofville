import React, { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from 'react';
import styles from '@/components/widgets/button/myButton.module.scss'
import { Link, LinkProps } from "react-router-dom";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
}

const MyButton: React.FC<MyButtonProps> = ({ to, children, onClick, ...props }) => {
    if (to) {
        // Прив'язуємо типи для Link через кастинг
        return (
            <Link className={styles.butt} onClick={onClick} {...(props as LinkProps)} to={to}>
                {children}
            </Link>
        );
    }

    return (
        <button {...props} className={styles.butt} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
