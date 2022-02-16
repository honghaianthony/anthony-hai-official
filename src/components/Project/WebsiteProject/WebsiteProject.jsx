import React from "react";
import "./WebsiteProject.scss";
import { Link } from "react-router-dom";
import DCE from "../../../assets/images/dce.png";
import GitlabIcon from "../../../assets/images/gitlabicon.png";
function WebsiteProject(props) {
    return (
        <div className="website-project-container">
            <div className="website-project-title-container">
                <div className="website-project-title">
                    <h4>Website Project</h4>
                </div>
            </div>
            <div className="website-project-all-container">
                <div className="website-project-item">
                    <Link
                        className="website-project-item-link"
                        to="/website-project/website-project-detail"
                    >
                        <figure
                            className="website-project-item-wrap"
                            data-category={props.label}
                        >
                            <img
                                className="website-project-item-img"
                                alt={props.title}
                                src={DCE}
                            />
                        </figure>
                        <div className="website-project-item-content">
                            <div
                                className="website-project-item-info"
                                data-category={props.info}
                            >
                                <div className="title-container">
                                    <h5 className="website-project-item-title">
                                        Title
                                    </h5>

                                    <div className="source-image">
                                        <img
                                            src={GitlabIcon}
                                            alt="Git lab icon"
                                        />
                                    </div>
                                </div>

                                <p className="website-project-item-description">
                                    ContentContentContent
                                </p>
                            </div>

                            <div className="website-project-item-author">
                                <div className="website-project-text-left">
                                    <div className="website-project-author-name-container">
                                        <span>Author:</span>
                                        <span className="website-project-author-name">
                                            <Link
                                                to="/"
                                                className="author-link-info"
                                            >
                                                Dang Ngo Hong Hai
                                            </Link>
                                        </span>
                                    </div>

                                    <div className="website-project-time-container">
                                        <i className="website-project-time-icon"></i>
                                        <span className="website-project-time">
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
