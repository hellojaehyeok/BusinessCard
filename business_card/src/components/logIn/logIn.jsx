import React, { useEffect, useState } from 'react';
import styles from "./login.module.css"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useHistory } from 'react-router-dom';


const Login = ({authService}) => {


    const history = useHistory();
    const goMaker = (userId) => {
        history.push({
            pathname:"./maker",
            state : {id : userId},
        });
    }

    const onLogin = (e) =>{
        authService //
        .login(e.currentTarget.textContent)
        .then(data => goMaker(data.user.uid));
    };

    useEffect(() => {
        authService
        .onAuthChange(user => {
            user && goMaker(user.uid);
        });
    });

    return(
        <section className={styles.loginPageWrap}>
            <Header />

            <section className={styles.loginWrap}>
                <h1 className={styles.loginTitle}>Login</h1>
                <ul className={styles.listWrap}>
                    <li>
                        <button onClick={onLogin}>Google</button>
                    </li>

                    <li>
                        <button onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>

            <Footer />
        </section>
    );
};

export default Login;