import React, {Component} from "react";
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <a href="/" className="menu-link">
                <p className="headerContent"> 헤더자리</p>
            </a>
        </header>
    );
}

export default Header;