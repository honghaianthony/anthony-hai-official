import React from "react";
import "./Blog.scss";
import FeaturingBlog from "../Blog/FeaturingBlog/FeaturingBlog";
function Blog() {
    return (
        <div className="blog-container">
            <div className="featuring-blog">
                <div className="featuring-blog-item">
                    <FeaturingBlog />
                </div>
            </div>
        </div>
    );
}

export default Blog;
