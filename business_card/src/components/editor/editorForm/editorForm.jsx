import React from 'react';
import styles from './editorForm.module.css';

const EditorForm = (props) => {



    return(
        <form action="#" className={styles.editorForm}>
            <div>
                <input type="text" placeholder="이름을 입력하세요" className={styles.name}/>
                <input type="text" placeholder="회사를 입력하세요" className={styles.company}/>
                <input type="color" className={styles.color}/>
            </div>
            <div>
                <input type="text" placeholder="직업을 입력하세요" className={styles.job}/>
                <input type="email" placeholder="이메일을 입력하세요" className={styles.email}/>
            </div>
            <div>
                <input type="text" placeholder="소개를 입력하세요" className={styles.introduce}/><br />
            </div>
            <div>
                <button>이미지 업로드</button>
                <button>삭제</button>
            </div>
        </form>
    );
};

export default EditorForm;