import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ProfileInsert.css'

function ProfileInsert() {
    const [nickname, setNickname] = useState('');
    const handleNickname = (e) =>  {
        setNickname(e.target.value);
    }
    const [id, setId] = useState('');
    const handleId = (e) => {
        setId(e.target.value);
    }
    const [password, setPassword] = useState('');
    const handlePassword = (e) =>  {
        setPassword(e.target.value);
    }
    const [profileImg, setProfileImg] = useState(null);
    const handleProfileImg = (e) =>  {
        setProfileImg(e.target.value);
    }
    const insertProfile = () => {
        console.log("nickname : " + nickname);
        console.log("id : " + id);
        console.log("password: " + password);
        console.log("profileImg : " + profileImg);

        // axios.post("/profile/insert", null, {
        //     params : {
        //         nickname : nickname,
        //         id : id,
        //         password : password,
        //         profileImg : profileImg
        //     }
        // }).then(res => alert(res.data.result))
        //     .catch(error => console.log(error));

        // window.location.href = "/prifle/list";
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
                {/*profileImg*/}
                <p>image</p>
                <input type="file" onChange={handleProfileImg} multiple="multiple" className="insert-contents insert-img"/> <br/>
            </form>

            <div className="btn-insert">
                {/*send*/}
                <input type="button" className="btn-insert" value="등록하기"
                onClick = {insertProfile} /> <br/>
            </div>
        </div>
    )
}

export default ProfileInsert;