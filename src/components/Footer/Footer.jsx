import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
function Footer() {
    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-wrap-left">
                    <div className="footer-link">
                        <div className="footer-link-title">
                            <FontAwesomeIcon
                                icon={faLink}
                                size="2x"
                                color="#fff"
                            />
                            <span> Link</span>
                            <span class="animate-border mt-2 mb-6"></span>
                        </div>
                        <div className="footer-link-detail">
                            <div className="footer-link-detail-link">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="footer-link-detail-link">
                                <Link to="/about">About</Link>
                            </div>
                            <div className="footer-link-detail-link">
                                <Link to="/project">Project</Link>
                            </div>
                            <div className="footer-link-detail-link">
                                <Link to="/blog">Blog</Link>
                            </div>
                           
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div class="footer-contact-title">
                            <FontAwesomeIcon
                                icon={faMapMarkedAlt}
                                size="2x"
                                color="#fff"
                            />
                            <span> Contact</span>
                            <span class="animate-border mt-2 mb-6"></span>
                        </div>
                        <div class="footer-contact-detail">
                            <div class="footer-contact-detail-contact">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    color="#fff"
                                />
                                <a href="mail.google.com">
                                    namsaoquan@gmail.com
                                </a>
                            </div>
                            <div class="footer-contact-detail-contact">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    color="#fff"
                                />
                                <a href="facebook.com/dangngohonghai">
                                    Dang Ngo Hong Hai
                                </a>
                            </div>
                            <div class="footer-contact-detail-contact">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    color="#fff"
                                />
                                <a href="instagram.com/anthony.haidang">
                                    anthony.haidang
                                </a>
                            </div>
                            <div class="footer-contact-detail-contact">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    color="#fff"
                                />
                                <a href="maps.google.com">
                                    Octorber 23<sup>rd</sup> Street, Nha Trang
                                    City,
                                    <br />
                                    Khanh Hoa Province
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrap-right">
                    <div className="footer-my-interests">
                        <div class="footer-my-interests-title">
                            <FontAwesomeIcon
                                icon={faHeart}
                                color="#fff"
                                size="2x"
                            />
                            <span> My interests</span>
                            <span class="animate-border mt-2 mb-6"></span>
                        </div>
                        <div className="footer-my-interests-detail">
                            <div className="footer-my-interests-detail-interest">
                                <FontAwesomeIcon icon={faMusic} color="#fff" />
                                <a href="https://www.youtube.com/watch?v=5qzmiSR41cY&list=PLz-RN_5tENm_WxttqUzciGItmAoHI-MjF">
                                    My list musics
                                </a>
                            </div>
                            <div className="footer-my-interests-detail-interest">
                                <FontAwesomeIcon icon={faFilm} color="#fff" />
                                <a href="#">My films</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-pages">
                        <div class="footer-pages-title">
                            <FontAwesomeIcon
                                icon={faPager}
                                color="#fff"
                                size="2x"
                            />
                            <span> Pages</span>
                            <span class="animate-border mt-2 mb-6"></span>
                        </div>
                        <div className="footer-pages-detail">
                            <div className="footer-page-detail-page">
                                <a href="http://review-movie-uit.herokuapp.com/">
                                    Review Movie
                                </a>
                            </div>
                            <div className="footer-page-detail-page">
                                <a href="https://dce2021.vercel.app/">DCE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <div class="content-down-copyright">
                    <span>Copyright belongs to Dang Ngo Hong Hai</span>
                </div>
                <div class="content-down-allrights">
                    <p>&#169; {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;