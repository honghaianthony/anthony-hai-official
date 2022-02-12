import React from "react";
import "./MobileProject.scss";
import { Link } from "react-router-dom";
import DCE from "../../../assets/images/dce.png";
import GitlabIcon from "../../../assets/images/gitlabicon.png";
function WebsiteProject(props) {
    return (
        <div className="mobile-project-container">
            <div className="mobile-project-title-container">
                <div className="mobile-project-title">
                    <h4>Mobile Project</h4>
                </div>
            </div>
            <div className="mobile-project-all-container">
                <div className="mobile-project-item">
                    <Link
                        className="mobile-project-item-link"
                        to="/mobile-project/mobile-project-detail"
                    >
                        <figure
                            className="mobile-project-item-wrap"
                            data-category={props.label}
                        >
                            <img
                                className="mobile-project-item-img"
                                alt={props.title}
                                src={DCE}
                            />
                        </figure>
                        <div className="mobile-project-item-content">
                            <div
                                className="mobile-project-item-info"
                                data-category={props.info}
                            >
                                <div className="title-container">
                                    <h5 className="mobile-project-item-title">
                                        Title
                                    </h5>

                                    <div className="source-image">
                                        <img
                                            src={GitlabIcon}
                                            alt="Git lab icon"
                                        />
                                    </div>
                                </div>

                                <p className="mobile-project-item-description">
                                    ContentContentContent
                                </p>
                            </div>

                            <div className="mobile-project-item-author">
                                <div className="mobile-project-text-left">
                                    <div className="mobile-project-author-name-container">
                                        <span>Author:</span>
                                        <span className="mobile-project-author-name">
                                            <Link
                                                to="/"
                                                className="author-link-info"
                                            >
                                                Dang Ngo Hong Hai
                                            </Link>
                                        </span>
                                    </div>

                                    <div className="mobile-project-time-container">
                                        <i className="mobile-project-time-icon"></i>
                                        <span className="mobile-project-time">
                                            10/02/2022
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WebsiteProject;
