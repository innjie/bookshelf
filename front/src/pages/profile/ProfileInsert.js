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


    const insertProfile = async () => {
        const formData = new FormData();
        formData.append("nickname", nickname);
        formData.append("id", id);
        formData.append("password", password);
        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        };

        console.log(formData.get("profileImg"));
        await axios.post("/profile/insert", formData, config)
            .then(res => alert(res.data.result))
            .catch(error => console.log(error));

        window.location.href = "/profile/main";
    }
    return (
        <div className="insert-form">
            <form>
                {/* profile img */}
                <p> 사진 </p>
                <input type = "file" className="insert-contents insert-img"/>
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