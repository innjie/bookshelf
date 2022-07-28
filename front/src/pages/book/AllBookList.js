import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './booklist.css';

function AllBookList() {
    const [bookList, setList] = useState([]);
    // let array = list.map((value, key) => <li key = {key}>value</li>);
    useEffect(() => {
        axios.get("/book/list")
            .then(res => setList(res.data.bookList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <div>
                <input type="text" className="search-text"/>
                <input type="button" value = "검색" className="search-button"/>
                <input type="button" value="추가하기" className="btn-add"/>
            </div>
            {bookList.map((book, idx) => {
                return (
                    <div key={idx}>
                        {book.title}
                        {book.author}
                    </div>
                )
            })}
        </div>
    );
}

export default AllBookList;