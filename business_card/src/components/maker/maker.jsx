import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({authService}) => {

    const [cards, setCard] = useState([
        {
            id: '1',
            name: '송재혁',
            company: '구직중',
            job: '프론트엔드 개발자',
            email: 'wakij6587@naver.com',
            introduce: '안녕하세요! 송재혁입니다.',
            theme: "dark",
            fileName: 'Song',
            fileURL: null
        },
        {
            id: '2',
            name: '송개발',
            company: '구직중',
            job: '백엔드 개발자',
            email: 'wakij6587@gmail.com',
            introduce: '안녕하세요! 송개발입니다.',
            theme: "dark",
            fileName: 'Song',
            fileURL: null
        }
        
    ]);

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
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer makerDesign={"maker"}/>
        </section>
    );

};

export default Maker;