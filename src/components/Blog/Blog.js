import React from "react";
import "./Blog.scss";
import FeaturingBlog from "../Blog/FeaturingBlog/FeaturingBlog";

function Blog() {
    return (
        <div className="blog-container">
            <div className="featuring-blog">
                <h4 className="featuring-blog-title">Featuring Blog</h4>
                <div className="featuring-blog-item">
                    <FeaturingBlog />
                </div>
            </div>
            <div className="another-blog">
                <h4 className="another-blog-title">Another Blogs</h4>
                <div className="another-blog-item">
                    <FeaturingBlog />
                </div>
            </div>
        </div>
    );
}

export default Blog;
