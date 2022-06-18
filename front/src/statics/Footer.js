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
                since 2022.06.05 ~
                <a href={global_var.GITHUB_URL} target="_blank">
                    프로젝트 링크
                </a>
            </div>
        </div>
    );
}

export default footer;