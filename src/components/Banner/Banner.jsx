import React from "react";
import "./Banner.scss";
import avatar from "../../assets/images/avatar-round.png";
import fbIcon from "../../assets/images/fb-icon.png";
import gitIcon from "../../assets/images/git-icon.png";
import insIcon from "../../assets/images/ins-icon.png";
import mailIcon from "../../assets/images/mail-icon.png";
import twiIcon from "../../assets/images/twi-icon.png";
import youtubeIcon from "../../assets/images/youtube-icon.png";

function Banner() {
    function sendMail(event) {
        event.preventDefault();
        window.open("mailto:namsaoquan@gmail.com", "my-window");
    }
    return (
        <div className="banner-info">
            <div className="banner-info-content">
                <div className="info-left">
                    <img src={avatar} alt="" />
                </div>
                <div className="info-right">
                    <div className="information">
                        <div className="info-name">Dang Ngo Hong Hai</div>
                        <div className="sub-info-name">
                            become IT Student at 18, now{" "}
                            {new Date().getFullYear() - 2001}
                        </div>
                        <div className="intro">
                            Hello, my name is Hai, you can call me Anthony. Do
                            you want know more about me?
                        </div>
                        <div className="title-social-link">Following me on</div>
                        <div className="social-links">
                            <a
                                href="https://www.facebook.com/dangngohonghai/"
                                className="social-links-detail"
                            >
                                <img
                                    src={fbIcon}
                                    alt="Facebook"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/anthony.haidang/"
                                className="social-links-detail"
                            >
                                <img
                                    src={insIcon}
                                    alt="Instagram"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://twitter.com/anthonyhaidang"
                                className="social-links-detail"
                            >
                                <img
                                    src={twiIcon}
                                    alt="Twitter"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://github.com/honghaianthony"
                                className="social-links-detail"
                            >
                                <img
                                    src={gitIcon}
                                    alt="Github"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                onClick={(event) => sendMail(event)}
                                href="mailto:namsaoquan@gmail.com"
                                className="social-links-detail"
                            >
                                <img
                                    src={mailIcon}
                                    alt="Gmail"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC0WR9K2MlIOW4y2iAS3j5ow"
                                className="social-links-detail"
                            >
                                <img
                                    src={youtubeIcon}
                                    alt="Youtube"
                                    className="social-link-img"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
