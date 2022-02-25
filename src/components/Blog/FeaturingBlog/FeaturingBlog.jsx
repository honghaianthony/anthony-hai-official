import React from "react";
import { Link } from "react-router-dom";
import "./FeaturingBlog.scss";
import DCE from "../../../assets/images/dce.png";
function FeaturingBlog(props) {
    return (
        <>
            <div className="blog-item">
                <Link className="blog-item-link" to="/blog/blog-detail">
                    <figure
                        className="blog-item-wrap"
                        data-category={props.label}
                    >
                        <img
                            className="blog-item-img"
                            alt={props.title}
                            src={props.src}
                        />
                    </figure>
                    <div className="blog-item-content">
                        <div
                            className="blog-item-info"
                            data-category={props.info}
                        >
                            <h5 className="blog-item-title">{props.title}</h5>

                            <p className="blog-item-description">
                                {props.description}
                            </p>
                        </div>
                        <div className="blog-item-author">
                            <div className="blog-text-left">
                                <div className="blog-author-name-container">
                                    <span>Author:</span>
                                    <span className="blog-author-name">
                                        <Link
                                            to="/"
                                            className="author-link-info"
                                        >
                                            {props.author}
                                        </Link>
                                    </span>
                                </div>

                                <div className="blog-time-container">
                                    <i className="blog-time-icon"></i>
                                    <span className="blog-time">
                                        {props.time}
                                    </span>
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
