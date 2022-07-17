import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeDetail.css';
import {getIdx} from '../../js/functions';
import {useLocation} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";

function NoticePage() {
    const location = useLocation();
    const keyword = getIdx(location);
    const history = useHistory();
    const handleHistory = () => {
        history.goBack();
    }
    const [state, setState] = useState('detail');
    const [notice, setNotice] = useState({
        idx: '',
        title: '',
        contents: '',
        updateDate: ''
    });

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const handleTitle = useCallback(e => {
        setTitle(e.target.value);
    }, []);
    const handleContents = useCallback(e => {
        setContents(e.target.value);
    }, []);
    useEffect(() => {
        axios.get("/notice/detail", {
            params: {
                idx: parseInt(keyword)
            }
        })
            .then(res => {
                setNotice(res.data.notice);
                console.log(notice);
                console.log("notice : " + notice);
                console.log("title : " + title);
                console.log("contents : "  + contents);
            })
            .catch(error => console.log(error));
    }, []);
    function getDetailContent(notice) {
        return (
            <div className="detail">
                <div>
                    {notice.title} <br/>
                    {/*조회수*/}
                </div>
                <div>
                    <hr/>
                    <textarea readOnly={true} value={notice.contents}>
                </textarea>

                </div>
                <input type="button" value="좋아요" className="thumbsUp btn btn-success btn-sm"/>

                <input type="button" value="수정하기"
                       onClick={() => {
                           setTitle(notice.title);
                           setContents(notice.contents);
                           setState('update')
                       }}
                       className="btn btn-sm"/>
                <input type="button" value="뒤로가기" onClick={handleHistory}
                       className="backToPage btn btn-toolbar btn-sm"/>
            </div>
        )
    }
    function updateNotice(notice) {
        return (
            <div className="notice-form">
                <input type="hidden" value={notice.idx}/>
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
        )
    }








    if (state === 'detail') {
        return (
            <div className="noticeContent">
                {getDetailContent(notice)}
            </div>
        );
    } else if (state === 'update') {
        return (
            <div className="update">
                {updateNotice(notice)}
            </div>
        );
    }

}

export default NoticePage;