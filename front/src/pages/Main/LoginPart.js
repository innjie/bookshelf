import React, {Component, useState} from "react";
import './Loginpart.css'
function LoginPart() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="loginFormDiv">
            <form className="loginForm">
                <input type="text" id = "id" placeholder="id" /> <br/>
                <input type="password" id = "password" placeholder="password" /> <br/>
                <input type="submit" id = "sub-btn" value = "로그인" className="btn btn-light btn-sm"/>
            </form>
        </div>
    );
}

export default LoginPart;