import React, {Component} from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <a href="/">
                    <p className="headerContent"> 헤더입니다.</p>
                </a>
            </header>
        );
    }
}

export default Header;