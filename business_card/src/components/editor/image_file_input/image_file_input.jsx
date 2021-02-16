import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {

    const inputRef = useRef();

    const onChange = async e => {
        const uploaded = await imageUploader.upload(e.target.files[0]);
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
            <button className={styles.button} onClick={onClickInput}>{name || "이미지 업로드"}</button>
        </div>
    );
};

export default ImageFileInput;