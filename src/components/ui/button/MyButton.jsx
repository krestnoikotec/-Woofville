import React from 'react';
import styles from './myButton.module.scss'
import {Link} from "react-router-dom";

const MyButton = ({to, children, ...props}) => {
    if(to){
        return (
            <Link className={styles.butt} {...props} to={to}>
                {children}
            </Link>
        )
    }

    return (
        <button {...props} className={styles.butt}>
            {children}
        </button>
    );
};

export default MyButton;