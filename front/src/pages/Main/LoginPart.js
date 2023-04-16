import React, {Component, useState} from "react";
import axios from 'axios';
import './Loginpart.css'
function LoginPart(props) {
    const [value, onChange] = useState(new Date());

    function loginHandler() {
        try {
            let id = document.getElementById("id");
            let pwd = document.getElementById("password");
            let data = {id : id, password : pwd};
            axios.post("/auth/login", JSON.stringify(data), {
               headers: {
                   "Content-type" : `application/json`,
               }
            }).then(res => {
                console.log("res.data.accessToken: " + res.data);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
                props.loginCallBack(true);
                props.history.push("/");

            });
        } catch (e) {
            console.log(e);
        } finally {
            console.log("login processing end");
        }
    }
    return (
        <div className="loginFormDiv">
            <form className="loginForm">
                <input type="text" id = "id" placeholder="id" /> <br/>
                <input type="password" id = "password" placeholder="password" /> <br/>
                <input type="submit" id = "sub-btn" value = "로그인" className="btn btn-light btn-sm" onClick={loginHandler}/>
            </form>
        </div>
    );
}

export default LoginPart;