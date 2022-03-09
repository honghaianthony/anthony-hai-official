import React, { useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Project.scss";
import HTMLImage from "../../assets/images/html40.png";
import CSSImage from "../../assets/images/css40.png";
import JSImage from "../../assets/images/js40.png";
import XamarinImage from "../../assets/images/xamarin40.png";
import SQLImage from "../../assets/images/sql40.png";
import projectApis from "../../apis/projectApis";
function Project() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    const [projectData, setProjectData] = useState([]);
    const [mobileData, setMobileData] = useState([]);
    const projectTypeWebsite = "Website";
    const projectTypeMobile = "Mobile";
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectByType(projectTypeWebsite);
            setProjectData(res);
        }
        asyncProject();
    }, []);
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectByType(projectTypeMobile);
            setMobileData(res);
        }
        asyncProject();
    }, []);
    var projectCount = Object.keys(projectData).length;
    var mobileCount = Object.keys(mobileData).length;
    return (
        <div className="project-container">
            <div className="project-website">
                <div className="project-website-background">
                    <div className="project-website-left">
                        <div className="project-website-first">
                            <div className="project-website-title">
                                <h2>Website Project</h2>
                            </div>
                            <div className="project-website-amount">
                                <h4>{projectCount} Projects</h4>
                            </div>
                        </div>

                        <div className="project-website-icon">
                            <div className="project-website-icon-row">
                                <div className="project-website-icon-column">
                                    <img src={HTMLImage} alt="HTML" />
                                </div>
                                <div className="project-website-icon-column">
                                    <img src={CSSImage} alt="CSS" />
                                </div>
                                <div className="project-website-icon-column">
                                    <img src={JSImage} alt="JS" />
                                </div>
                            </div>
                        </div>
                        <div className="project-website-see-details">
                            <Link
                                class="btn btn-primary btn-see-details"
                                to="/project/website-project"
                                role="button"
                            >
                                See details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-mobile">
                <div className="project-mobile-background">
                    <div className="project-mobile-left">
                        <div className="project-mobile-first">
                            <div className="project-mobile-title">
                                <h2>Mobile Project</h2>
                            </div>
                            <div className="project-mobile-amount">
                                <h4>{mobileCount} Project</h4>
                            </div>
                        </div>

                        <div className="project-mobile-icon">
                            <div className="project-mobile-icon-row">
                                <div className="project-mobile-icon-column">
                                    <img src={XamarinImage} alt="Xamarin" />
                                </div>
                                <div className="project-mobile-icon-column">
                                    <img src={SQLImage} alt="SQL" />
                                </div>
                            </div>
                        </div>
                        <div className="project-mobile-see-details">
                            <Link
                                class="btn btn-primary btn-see-details"
                                to="/project/mobile-project"
                                role="button"
                            >
                                See details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
