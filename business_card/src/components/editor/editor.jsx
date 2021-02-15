import React from 'react';
import styles from './editor.module.css'
import EditorForm from './editorForm/editorForm'

const Editor = ({cards}) => {
    
    return(
        <section className={styles.editor}>
            <h1 className={styles.editorTitle}>
                Card Editor
            </h1>

            {cards.map(card => <EditorForm card={card}/>)}
        </section>
    );
};

export default Editor;