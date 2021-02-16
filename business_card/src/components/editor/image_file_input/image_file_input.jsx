import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {

    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const onChange = async e => {
        setLoading(true);
        const uploaded = await imageUploader.upload(e.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url:uploaded.url,
        })
    } 

    const onClickInput = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }


    return(
        <div className={styles.ImageButtonWrap}>
            <input className={styles.imageInput} onChange={onChange} ref={inputRef} type="file" accept="image/*" name="profileImg"/>
            {!loading && <button className={`${styles.button} ${name?styles.activeInput:""}`} onClick={onClickInput}>
                {name || "이미지 업로드"}
            </button>}
            
            {loading && <div className={styles.loading}></div>}
            
        </div>
    );
};

export default ImageFileInput;