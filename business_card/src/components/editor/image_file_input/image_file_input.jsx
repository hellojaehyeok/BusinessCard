import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => {

    const inputRef = useRef();

    const onClickInput = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    return(
        <div className={styles.ImageButtonWrap}>
            <input className={styles.imageInput} ref={inputRef} type="file" />
            <button className={styles.button} onClick={onClickInput}>song</button>
        </div>
    );
};

export default ImageFileInput;