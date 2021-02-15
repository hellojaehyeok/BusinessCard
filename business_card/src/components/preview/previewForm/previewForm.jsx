import React from 'react';
import styles from './previewForm.module.css';


const PreviewForm = (props) => {
    

    return(
        <div className={styles.previewForm}>
            <div className={styles.ImgWrap}>
                <img src="#" alt="프로필 이미지"/>
            </div>

            <div className={styles.textWrap}>
                <h2 className={styles.name}>송재혁</h2>
                <div className={styles.company}>회사명 / 직업</div>
                <div className={styles.email}>이메일</div>
                <p className={styles.introduce}>소개</p>
            </div>
        </div>
    );
};

export default PreviewForm;