import React, {Component} from "react";
import './Nav.css';
import {Container} from "react-bootstrap";


class Nav extends Component {
    render() {
        return (
            <Container fluid>
                <aside className="App-nav">
                    <div className="Nav-Content row col-lg-3">
                        {/*로그인상태*/}
                        <div className="id-section">
                            <ul>
                                aaa님, 환영합니다.
                            </ul>
                            <ul className="section-content">
                                <table>
                                    <colgroup>
                                        <col className="content-col"/>
                                        <col className="content-col"/>
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <button className="btn-dark" value="hi"></button>
                                        </td>
                                        <td>
                                            북마크
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </ul>

                        </div>

                        {/*리스트*/}
                        <ul><a href="/view/all">전체 보기</a></ul>
                        <ul>프로필별 보기</ul>
                        {/*배너(디스코드)*/}
                    </div>
                </aside>
            </Container>
        );
    }
}

export default Nav;