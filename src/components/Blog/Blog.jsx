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

    const idArray = blogs.map((item, index) => {
        return index;
    });
    let firstItem = 0;
    let trendBlogs = [1, 2, 3];
    idArray.splice(0, 4);

    const anotherBlog = () => {
        return trendBlogs.map((item) => {
            if (filteredData.length > 0) {
                return filteredData.map((item, index) => {
                    return (
                        <FeaturingBlog
                            key={index}
                            src={item.coverImage}
                            title={item.title}
                            description={item.description}
                            author={`${item.User.firstName} ${item.User.lastName}`}
                            time={new Date(item.updatedAt).toLocaleDateString()}
                        />
                    );
                });
            }
        });
    };

    return (
        <div className="blog-container">
            {blogs.length > 0 ? (
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
            ) : (
                <div className="loader"></div>
            )}
            <div className="another-blog">
                <h4 className="another-blog-title">Another Blogs</h4>
                <div className="another-blog-item">{anotherBlog()}</div>
            </div>
        </div>
    );
}

export default Blog;
