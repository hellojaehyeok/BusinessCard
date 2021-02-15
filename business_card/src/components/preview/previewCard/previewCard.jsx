import React from 'react';
import styles from './previewCard.module.css';

const defaultImg = '/images/defaultImg.jpg';

const PreviewCard = ({card}) => {
    
    const {name, company, job, email, introduce, fileName, fileURL} = card;

    const url = fileURL || defaultImg;

    return(
        <li className={styles.previewCard}>

            <img className={styles.image} src={url} alt="프로필 이미지"/>
            <div className={styles.textWrap}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.company}>{company} / {job}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.introduce}>{introduce}</p>
            </div>

        </li>
    );
};

export default PreviewCard;