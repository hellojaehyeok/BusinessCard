import React from 'react';
import styles from './editor.module.css'
import EditorForm from './editorForm/editorForm'

const Editor = (props) => {
    
    return(
        <section className={styles.editor}>
            <h1 className={styles.editorTitle}>
                Card Editor
            </h1>

            <EditorForm />
        </section>
    );
};

export default Editor;