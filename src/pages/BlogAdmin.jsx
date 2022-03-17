import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import BlogAdminPage from "../components/BlogAdmin/BlogAdmin";
import { Helmet } from "react-helmet-async";
function BlogAdmin() {
    return (
        <>
            <Helmet>
                <title>Blog Admin Management - Hong Hai Official</title>
                <meta name="description" content="Blog admin management" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <AdminLayout>
                <BlogAdminPage />
            </AdminLayout>
        </>
    );
}

export default BlogAdmin;
