import React from 'react';
import styles from './header.module.css'


const Header = ({onLogout}) => {
    

    return(
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Business Card Maker</h1>
            {onLogout && <button className={styles.logoutButton} onClick={onLogout}>Logout</button>}
        </header>
    );
};

export default Header;