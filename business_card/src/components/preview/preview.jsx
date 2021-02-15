import React from 'react';
import styles from './preview.module.css';
import PreviewForm from './previewForm/previewForm';

const Preview = (props) => {
    

    return(
        <section className={styles.preview}>
            <h1 className={styles.previewTitle}>
                Card Preview
            </h1>

            <PreviewForm />
        </section>
    );
};

export default Preview;