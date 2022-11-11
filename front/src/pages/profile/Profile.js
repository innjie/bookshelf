import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Profile.css';
import {
    Link
} from "react-router-dom";

function Profile() {
    const [profileList, setList] = useState([{
        idx: '',
        nickname: '',
        id: ''
    }]);

    useEffect(() => {
        axios.get("/profile/list")
            .then(res => setList(res.data.userList))
            .catch(error => console.log(error))

    }, []);
    const insertProfileForm = () => {
        window.location.href = "/profile/insert";
    }
    return (
        <div>
            <div className="insertButton">
                <input type="button" className="btn-add" value="추가하기"
                       onClick={insertProfileForm}/>
            </div>


            <div className="profiles">
                {/* click */}
                {profileList.map((profile, idx) => {
                    return (
                        <tr key={profile.idx}>
                            <td className="list-profile">
                                <Link to={"/profile/detail?idx=" + `${profile.idx}`} className="profile-link">
                                    {profile.nickname}
                                </Link>

                            </td>
                        </tr>
                    )
                })}
            </div>
        </div>
    );
}

export default Profile;