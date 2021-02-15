import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({authService}) => {

    const [cards, setCards] = useState([
        {
            id: '1',
            name: '송재혁',
            company: '구직중',
            job: '프론트엔드 개발자',
            email: 'wakij6587@naver.com',
            introduce: '안녕하세요! 송재혁입니다.',
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

    const addCard = card => {
        const newCards = [...cards, card];
        setCards(newCards);
    }

    return(
        <section className={styles.makerPageWrap}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerWrap}>
                <Editor cards={cards} addCard={addCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer makerDesign={"maker"}/>
        </section>
    );

};

export default Maker;