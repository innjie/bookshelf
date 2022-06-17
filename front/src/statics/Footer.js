import React, {Component} from "react";
import './Footer.css';
import * as global_var from '../global/global_variables';


function footer() {
    return (
        <div className="footer-section">
            <div className="footer-contents">
                <a href={global_var.DISCORD_PROFILE} target="_blank">
                    <img src={global_var.DEVELOPER_IMG} alt="discord" className="developer_img"/>
                </a>
            </div>
        </div>
    );
}

export default footer;