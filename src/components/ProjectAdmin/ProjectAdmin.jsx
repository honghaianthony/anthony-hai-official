import React, { useState, useEffect } from "react";
import blogApis from "../../apis/blogApis";

function ProjectAdmin() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const res = await blogApis.getAllBlogs();
        setData(res);
    }, []);

    console.log(data["8"]);

    return (
        <div className="blog-container">
            <div className="blog-comment-content"></div>
        </div>
    );
}

export default ProjectAdmin;
