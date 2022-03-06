import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateBlogPage from "../components/BlogAdmin/UpdateBlog/UpdateBlog";

function UpdateBlog() {
    return (
        <>
            <AdminLayout>
                <UpdateBlogPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
