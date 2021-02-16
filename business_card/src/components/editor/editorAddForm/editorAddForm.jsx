import React, { useRef, useState } from 'react';
import styles from './editorAddForm.module.css';

const EditorAddForm = ({FileInput, onAdd}) => {

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const introduceRef = useRef();
    const [imgData, setImgData] = useState({fileName:"", fileURL:""})

    const onSubmit = (e) => {
        e.preventDefault();
        const card = {
             id: Date.now(),
             name: nameRef.current.value || "",
             company: companyRef.current.value || "",
             job: jobRef.current.value || "",
             email: emailRef.current.value || "",
             introduce: introduceRef.current.value || "",
             fileName: imgData.fileName || "",
             fileURL: imgData.fileURL || "",
        }
        formRef.current.reset();
        setImgData({fileName:"", fileURL:""});
        onAdd(card);
    };

    const onFileChange = data => {
        setImgData({fileName: data.name, fileURL: data.url})
    };

    return(
        <form ref={formRef} className={styles.editorForm}>
            <div>
                <input ref={nameRef} type="text" name="name" placeholder="이름을 입력하세요" className={styles.name}/>
                <input ref={companyRef} type="text" name="company" placeholder="회사를 입력하세요" className={styles.company}/>
            </div>
            <div>
                <input ref={jobRef} type="text" name="job" placeholder="직업을 입력하세요" className={styles.job}/>
                <input ref={emailRef} type="email" name="email" placeholder="이메일을 입력하세요" className={styles.email}/>
            </div>
            <div>
                <textarea ref={introduceRef} name="introduce" placeholder="정보를 입력해주세요"></textarea>
            </div>
            <div>
                <FileInput name={imgData.fileName} onFileChange={onFileChange} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </form>
    );
};

export default EditorAddForm;