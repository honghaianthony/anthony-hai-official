import React, { useEffect, useState } from "react";
import "./Blog.scss";
import FeaturingBlog from "./FeaturingBlog/FeaturingBlog";
import blogApis from "../../apis/blogApis";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(blogs);
    useEffect(async () => {
        const res = await blogApis.getAllBlogs();
        setBlogs(res);
    }, []);

    useEffect(() => {
        setFilteredData(blogs);
    }, [blogs]);

    let firstItem = 0;
    let trendBlogs = [1, 2, 3];

    const anotherBlog = () => {
        return filteredData.map((item, index) => {
            let path = "/blog/" + item.id;
            return (
                <FeaturingBlog
                    key={index}
                    src={item.coverImage}
                    title={item.title}
                    author={`${item.User.firstName} ${item.User.lastName}`}
                    time={new Date(item.updatedAt).toLocaleDateString()}
                    path={path}
                    description={item.description}
                />
            );
        });
    };

    return (
        <div className="blog-container">
            {blogs.length > 0 ? (
                <div className="blog-list">
                    <div className="featuring-blog">
                        <h4 className="featuring-blog-title">Featuring Blog</h4>
                        <div className="featuring-blog-item">
                            <FeaturingBlog
                                src={blogs[firstItem].coverImage}
                                title={blogs[firstItem].title}
                                description={blogs[firstItem].description}
                                author={`${blogs[firstItem].User.firstName} ${blogs[firstItem].User.lastName} `}
                                time={new Date(
                                    blogs[firstItem].updatedAt
                                ).toLocaleDateString()}
                                //view='134'
                                path={`/blogs/${blogs[firstItem].id}`}
                            />
                        </div>
                    </div>
                    <div className="another-blog">
                        <h4 className="another-blog-title">Another Blogs</h4>
                        <div className="another-blog-item">{anotherBlog()}</div>
                    </div>
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}

export default Blog;
