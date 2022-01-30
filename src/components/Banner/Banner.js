import React from "react";
import "./Banner.scss";
import avatar from "../../assets/images/avatar-round.png";

function Banner() {
    return (
        <div className="banner-info">
            <div className="banner-info-content">
                <div className="container">
                    <div className="row">
                        <div className="info-left">
                            <div className="avatar">
                                <img src={avatar} alt="" />
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="information">
                                <div className="info-name">
                                    Dang Ngo Hong Hai
                                </div>
                                <div className="sub-info-name">
                                    become IT Student at 18, now 21
                                </div>
                                <div className="social-links"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
