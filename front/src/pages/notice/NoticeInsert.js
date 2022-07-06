import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './NoticeInsert.css';

function NoticeInsert() {
    const history = useHistory();
    const handleHistory = () => {
        history.goBack();
    }

    const [title, setTitle] = useState('');
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const [contents, setContents] = useState('');
    const handleContents = (e) => {
        setContents(e.target.value);
    }
    // insert notice
    const insertNotice = () => {
        const notice = {
            title: title,
            contents: contents
        }

        axios.post("/notice/insert", {
            params: {
                notice: notice
            }
        }).then(res => alert(res.data.result))
            .catch(error => console.log(error));
    }

    return (
        <div className="notice-form">
            {/*제목*/}
            <div className="insert-title-section">
                <input type="text" className="insert-title" onChange={handleTitle} placeholder="제목"/>
            </div>

            {/*내용*/}
            <div className="insert-contents-section">
                <hr/>
                <textarea className="insert-contents" onChange={handleContents} placeholder="내용을 입력하세요">
                </textarea>
            </div>
            <input type="button" value="등록" onClick={insertNotice} className="thumbsUp btn btn-success btn-sm"/>
            <input type="button" value="뒤로가기" onClick={handleHistory} className="backToPage btn btn-toolbar btn-sm"/>

        </div>
    );
}

export default NoticeInsert;