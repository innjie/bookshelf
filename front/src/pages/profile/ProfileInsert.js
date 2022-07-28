import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ProfileInsert.css'

function ProfileInsert() {
    return (
        <div className="insert-form">
            <form>
                {/*nickname*/}
                <p>nickname</p>
                <input type="text" className="insert-contents insert-nickname"/> <br/>
                {/*id*/}
                <p>id</p>
                <input type="text" className="insert-contents insert-id"/> <br/>
                {/*password*/}
                <p>password</p>
                <input type="password" className="insert-contents insert-password"/> <br/>
                {/*profileImg*/}
                <p>image</p>
                <input type="file" className="insert-contents insert-img"/> <br/>
            </form>

            <div className="btn-insert">
                {/*send*/}
                <input type="button" className="btn-insert" value="등록하기"/> <br/>
            </div>
        </div>
    )
}

export default ProfileInsert;