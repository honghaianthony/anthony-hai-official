import React, { useState, useEffect } from "react";
import "./BlogAdmin.scss";
import { uploadFile, deleteFile } from "../../firebase/util";

function BlogAdmin() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

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
    return (
        <div className="add-blog-cover-image">
            {progress < 100 && (
                <input
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    id="add-blog-cover-image"
                    placeholder="Link hình ảnh"
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
                    <i class="far fa-times-circle" onClick={deleteImage}></i>
                    <img
                        className="preview-image"
                        src={url || "http://via.placeholder.com/300"}
                        alt="firebase-image"
                    />
                </div>
            )}
        </div>
    );
}

export default BlogAdmin;
