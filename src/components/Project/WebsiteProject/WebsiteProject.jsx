import React, { useState, useEffect } from "react";
import "./WebsiteProject.scss";
import { Link } from "react-router-dom";
import projectApis from "../../../apis/projectApis";

function WebsiteProject() {
    const [data, setData] = useState([]);
    const typeProject = "Website";
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectByType(typeProject);
            setData(res);
        }
        asyncProject();
    }, []);

    // const props = useSpring({
    //     opacity: 1,
    //     transform: "translate(0px, 0px)",
    //     from: { opacity: 0, transform: "translate(-200px, 0px)" },
    //     config: { tension: 220, friction: 120 },
    // });
    return (
        <div className="website-project-container">
            <div className="website-project-title-container">
                <div className="website-project-title">
                    <h4>Website Project</h4>
                </div>
            </div>
            {data &&
                data.map((item, index) => {
                    return (
                        <div className="website-project-all-container">
                            <div className="website-project-item">
                                <a
                                    className="website-project-item-link"
                                    href={item.linkProject}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <figure
                                        className="website-project-item-wrap"
                                        data-category={item.label}
                                    >
                                        <img
                                            className="website-project-item-img"
                                            alt={item.title}
                                            src={item.coverImage}
                                        />
                                    </figure>
                                    <div className="website-project-item-content">
                                        <div
                                            className="website-project-item-info"
                                            data-category={item.info}
                                        >
                                            <div className="title-container">
                                                <h5 className="website-project-item-title">
                                                    {item.title}
                                                </h5>

                                                <div className="source-image">
                                                    <img
                                                        src={item.sourceImage}
                                                        alt="Git lab icon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="content-container">
                                                <p className="website-project-item-description">
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

                                        <div className="website-project-item-author">
                                            <div className="website-project-text-left">
                                                <div className="website-project-author-name-container">
                                                    <span>Author:</span>
                                                    <span className="website-project-author-name">
                                                        <Link
                                                            to="/"
                                                            className="author-link-info"
                                                        >
                                                            {item.authorName}
                                                        </Link>
                                                    </span>
                                                </div>

                                                <div className="website-project-time-container">
                                                    <i className="website-project-time-icon"></i>
                                                    <span className="website-project-time">
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

export default WebsiteProject;
