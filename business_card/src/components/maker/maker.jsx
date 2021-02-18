import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({FileInput, authService, cardRepository}) => {

    const [cards, setCards] = useState({});

    const historyState = useHistory().state;
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();

    const onLogout = useCallback(
        () => {
            authService.logout();
        }, [authService]
    );

    useEffect(() => {
        if(!userId){
            return
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })

        return () => stopSync();
    }, [userId, cardRepository])

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else{
                history.push("/");
            }
        })
    }, [authService, history]);

    const AddUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

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
            <Footer />
        </section>
    );

};

export default Maker;