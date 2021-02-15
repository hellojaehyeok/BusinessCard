import React from 'react';
import styles from './editor.module.css'
import EditorAddForm from './editorAddForm/editorAddForm';
import EditorForm from './editorForm/editorForm'

const Editor = ({cards, addCard, updateCard, deleteCard}) => {
    
    return(
        <section className={styles.editor}>
            <h1 className={styles.editorTitle}>
                Card Editor
            </h1>

            {Object.keys(cards).map(key => <EditorForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>)}

            <EditorAddForm onAdd={addCard}/>
        </section>
    );
};

export default Editor;