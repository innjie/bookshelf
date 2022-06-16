import React, {Component} from "react";
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <a href="/">
                <p className="headerContent"> 헤더입니다.</p>
            </a>
        </header>
    );
}

export default Header;