import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeDetail.css';
import {useLocation} from "react-router-dom";
import * as QueryString from "qs";

function NoticeDetail({idx}) {
    const location = useLocation();
    const queryData = QueryString.parse(location.search);
    console.log(queryData);
    const params = new URLSearchParams(location.search);
    console.log(params);
    const keyword = params.get('idx');
    console.log("keyword : " + keyword);
    const [notice, setNotice] = useState({
        idx : '',
        title : '',
        content : '',
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
    }, [])
    function noticeDetail(idx) {
        const result = axios.get("/notice/detail", {
            params : {
                idx : parseInt(queryData)
            }
        });
    }
    return (
        <div className="noticeContent">
            <p>{notice.title}</p>

        </div>

    );
}


export default NoticeDetail;