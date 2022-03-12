import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateProjectPage from "../components/ProjectAdmin/UpdateProject/UpdateProject";
import { Helmet } from "react-helmet-async";
function UpdateBlog() {
    return (
        <>
            <Helmet>
                <title>Update Project</title>
                <meta name="description" content="Update project admin" />
            </Helmet>
            <AdminLayout>
                <UpdateProjectPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
