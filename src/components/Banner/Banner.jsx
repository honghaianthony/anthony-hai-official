import React from "react";
import "./Banner.scss";

function Banner() {
    function sendMail(event) {
        event.preventDefault();
        window.open("mailto:namsaoquan@gmail.com", "my-window");
    }
    return (
        <div className="banner-info">
            <div className="banner-info-content">
                <div className="info-left">
                    <img
                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/avatar-round.png?alt=media&token=a9754b01-488c-4c23-881c-4b47fb7cec5e`}
                        alt=""
                    />
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
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/fb-icon.png?alt=media&token=0142f5b6-4f66-4439-a911-20eeaff4e0e8`}
                                    alt="Facebook"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/anthony.haidang/"
                                className="social-links-detail"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/ins-icon.png?alt=media&token=1e74ddac-e314-4415-80cb-9037d21893ce`}
                                    alt="Instagram"
                                    className="social-link-img"
                                />
                            </a>

                            <a
                                href="https://github.com/honghaianthony"
                                className="social-links-detail"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/git-icon.png?alt=media&token=e6af22bf-b6ab-4c38-a8c8-74e5bca7d9f8`}
                                    alt="Github"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                onClick={(event) => sendMail(event)}
                                href="mailto:namsaoquan@gmail.com"
                                className="social-links-detail"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/mail-icon.png?alt=media&token=a0c40b2f-55f9-4c86-ac76-0be3e6041d70`}
                                    alt="Gmail"
                                    className="social-link-img"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC0WR9K2MlIOW4y2iAS3j5ow"
                                className="social-links-detail"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/youtube-icon.png?alt=media&token=e97e2e3c-49d4-489f-b04d-00234d11e2c0`}
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
