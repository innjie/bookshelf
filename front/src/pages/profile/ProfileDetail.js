import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

function ProfileDetail() {
    const [profile, setProfile] = userState({
        idx: '',
        nickname: '',
        id: ''
    });

    useEffect(() => {
        axios.get("/profile/detail")
            .then(res => setProfile(res.data.user))
            .catch(error => console.log(error))
    });

    //data setting
    return (
        <div>

        </div>
    )
}
export default ProfileDetail;