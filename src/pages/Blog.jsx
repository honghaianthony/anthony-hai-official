import React from "react";
import MainLayout from "../layouts/MainLayout";
import BlogMain from "../components/Blog/Blog";
import { Helmet } from "react-helmet-async";
function Blog() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Blog - Hong Hai Official</title>
                <meta name="description" content="Hong Hai Official blog" />
                <meta name="Title" value="Hong Hai Official Blog" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official Blog" />
            </Helmet>
            <MainLayout>
                <BlogMain />
            </MainLayout>
        </>
    );
}

export default Blog;
