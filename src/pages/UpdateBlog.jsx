import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateBlogPage from "../components/BlogAdmin/UpdateBlog/UpdateBlog";
import { Helmet } from "react-helmet-async";
function UpdateBlog() {
    return (
        <>
            <Helmet>
                <title>Update Blog</title>
                <meta name="description" content="Update blog admin" />
            </Helmet>
            <AdminLayout>
                <UpdateBlogPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
