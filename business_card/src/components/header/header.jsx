import React from 'react';
import styles from './header.module.css'


const Header = ({onLogout}) => {
    

    return(
        <header className={styles.header}>
            {onLogout && <button className={styles.logoutButton} onClick={onLogout}>Logout</button>}
            Business Card Maker
        </header>
    );
};

export default Header;