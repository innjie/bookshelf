import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NoticeMain.css';
import {
    Link, Switch, Route, BrowserRouter
} from 'react-router-dom';
function NoticeMain() {
    // 리스트 객체
    const [noticeList, setList] = useState([{
        idx: '',
        title: '',
        content: '',
        updateDate: ''
    }]);
    // 백엔드단에서 리스트 객체를 가져오는 부분
    useEffect(() => {
        axios.get("/notice/list")
            .then(res => setList(res.data.noticeList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <input type="button" value="추가하기"  className="btn-input btn-toolbar btn-close-white" onClick={insertNotice}/>
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
                    {/*클릭 시 상세 페이지로 이동 */}
                    {noticeList.map((notice, idx) => {
                        return (
                            <tr key={notice.idx}>
                                <td>{notice.idx}</td>
                                <td className="list-title">
                                    <Link to={"/notice/detail?idx=" + `${notice.idx}`} className="title-link">
                                        {notice.title}
                                    </Link>
                                </td>
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

function insertNotice() {
    window.location.href="/notice/insert";

}
export default NoticeMain;