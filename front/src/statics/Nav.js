import React, {Component} from "react";
import './Nav.css';
import {Container} from "react-bootstrap";

class Nav extends Component {
    render() {
        return (
            <Container fluid>
                <aside className="App-nav">
                    <div className="Nav-Content row">
                        <ul>1. aaa</ul>
                        <ul>2. bbb</ul>
                        <ul>3. ccc</ul>
                    </div>
                </aside>
            </Container>
        );
    }
}

export default Nav;