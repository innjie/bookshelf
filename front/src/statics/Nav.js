import React, {Component} from "react";
import './Nav.css';
import '../pages/Main/LoginPart'
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import LoginPart from "../pages/Main/LoginPart";

function Nav() {
    return (
        <aside className="App-nav">
            {/*로그인상태*/}
            <Switch>
                <Route>
                    <LoginPart/>
                </Route>
            </Switch>
            <div className="id-section">
                <ul>
                    aaa
                </ul>

                <ul className="content-section ">
                    <a href="/account/update" className="col-xs-4">정보 수정</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="/account/bookmark" className="col-xs-4">북마크</a>
                </ul>
            </div>
            <div className="menu-section">
                {/*리스트*/}
                <ul><a href="/book/list">전체 보기</a></ul>
                <ul><Link to="/profile/main">프로필별 보기</Link></ul>
                <ul><Link to = "/notice/list"> 공지사항 </Link></ul>
            </div>
            <div className="banner-section">
                {/*배너(디스코드)*/}
            </div>
        </aside>
    );
}
export default Nav;