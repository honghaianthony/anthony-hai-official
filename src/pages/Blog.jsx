import React from "react";
import MainLayout from "../layouts/MainLayout";
import BlogMain from "../components/Blog/Blog";
import { Helmet } from "react-helmet";
function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Hong Hai's blog" />
            </Helmet>
            <MainLayout>
                <BlogMain />
            </MainLayout>
        </>
    );
}

export default Blog;
