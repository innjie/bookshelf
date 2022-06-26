import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AllBookList() {
    // const bookList = {
    //     idx : '',
    //     title : '',
    //     author : '',
    //     contents : '',
    //     score : '',
    //     updateDate : '',
    //     isdelete : ''
    // };
    const [bookList, setList] = useState([]);
    // let array = list.map((value, key) => <li key = {key}>value</li>);
    useEffect(() => {
        axios.get("/book/list")
            .then(res => setList(res.data.bookList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <p> this is allbooklist.js</p>
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