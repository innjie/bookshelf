import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeMain.css';
import NoticeDetail from "./NoticeDetail";

function NoticeMain() {
    const [isList, setListState] = useState(true);
    const [noticeList, setList] = useState([{
        idx: '',
        title: '',
        content: '',
        updateDate : ''
    }]);
    useEffect(() => {
        axios.get("/notice/list")
            .then(res => setList(res.data.noticeList))
            .catch(error => console.log(error))

    }, []);
    function noticeDetail(idx) {
        setListState(false);

    }
    return (
        <div>
            <div className="noticeList">
                <table className="noticeTable">
                    <thead>
                    <tr>
                        <th className="col-lg-2">
                            번호
                        </th>
                        <th className="col-lg-8">
                            제목
                        </th>
                        <th className="col-lg-2">
                            작성일자
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {noticeList.map((notice, idx) => {
                        return (
                            <tr key={notice.idx}>
                                <td>{notice.idx}</td>
                                <td onClick={function (e) {
                                    e.preventDefault();
                                    setListState(true);
                                    if(isList) {
                                        return <NoticeDetail idx={notice.idx}/>
                                    }
                                }.bind(this)}>{notice.title}</td>
                                <td>{notice.updateDate.split("T")[0]}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>

        </div>
    );
}


export default NoticeMain;