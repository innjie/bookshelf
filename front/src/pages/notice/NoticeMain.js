import React, {useEffect, useState} from 'react';
import axios from 'axios';

function NoticeMain() {
    const [noticeList, setList] = useState([]);
    // let array = list.map((value, key) => <li key = {key}>value</li>);
    useEffect(() => {
        axios.get("/notice/list")
            .then(res => setList(res.data.noticeList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <p> this is NoticeMain.js</p>
            {noticeList.map((notice, idx) => {
                return (
                    <div key={idx}>
                        {notice.title}
                        {notice.author}
                    </div>
                )
            })}
        </div>
    );
}
export default NoticeMain;