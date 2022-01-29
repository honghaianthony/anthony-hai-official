import React from "react";
import "./Banner.scss";
import avatar from "../../assets/images/avatar-round.png";

function Banner() {
    return (
        <div className="banner-info">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="information">
                <div className="info-name"></div>
                <div className="social-links"></div>
            </div>
        </div>
    );
}

export default Banner;
