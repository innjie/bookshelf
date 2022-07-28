import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Profile() {
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
        axios.get("/profile")
            .then(res => setList(res.data.bookList))
            .catch(error => console.log(error))

    }, []);
    const insertProfileForm = () => {
        window.location.href = "/profile/insert";
    }
    return (
        <div>
            <input type="button" className="btn-add" value = "추가하기"
                   onClick={insertProfileForm}
            />
        </div>
    );
}
export default Profile;