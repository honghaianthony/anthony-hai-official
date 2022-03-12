import React, { useState, useEffect } from "react";
import "./BlogAdmin.scss";
import { uploadFile, deleteFile } from "../../firebase/util";
import blogApis from "../../apis/blogApis";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

function BlogAdmin() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [dataInput, setDataInput] = useState({ title: "", description: "" });
    const [editor, setEditor] = useState("");
    const [loader, setLoader] = useState(null);

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

    const handleOnChangeEditor = (event, editor) => {
        const dataEditor = editor.getData();
        setEditor(dataEditor);
    };

    const postBlog = async () => {
        const dataBlog = {
            userId: 1,
            title: dataInput.title,
            description: dataInput.description,
            content: editor,
            coverImage: url,
        };
        const res = await blogApis.addNewBlog(dataBlog);
        if (res) {
            toast.success("Created blog successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("Created blog fail", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <div className="blog-admin-container">
            <div className="blog-admin-title">
                <h4>Blog Admin Management</h4>
            </div>
            <div className="blog-admin-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Input blog title</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter blog title"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="col-md-6">
                            <h6>Input blog description</h6>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                placeholder="Enter blog description"
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="add-blog-cover-image">
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
                                        className="far fa-times-circle"
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
                        <div className="add-blog-content-editor">
                            <CKEditor
                                onReady={(editor) => {
                                    console.log(
                                        "Editor is ready to use!",
                                        editor
                                    );

                                    // Insert the toolbar before the editable area.
                                    editor.ui
                                        .getEditableElement()
                                        .parentElement.insertBefore(
                                            editor.ui.view.toolbar.element,
                                            editor.ui.getEditableElement()
                                        );

                                    setEditor(editor);
                                }}
                                onError={(error, { willEditorRestart }) => {
                                    // If the editor is restarted, the toolbar element will be created once again.
                                    // The `onReady` callback will be called again and the new toolbar will be added.
                                    // This is why you need to remove the older toolbar.
                                    if (willEditorRestart) {
                                        this.editor.ui.view.toolbar.element.remove();
                                    }
                                }}
                                onChange={handleOnChangeEditor}
                                editor={DecoupledEditor}
                                data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                                config={{
                                    ckfinder: {
                                        uploadUrl:
                                            "http://localhost:3301/api/blog/uploads",
                                    },
                                }}
                            />
                        </div>
                        <div className="add-blog-button">
                            <button
                                type="button"
                                className="add-blog-btn"
                                onClick={postBlog}
                            >
                                Create blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogAdmin;
