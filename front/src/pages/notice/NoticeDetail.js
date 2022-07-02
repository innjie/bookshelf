import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeDetail.css';

function NoticeDetail({idx}) {
    const [isList, setListState] = useState(false);

    useEffect(() => {
        axios.get("/notice/detail", {
            params : {
                idx : idx
            }
        })
    })
    function noticeDetail(idx) {
        setListState(true);
        const result = axios.get("/notice/detail", {
            params : {
                idx : idx
            }
        });
    }
    return (
        <div className="noticeContent">

        </div>
    );
}


export default NoticeDetail;