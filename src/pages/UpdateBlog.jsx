import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateBlogPage from "../components/BlogAdmin/UpdateBlog/UpdateBlog";
import { Helmet } from "react-helmet-async";
function UpdateBlog() {
    return (
        <>
            <Helmet>
                <title>Update Blog - Hong Hai Official</title>
                <meta name="description" content="Update blog admin" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <AdminLayout>
                <UpdateBlogPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
