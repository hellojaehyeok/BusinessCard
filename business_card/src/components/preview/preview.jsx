import React from 'react';
import styles from './preview.module.css';
import PreviewCard from './previewCard/previewCard';

const Preview = ({cards}) => {
    

    return(
        <section className={styles.preview}>
            <h1 className={styles.previewTitle}>
                Card Preview
            </h1>
            <ul>
                {cards.map(card => <PreviewCard key={card.id} card={card}/>)}
            </ul>
        </section>
    );
};

export default Preview;