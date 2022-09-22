import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ProfileInsert.css'

function ProfileInsert() {
    const [nickname, setNickname] = useState('');
    const handleNickname = (e) => {
        setNickname(e.target.value);
    }
    const [id, setId] = useState('');
    const handleId = (e) => {
        setId(e.target.value);
    }
    const [password, setPassword] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleConfirmPassword = (e)  => {
        setConfirmPassword(e.target.value);
    }
    const [profileImg, setProfileImg] = useState(null);
    const handleProfileImg = async (e) => {
        const file = e.target.files[0];
        setProfileImg(file);
    }


    const insertProfile = async () => {
        const formData = new FormData();
        console.log("post :: " + profileImg);
        formData.append("nickname", nickname);
        formData.append("id", id);
        formData.append("password", password);
        formData.append("profileImg", new Blob([JSON.stringify(profileImg)], {type : "application/json"}));

        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        };

        console.log(formData.get("profileImg"));
        await axios.post("/profile/insert", formData, config)
            .then(res => alert(res.data.result))
            .catch(error => console.log(error));

        // window.location.href = "/profile/list";
    }
    return (
        <div className="insert-form">
            <form>
                {/*nickname*/}
                <p>nickname</p>
                <input type="text" onChange={handleNickname} className="insert-contents insert-nickname"/> <br/>
                {/*id*/}
                <p>id</p>
                <input type="text" onChange={handleId} className="insert-contents insert-id"/> <br/>
                {/*password*/}
                <p>password</p>
                <input type="password" onChange={handlePassword} className="insert-contents insert-password"/> <br/>
                {/*confirm password*/}
                <p>confirm password</p>
                <input type="password" onChange={handleConfirmPassword} className="insert-contents insert-confirmPassword"/>
                {/*profileImg*/}
                <p>image</p>
                <input type="file" onChange={handleProfileImg}
                       className="insert-contents insert-img" required/> <br/>
            </form>

            <div className="btn-insert">
                {/*send*/}
                <input type="button" className="btn-insert" value="등록하기"
                       onClick={insertProfile}/> <br/>
            </div>
        </div>
    )
}

export default ProfileInsert;