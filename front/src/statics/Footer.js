import React, {Component} from "react";
import './Footer.css';
import * as global_var from '../global_variables'


function footer() {
    return (
        <div className="footer-section">
            <div className="footer-contents">
                <a href={global_var.DISCORD_PROFILE}>Link</a>
            </div>
        </div>
    );
}

export default footer;