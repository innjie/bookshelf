import React, {Component, useState} from "react";

function LoginPart() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="loginFormDiv">
            <form className="loginForm">
                <input type="text" value="id"/>
                <input type="password" value="password"/>
                <input type="submit" value = "login"/>
            </form>
        </div>
    );
}

export default LoginPart;