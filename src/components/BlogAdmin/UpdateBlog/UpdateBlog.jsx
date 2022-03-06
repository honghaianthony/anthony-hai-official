import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogApis from "../../../apis/blogApis";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./UpdateBlog.scss";
import { uploadFile, deleteFile } from "../../../firebase/util";

function UpdateBlog() {
    const [blogName, setBlogName] = useState();
    const [blogDescription, setBlogDescription] = useState();
    const [blogContent, setBlogContent] = useState();
    const [dataInput, setDataInput] = useState({ title: "", description: "" });
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [editor, setEditor] = useState("");

    const { blogId } = useParams();

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

    useEffect(async () => {
        const res = await blogApis.getBlogById(blogId);
        setBlogName(res.title);
    }, [blogId]);

    useEffect(async () => {
        const res = await blogApis.getBlogById(blogId);
        setBlogDescription(res.description);
    }, [blogId]);

    useEffect(async () => {
        const res = await blogApis.getBlogById(blogId);
        setBlogContent(res.content);
    }, [blogId]);

    const handleSaveBlog = async (e) => {
        e.preventDefault();
        const updateBlog = {
            id: blogId,
            title: blogName,
            description: blogDescription,
            content: blogContent,
        };
        const res = await blogApis.updateBlog(updateBlog);

        if (res) {
            toast.success("Updated Successfully");
        } else {
            toast.error("Updated failed");
        }
    };

    const handleOnChangeEditor = (event, editor) => {
        const dataEditor = editor.getData();
        setEditor(dataEditor);
        setBlogContent(dataEditor);
    };

    return (
        <div className="blog-admin-container">
            <div className="blog-admin-title">
                <h4>Blog Admin Management</h4>
            </div>
            <div className="blog-admin-content">
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSaveBlog}>
                            <div className="col-md-6">
                                <h6>Input blog title</h6>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={blogName}
                                    placeholder="Enter blog title"
                                    onChange={(event) =>
                                        setBlogName(event.target.value)
                                    }
                                />
                            </div>
                            <div className="col-md-6">
                                <h6>Input blog description</h6>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={blogDescription}
                                    placeholder="Enter blog description"
                                    onChange={(event) =>
                                        setBlogDescription(event.target.value)
                                    }
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
                                    data={blogContent}
                                    config={{
                                        ckfinder: {
                                            uploadUrl:
                                                "http://localhost:3301/api/blog/uploads",
                                        },
                                    }}
                                    value={blogContent}
                                />
                            </div>
                            <div className="add-blog-button">
                                <button type="submit" className="add-blog-btn">
                                    Update blog
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateBlog;
