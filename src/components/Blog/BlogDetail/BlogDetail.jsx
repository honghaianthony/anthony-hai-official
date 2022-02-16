import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetail.scss";
import AvatarRound from "../../../assets/images/ava.png";
function BlogDetail() {
    return (
        <div className="blog-detail-container">
            <div className="blog-detail-title">
                <h4>New Blog Title</h4>
                <span class="animate-border mt-2 mb-6"></span>
            </div>
            <div className="blog-detail-author">
                <div className="blog-detail-author-left">
                    <img src={AvatarRound} alt="Avatar" />
                </div>
                <div className="blog-detail-author-right row">
                    <div className="blog-detail-author-name">
                        <p>Dang Ngo Hong Hai</p>
                    </div>
                    <div className="blog-detail-author-name-link">
                        <Link to="/" className="author-name-link">
                            anthony.haidang
                        </Link>
                    </div>
                </div>
            </div>
            <div className="blog-detail-content">
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
                <p>This is the content of blog</p>
            </div>
        </div>
    );
}

export default BlogDetail;
