import React from 'react';
import styles from './editorForm.module.css';

const EditorForm = ({card}) => {

    const {name, company, job, email, introduce, fileName, fileURL} = card;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('button');
    }

    return(
        <form className={styles.editorForm}>
            <div>
                <input type="text" name="name" value={name} placeholder="이름을 입력하세요" className={styles.name}/>
                <input type="text" name="company" value={company} placeholder="회사를 입력하세요" className={styles.company}/>
            </div>
            <div>
                <input type="text" name="job" value={job} placeholder="직업을 입력하세요" className={styles.job}/>
                <input type="email" name="email" value={email} placeholder="이메일을 입력하세요" className={styles.email}/>
            </div>
            <div>
                <textarea name="introduce" placeholder="정보를 입력해주세요" value={introduce}></textarea>
            </div>
            <div>
                <button>이미지 업로드</button>
                <button onClick={onSubmit}>삭제</button>
            </div>
        </form>
    );
};

export default EditorForm;