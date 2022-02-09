import React from "react";
import { Link } from "react-router-dom";
import "./FeaturingBlog.scss";
import DCE from "../../../assets/images/dce470.png";
function FeaturingBlog(props) {
    return (
        <>
            <div className="featuring-blog-container">
                <div className="featuring-blog-title">
                    <h4>Featuring blog</h4>
                </div>
                <Link className="featuring-blog-link" to="/">
                    <div className="featuring-blog-detail-container">
                        <figure
                            className="blog-item-wrap"
                            data-category={props.label}
                        >
                            <img
                                className="blog-item-img"
                                alt={props.title}
                                src={DCE}
                            />
                        </figure>
                        <div className="featuring-blog-detail-right">
                            <div className="title-blog">
                                <h4>New Blog</h4>
                                <span class="animate-border mt-2 mb-6"></span>
                            </div>
                            <div className="content-in-sum-blog">
                                <p>This is the content of blog</p>
                            </div>
                            <span class="animate-border-second"></span>
                            <div className="info-blog">
                                <div className="author-blog">
                                    <p>
                                        Author:{" "}
                                        <Link to="/">Dang Ngo Hong Hai</Link>
                                    </p>
                                </div>
                                <div className="date-create-blog">
                                    {" "}
                                    <span class="animate-border-third"></span>
                                    25/01/2022
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default FeaturingBlog;
