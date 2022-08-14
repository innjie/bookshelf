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
    const [profileImg, setProfileImg] = useState(null);
    const handleProfileImg = (e) => {
        const file = e.target.files[0];
        setProfileImg(file);
        console.log("file: " + profileImg);
        console.log(file);
    }
    const [imgBase64, setImgBase64] = useState([]);

    const  insertProfile = (event) => {
        setProfileImg(profileImg);
        //fd.append("file", event.target.files)
        console.log("img : " + profileImg);
        setImgBase64([]);
            if (profileImg) {
                let reader = new FileReader();
                reader.readAsDataURL(profileImg); // 1. 파일을 읽어 버퍼에 저장합니다.
                // 파일 상태 업데이트
                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    
                    if (base64) {
                        var base64Sub = base64.toString()

                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                        //  setImgBase64(newObj);
                        // 파일 base64 상태 업데이트
                        console.log("reader result: " + base64);
                    }
                }
               
        }

    const formData = new FormData();
    console.log("post :: " + profileImg);
    formData.append("nickname", nickname);
    formData.append("id", id);
    formData.append("password", password);
    formData.append("profileImg", profileImg);

    console.log("img data: " + imgBase64);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios.post("/profile/insert", formData, config)
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