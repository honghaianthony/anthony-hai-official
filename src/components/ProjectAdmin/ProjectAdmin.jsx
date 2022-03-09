import React, { useState, useEffect } from "react";
import "./ProjectAdmin.scss";
import { uploadFile, deleteFile } from "../../firebase/util";
import { toast } from "react-toastify";
import projectApis from "../../apis/projectApis";

function ProjectAdmin() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [dataInput, setDataInput] = useState({
        title: "",
        content: "",
        languageImage: "",
        sourceImage: "",
        authorName: "",
        linkProject: "",
        typeProject: "",
    });

    useEffect(() => {
        if (image !== null) {
            uploadFile(
                image,
                (progress) => {
                    setProgress(progress);
                },
                (url) => {
                    setUrl(url);
                }
            );
        }
    }, [image]);

    const deleteImage = () => {
        deleteFile(
            url,
            () => {
                setProgress(0);
                setUrl("");
                document.getElementById("add-blog-cover-image").value = null;
            },
            (error) => {}
        );
    };

    const imageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        setDataInput({ ...dataInput, [name]: value });
    };

    const postProject = async () => {
        const dataProject = {
            userId: 1,
            title: dataInput.title,
            content: dataInput.content,
            languageImage: dataInput.languageImage,
            sourceImage: dataInput.sourceImage,
            authorName: dataInput.authorName,
            linkProject: dataInput.linkProject,
            typeProject: dataInput.typeProject,
            coverImage: url,
        };
        const res = await projectApis.addNewProject(dataProject);
        if (res) {
            toast.success("Add a new project successfully");
        } else {
            toast.error("Add a new project failed");
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
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6">
                            <h6>Input project content</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="content"
                                placeholder="Enter project content"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project Language Image</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="languageImage"
                                placeholder="Enter language image link"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project Source Image</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="sourceImage"
                                placeholder="Enter project source image link"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input author name</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="authorName"
                                placeholder="Enter authorName"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6>Input project link</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="linkProject"
                                placeholder="Enter project's link"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-12 mt-3">
                            <h6>Input project type</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="typeProject"
                                placeholder="Enter project type"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="add-project-cover-image">
                            <h6>Project Image</h6>
                            {progress < 100 && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="coverImage"
                                    id="add-blog-cover-image"
                                    placeholder="Image Link"
                                    onChange={imageChange}
                                />
                            )}
                            {progress > 0 && (
                                <div className="upload-image">
                                    <progress
                                        className="progress-bar"
                                        value={progress}
                                        max="100"
                                    />
                                    <br />
                                    <i
                                        class="far fa-times-circle"
                                        onClick={deleteImage}
                                    ></i>
                                    <img
                                        className="preview-image"
                                        src={
                                            url ||
                                            "http://via.placeholder.com/300"
                                        }
                                        alt="firebase-library"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="add-project-button">
                            <button
                                type="button"
                                className="add-project-btn"
                                onClick={postProject}
                            >
                                Create Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectAdmin;
