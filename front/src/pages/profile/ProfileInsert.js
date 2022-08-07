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
        setProfileImg(e.target.value);
    }
    const [imgBase64, setImgBase64] = useState([]);

    const insertProfile = () => {
        setImgBase64([]);
        for (let i = 0; i < profileImg; i++) {
            if (profileImg[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(profileImg[i]);

                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    console.log(base64)
                    if (base64) {
                        //  images.push(base64.toString())
                        var base64Sub = base64.toString()

                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                        //  setImgBase64(newObj);
                        // 파일 base64 상태 업데이트
                        //  console.log(images)
                    }
                }
            }
        }


        axios.post("/profile/insert", null, {
            params: {
                nickname: nickname,
                id: id,
                password: password,
                profileImg: imgBase64
            }
        }).then(res => alert(res.data.result))
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
                <input type="file" onChange={handleProfileImg} multiple="multiple"
                       className="insert-contents insert-img"/> <br/>
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