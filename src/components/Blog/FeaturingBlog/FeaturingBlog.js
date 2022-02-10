import React from "react";
import { Link } from "react-router-dom";
import "./FeaturingBlog.scss";
import DCE from "../../../assets/images/dce.png";
function FeaturingBlog(props) {
    return (
        <>
            <div className="blog-item">
                <Link className="blog-item-link" to="#">
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
                    <div className="blog-item-content">
                        <div
                            className="blog-item-info"
                            data-category={props.info}
                        >
                            <h5 className="blog-item-title">Title</h5>

                            <p className="blog-item-description">
                                ContentContentContent
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
                                            Dang Ngo Hong Hai
                                        </Link>
                                    </span>
                                </div>

                                <div className="blog-time-container">
                                    <i className="blog-time-icon"></i>
                                    <span className="blog-time">
                                        10/02/2022
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
