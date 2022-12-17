import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Link, useHistory, useLocation
} from "react-router-dom";
import {getIdx} from "../../js/functions";

function ProfileDetail() {
    const location = useLocation();
    const keyword = getIdx(location);
    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }
    const [profile, setProfile] = useState({
        idx: '',
        nickname: '',
        id: ''
    });

    useEffect(() => {
        axios.get("/profile/detail", {
            params: {
                idx: parseInt(keyword)
            }
        })
            .then(res => setProfile(res.data.user))
            .catch(error => console.log(error))
    }, []);

    //data setting
    return (
        <div className = "profileDetailContent">
            <div>
                {profile.nickname}
            </div>


        </div>
    )
}
export default ProfileDetail;