import React, { useState, useEffect } from "react";
import "./MobileProject.scss";
import { Link } from "react-router-dom";
import projectApis from "../../../apis/projectApis";
function MobileProject(props) {
    const [data, setData] = useState([]);
    const typeProject = "Mobile";
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectByType(typeProject);
            setData(res);
        }
        asyncProject();
    }, []);
    return (
        <div className="mobile-project-container">
            <div className="mobile-project-title-container">
                <div className="mobile-project-title">
                    <h4>Mobile Project</h4>
                </div>
            </div>
            {data &&
                data.map((item, index) => {
                    return (
                        <div className="mobile-project-all-container">
                            <div className="mobile-project-item">
                                <a
                                    className="mobile-project-item-link"
                                    href={item.linkProject}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <figure
                                        className="mobile-project-item-wrap"
                                        data-category={item.label}
                                    >
                                        <img
                                            className="mobile-project-item-img"
                                            alt={item.title}
                                            src={item.coverImage}
                                        />
                                    </figure>
                                    <div className="mobile-project-item-content">
                                        <div
                                            className="mobile-project-item-info"
                                            data-category={item.info}
                                        >
                                            <div className="title-container">
                                                <h5 className="mobile-project-item-title">
                                                    {item.title}
                                                </h5>

                                                <div className="source-image">
                                                    <img
                                                        src={item.sourceImage}
                                                        alt="Source"
                                                    />
                                                </div>
                                            </div>
                                            <div className="content-container">
                                                <p className="mobile-project-item-description">
                                                    {item.content}
                                                </p>
                                                <div className="source-image">
                                                    <img
                                                        src={item.languageImage}
                                                        alt="Language"
                                                    />
                                                </div>
                                            </div>
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
                                                            {item.authorName}
                                                        </Link>
                                                    </span>
                                                </div>

                                                <div className="mobile-project-time-container">
                                                    <i className="mobile-project-time-icon"></i>
                                                    <span className="mobile-project-time">
                                                        {new Date(
                                                            item.updatedAt
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default MobileProject;
