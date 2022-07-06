import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './NoticeInsert.css';
function NoticeInsert() {
    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }
    return (
        <div className="notice-form">
            {/*제목*/}
            <div className="insert-title-section">
                <input type="text" id="insert-title" placeholder="제목" />
            </div>

            {/*내용*/}
            <div className="insert-contents-section">
                <hr/>
                <textarea id = "insert-contents" placeholder="내용을 입력하세요">
                </textarea>
            </div>
            <input type="button" value = "등록" className="thumbsUp btn btn-success btn-sm" />
            <input type="button" value = "뒤로가기" onClick={handleHistory}  className="backToPage btn btn-toolbar btn-sm"/>

        </div>
    );
}

export default NoticeInsert;