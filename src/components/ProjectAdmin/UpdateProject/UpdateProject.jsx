import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectApis from "../../../apis/projectApis";
import { toast } from "react-toastify";
import "./UpdateProject.scss";

function UpdateProject() {
    const [projectTitle, setProjectTitle] = useState();
    const [projectContent, setProjectContent] = useState();
    const [projectLanguageImage, setProjectLanguageImage] = useState();
    const [projectSourceImage, setProjectSourceImage] = useState();
    const [projectAuthorName, setProjectAuthorName] = useState();
    const [projectLink, setProjectLink] = useState();
    const [projectType, setProjectType] = useState();

    const { projectId } = useParams();

    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectTitle(res.title);
        }
        asyncProject();
    }, [projectId]);

    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectContent(res.content);
        }
        asyncProject();
    }, [projectId]);

    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectLanguageImage(res.languageImage);
        }
        asyncProject();
    }, [projectId]);

    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectSourceImage(res.sourceImage);
        }
        asyncProject();
    }, [projectId]);

    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectAuthorName(res.authorName);
        }
        asyncProject();
    }, [projectId]);
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectLink(res.linkProject);
        }
        asyncProject();
    }, [projectId]);
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getProjectById(projectId);
            setProjectType(res.typeProject);
        }
        asyncProject();
    }, [projectId]);

    const handleSaveProject = async (e) => {
        e.preventDefault();
        const projectUpdate = {
            id: projectId,
            title: projectTitle,
            content: projectContent,
            languageImage: projectLanguageImage,
            sourceImage: projectSourceImage,
            authorName: projectAuthorName,
            linkProject: projectLink,
            typeProject: projectType,
        };
        const res = await projectApis.updateProject(projectUpdate);
        if (res) {
            toast.success("Updated project successfully");
        } else {
            toast.error("Updated project failed");
        }
    };

    return (
        <div className="project-admin-container">
            <div className="project-admin-title">
                <h4>Project Admin Management</h4>
            </div>
            <div className="project-admin-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Input project title</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter project title"
                                value={projectTitle}
                                onChange={(event) =>
                                    setProjectTitle(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <h6>Input project content</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="content"
                                placeholder="Enter project content"
                                value={projectContent}
                                onChange={(event) =>
                                    setProjectContent(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project Language Image</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="languageImage"
                                placeholder="Enter language image link"
                                value={projectLanguageImage}
                                onChange={(event) =>
                                    setProjectLanguageImage(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project Source Image</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="sourceImage"
                                placeholder="Enter project source image link"
                                value={projectSourceImage}
                                onChange={(event) =>
                                    setProjectSourceImage(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input author name</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="authorName"
                                placeholder="Enter authorName"
                                value={projectAuthorName}
                                onChange={(event) =>
                                    setProjectAuthorName(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project link</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="linkProject"
                                placeholder="Enter project's link"
                                value={projectLink}
                                onChange={(event) =>
                                    setProjectLink(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-12 mt-3">
                            <h6>Input project type</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="typeProject"
                                placeholder="Enter project type"
                                value={projectType}
                                onChange={(event) =>
                                    setProjectType(event.target.value)
                                }
                            />
                        </div>
                        <div className="add-project-button">
                            <button
                                type="button"
                                className="add-project-btn"
                                onClick={handleSaveProject}
                            >
                                Update Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProject;
