import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({FileInput, authService}) => {

    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: '송재혁',
            company: '구직중',
            job: '프론트엔드 개발자',
            email: 'wakij6587@naver.com',
            introduce: '안녕하세요! 송재혁입니다.',
            fileName: 'song',
            fileURL: '/images/song.jpg'
        },
    });

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

    const AddUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return(
        <section className={styles.makerPageWrap}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerWrap}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    addCard={AddUpdateCard}
                    updateCard={AddUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards}/>
            </div>
            <Footer makerDesign={"maker"}/>
        </section>
    );

};

export default Maker;