import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogDetail.scss";
import blogApis from "../../../apis/blogApis";
import { Helmet } from "react-helmet";

function BlogDetail() {
    const [data, setData] = useState(null);
    const { _id } = useParams();

    useEffect(() => {
        async function asyncProject() {
            const res = await blogApis.getBlogById(_id);
            setData(res);
        }
        asyncProject();
    }, [_id]);

    return (
        <div className="blog-detail-container">
            {data ? (
                <div className="blog-detail">
                    <div className="blog-detail-title">
                        <Helmet prioritizeSeoTags>
                            <title>{data.title} - Hong Hai Official</title>
                            <meta
                                name="description"
                                content={data.description}
                            />
                            <meta name="Title" value={data.title} />
                            <link
                                rel="canonical"
                                href="https://www.anthonyhai.tk/"
                            />
                            <meta property="og:title" content={data.title} />
                        </Helmet>
                        <h4>{data.title}</h4>
                        <span className="animate-border mt-2 mb-6"></span>
                    </div>
                    <div className="blog-detail-author">
                        <div className="blog-detail-author-left">
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/ava.png?alt=media&token=e0158b8e-bf2f-4072-a68e-bf78439a35dc`}
                                alt="Avatar"
                            />
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
                    <div
                        className="blog-detail-content"
                        dangerouslySetInnerHTML={{
                            __html: data.content,
                        }}
                    ></div>
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}

export default BlogDetail;
