import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeDetail.css';
import {useLocation} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function NoticeDetail() {
    const location = useLocation();
    const keyword = getIdx(location);
    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }
    const [notice, setNotice] = useState({
        idx : '',
        title : '',
        contents : '',
        updateDate : ''
    });
    useEffect(() => {
        axios.get("/notice/detail", {
            params : {
                idx : parseInt(keyword)
            }
        })
            .then(res => setNotice(res.data.notice))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="noticeContent">
            <div>
                {notice.title} <br/>
                {/*조회수*/}
            </div>
            <div>
                <hr/>
                <textarea readOnly={true} value={notice.contents} >
                </textarea>

            </div>
            <input type="button" value = "좋아요" className="thumbsUp btn btn-success btn-sm" />
            <input type="button" value = "뒤로가기" onClick={handleHistory}  className="backToPage btn btn-toolbar btn-sm"/>

        </div>

    );
}
function getIdx(location) {
    var searchString = location.search;
    const params = new URLSearchParams(searchString);
    const keyword = params.get('idx');

    return keyword
}
export default NoticeDetail;