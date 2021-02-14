import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({authService}) => {
    
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push("/");
            }
        })
    });


    return(
        <section className={styles.makerPageWrap}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerWrap}>
                <Editor />
                <Preview />
            </div>
            <Footer makerDesign={"maker"}/>
        </section>
    );

};

export default Maker;