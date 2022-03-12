import React, { useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Project.scss";
import projectApis from "../../apis/projectApis";
import { useSpring, animated } from "react-spring";
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

    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(0px, -300px)" },
        config: { tension: 220, friction: 120 },
    });
    return (
        <animated.div className="project-container" style={props}>
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
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/html40.png?alt=media&token=144dddce-093a-4b75-81df-5fe2136a5d16`}
                                        alt="HTML"
                                    />
                                </div>
                                <div className="project-website-icon-column">
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/css40.png?alt=media&token=2ca63405-c5cf-4972-a479-433955f73bcb`}
                                        alt="CSS"
                                    />
                                </div>
                                <div className="project-website-icon-column">
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/js40.png?alt=media&token=fa89ea72-24d0-4b11-a9e4-ad7cd7a97051`}
                                        alt="JS"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="project-website-see-details">
                            <Link
                                className="btn btn-primary btn-see-details"
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
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/xamarin40.png?alt=media&token=f829e4f6-8238-426b-9edd-240519cb0aa2`}
                                        alt="Xamarin"
                                    />
                                </div>
                                <div className="project-mobile-icon-column">
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/sql40.png?alt=media&token=f395dbff-4cf8-44df-a121-03b583991921`}
                                        alt="SQL"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="project-mobile-see-details">
                            <Link
                                className="btn btn-primary btn-see-details"
                                to="/project/mobile-project"
                                role="button"
                            >
                                See details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Project;
