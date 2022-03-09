import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateProjectPage from "../components/ProjectAdmin/UpdateProject/UpdateProject";

function UpdateBlog() {
    return (
        <>
            <AdminLayout>
                <UpdateProjectPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
