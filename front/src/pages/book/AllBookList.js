import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './booklist.css';
import {Link} from "react-router-dom";

function AllBookList() {
    const [bookList, setList] = useState([]);
    useEffect(() => {
        axios.get("/book/list")
            .then(res => setList(res.data.bookList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div className="list-contents">
            <div>
                <input type="text" className="search-text col-lg-5"/> &nbsp;
                <input type="button" value="검색" className="search-button col-lg-2"/>
                <input type="button" value="추가하기" className="btn-add col-lg-2"/>
            </div>
            <div className="book-list">
                <table className="book-table">
                    <thead>
                    <tr>
                        <th className="col-lg-7">
                            제목
                        </th>
                        <th className="col-lg-3">
                            저자
                        </th>
                        <th className="col-lg-2">
                            작성일자
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookList.map((book, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="list-title">
                                    <Link to={"/book/detail?idx=" + `${book.idx}`}
                                          className="title-link">{book.title}</Link>
                                </td>
                                <td>  {book.author}</td>
                                <td>{book.updateDate.split("T")[0]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllBookList;