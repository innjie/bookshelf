import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';
import {getIdx} from "../../js/functions";


function NoticeUpdate() {
    const location = useLocation();
    const keyword = getIdx(location);
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
    // update notice
    const updateNotice = (idx) => {
        axios.post("/notice/update", null, {
            params: {
                idx : idx,
                title :title,
                contents : contents
            }
        }).then(res => alert(res.data.result))
            .catch(error => console.log(error));

        window.location.href="/notice/list";
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

        </div>
    );
}

export default NoticeUpdate;