import React from 'react';
import styles from './myButton.module.scss'
import {Link} from "react-router-dom";

const MyButton = ({to, children, onClick, className, ...props}) => {
    if(to){
        return (
            <Link className={styles.butt} onClick={onClick} {...props} to={to}>
                {children}
            </Link>
        )
    }

    return (
        <button {...props} className={`${styles.butt} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;