import React, {useCallback, useEffect, useState} from 'react';
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

    const [notice, setNotice] = useState({
        idx: '',
        title: '',
        contents: '',
        updateDate: ''
    });
    const [title, setTitle] = useState('');

    const [contents, setContents] = useState('');

    // update notice
    const updateNotice = (idx) => {
        axios.put("/notice/update", null, {
            params: {
                idx: idx,
                title: title,
                contents: contents
            }
        }).then(res => alert(res.data.result))
            .catch(error => console.log(error));

        window.location.href = "/notice/list";
    }
    //get object
    useEffect(() => {
        axios.get("/notice/detail", {
            params: {
                idx: parseInt(keyword)
            }
        })
            .then(res => {

                setNotice(res.data.notice);
                console.log(res.data.notice);
                console.log(notice);
                setTitle(notice.title);
                console.log("title : " + title);
                setContents(notice.contents);
                console.log("contents : "  + contents);
            })
            .catch(error => console.log(error));
    },[]);
    const handleTitle = useCallback(e => {
        setTitle(e.target.value);
    }, []);
    const handleContents = useCallback(e => {
        setContents(e.target.value);
    }, []);
    return (
        <div className="notice-form">
            {/*제목*/}
            <div className="insert-title-section">
                <input type="text" value={title} className="insert-title" onChange={handleTitle}/>
            </div>

            {/*내용*/}
            <div className="insert-contents-section">
                <hr/>
                <textarea value={contents} className="insert-contents" onChange={handleContents}
                          placeholder="내용을 입력하세요">
                </textarea>
            </div>
            <input type="button" value="수정하기" onClick={() => updateNotice(keyword)}
                   className="thumbsUp btn btn-success btn-sm"/>
            <input type="button" value="뒤로가기" onClick={() => handleHistory}
                   className="backToPage btn btn-toolbar btn-sm"/>

        </div>
    );
}

export default NoticeUpdate;