import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import BlogAdminPage from "../components/BlogAdmin/BlogAdmin";
function BlogAdmin() {
    return (
        <>
            <AdminLayout>
                <BlogAdminPage />
            </AdminLayout>
        </>
    );
}

export default BlogAdmin;
