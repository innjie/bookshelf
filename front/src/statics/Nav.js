import React, {Component} from "react";
import './Nav.css';
import {Container} from "react-bootstrap";

function Nav() {
    return (
        <Container fluid>
            <aside className="App-nav">
                <div className="Nav-Content row">
                    {/*로그인상태*/}
                    <div className="id-section">
                        <ul>
                            aaa님, 환영합니다.
                        </ul>


                        <ul className="content-section ">
                            <a href="/account/update" className="col-xs-4">정보 수정</a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="/account/bookmark" className="col-xs-4">북마크</a>
                        </ul>
                    </div>
                    <div className="menu-section">
                        {/*리스트*/}
                        <ul><a href="/view/all">전체 보기</a></ul>
                        <ul><a href="/view/profile">프로필별 보기</a></ul>
                    </div>
                    <div className="banner-section">
                        {/*배너(디스코드)*/}
                    </div>
                </div>
            </aside>
        </Container>
    );
}

export default Nav;