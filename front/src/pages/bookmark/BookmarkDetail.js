import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Link, useHistory, useLocation
} from "react-router-dom";
import {getIdx} from "../../js/functions";

function BookmarkDetail() {
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
            <div className= "profile-space">
                {profile.nickname} <br/>
                <Link to = {"/bookmark/detail?userIdx=" + `${profile.idx}` + "&pageNo=1"}>
                    북마크 이동하기 (클릭)
                </Link>

            </div>


        </div>
    )
}
export default BookmarkDetail;