import React, { memo, useState } from 'react';
import styles from "./footer.module.css"

const Footer = memo(
    () => {
        return(
            <footer>
                <p>
                    Made by Song Jae Hyeok
                </p>
            </footer>
        );
});

export default Footer;