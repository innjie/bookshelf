import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './BookmarkMain.css';
import {
    Link, Switch, Route, BrowserRouter, useLocation, useHistory
} from 'react-router-dom';
import {getIdx} from "../../js/functions";
function BookmarkMain() {
    const location = useLocation();
    const keyword = getIdx(location);
    const history = useHistory();
    const handleHistory = () => {
        history.goBack();
    }
    // 리스트 객체
    const [bookmarkList, setList] = useState([{
        idx: '',
        title: '',
        content: '',
        updateDate: ''
    }]);
    // 백엔드단에서 리스트 객체를 가져오는 부분
    useEffect(() => {
        axios.get("/bookmark/list", {
            params : {
                idx : parseInt(keyword)
            }
        })
            .then(res => setList(res.data.bookmarkList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <div className="bookmarkList">
                <table className="bookmarkTable">
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
                    {bookmarkList.map((bookmark, idx) => {
                        return (
                            <tr key={bookmark.idx}>
                                <td>{bookmark.idx}</td>
                                <td className="list-title">
                                    <Link to={"/bookmark/detail?idx=" + `${bookmark.idx}`} className="title-link">
                                        {bookmark.title}
                                    </Link>
                                </td>
                                <td>{bookmark.updateDate.split("T")[0]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookmarkMain;