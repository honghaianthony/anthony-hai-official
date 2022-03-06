import React from "react";
import { Link } from "react-router-dom";
import "./FeaturingBlog.scss";
import DCE from "../../../assets/images/dce.png";
function FeaturingBlog(props) {
    function ChangeToSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
        str = str.replace(/(đ)/g, "d");

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, "");

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, "-");

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, "");

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, "");

        // return
        return str;
    }
    return (
        <>
            <div className="blog-item">
                <Link
                    className="blog-item-link"
                    to={
                        "/blog/" +
                        ChangeToSlug(props.title) +
                        "." +
                        props.blogId +
                        ".html"
                    }
                >
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
