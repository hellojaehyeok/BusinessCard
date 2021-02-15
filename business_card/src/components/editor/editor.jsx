import React from 'react';
import styles from './editor.module.css'
import EditorAddForm from './editorAddForm/editorAddForm';
import EditorForm from './editorForm/editorForm'

const Editor = ({cards, addCard}) => {
    
    return(
        <section className={styles.editor}>
            <h1 className={styles.editorTitle}>
                Card Editor
            </h1>

            {cards.map(card => <EditorForm key={card.id} card={card}/>)}

            <EditorAddForm onAdd={addCard}/>
        </section>
    );
};

export default Editor;