import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import BlogAdminPage from "../components/BlogAdmin/BlogAdmin";
import { Helmet } from "react-helmet-async";
function BlogAdmin() {
    return (
        <>
            <Helmet>
                <title>Blog Admin Management</title>
                <meta name="description" content="Blog admin management" />
            </Helmet>
            <AdminLayout>
                <BlogAdminPage />
            </AdminLayout>
        </>
    );
}

export default BlogAdmin;
