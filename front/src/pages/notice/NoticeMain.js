import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeMain.css';
function NoticeMain() {
    const [noticeList, setList] = useState([{
        idx: '',
        title: '',
        content: ''
    }]);
    // let array = list.map((value, key) => <li key = {key}>value</li>);
    useEffect(() => {
        axios.get("/notice/list")
            .then(res => setList(res.data.noticeList))
            .catch(error => console.log(error))

    }, []);

    return (
        <div>
            <div className="noticeList">
                <table className="noticeTable">
                    <thead>
                    <tr>
                        <th className="col-lg-2">
                            번호
                        </th>
                        <th className="col-lg-10">
                            제목
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {noticeList.map((notice, idx) => {
                        return (
                            <tr key={notice.idx}>
                                <td>{notice.idx}</td>
                                <td>{notice.title}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

function noticeListResult() {

}

export default NoticeMain;