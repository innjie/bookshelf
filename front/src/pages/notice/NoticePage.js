import React, {useEffect, useState} from 'react';
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
    useEffect(() => {
        axios.get("/notice/detail", {
            params: {
                idx: parseInt(keyword)
            }
        })
            .then(res => setNotice(res.data.notice))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="noticeContent">
            <if state === 'detail'>
                notice detail
                <input type = "button" value="수정하기"
                       onClick={() => setState('update')}
                       className="btn btn-sm"/>
            </if>
            <div className="update">
                notice page
            </div>


        </div>
    );
}

function getDetailContent() {
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
                   onClick={() => updateNotice(notice.idx)}
                   className="btn btn-sm"/>
            <input type="button" value="뒤로가기" onClick={handleHistory}
                   className="backToPage btn btn-toolbar btn-sm"/>
        </div>
    )
}

function getUpdateContent() {

}

export default NoticePage;