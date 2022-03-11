import React, { useEffect, useState } from "react";
import "./Blog.scss";
import FeaturingBlog from "./FeaturingBlog/FeaturingBlog";
import blogApis from "../../apis/blogApis";
import { useSpring, animated } from "react-spring";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function asyncProject() {
            const res = await blogApis.getAllBlogs();
            setBlogs(res);
        }
        asyncProject();
    }, []);

    let firstItem = 0;

    const idArray = blogs.map((item, index) => {
        return index;
    });

    idArray.splice(0, 1);

    const anotherBlog = () => {
        return idArray.map((item, index) => {
            // let path = "/blog/" + item.id;
            return (
                <FeaturingBlog
                    key={blogs[item].id}
                    blogId={blogs[item].id}
                    src={blogs[item].coverImage}
                    title={blogs[item].title}
                    author={`${blogs[item].User.firstName} ${blogs[item].User.lastName}`}
                    time={new Date(blogs[item].updatedAt).toLocaleDateString()}
                    // path={path}
                    description={blogs[item].description}
                />
            );
        });
    };
    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, 1000px)" },
        config: { tension: 220, friction: 120 },
    });

    return (
        <animated.div className="blog-container" style={props}>
            {blogs.length > 0 ? (
                <div className="blog-list">
                    <div className="featuring-blog">
                        <h4 className="featuring-blog-title">Featuring Blog</h4>
                        <div className="featuring-blog-item">
                            <FeaturingBlog
                                blogId={blogs[firstItem].id}
                                src={blogs[firstItem].coverImage}
                                title={blogs[firstItem].title}
                                description={blogs[firstItem].description}
                                author={`${blogs[firstItem].User.firstName} ${blogs[firstItem].User.lastName} `}
                                time={new Date(
                                    blogs[firstItem].updatedAt
                                ).toLocaleDateString()}
                                //view='134'
                            />
                        </div>
                    </div>
                    {blogs.length > 1 && (
                        <div className="another-blog">
                            <h4 className="another-blog-title">
                                Another Blogs
                            </h4>
                            <div className="another-blog-item">
                                {anotherBlog()}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </animated.div>
    );
}

export default Blog;
