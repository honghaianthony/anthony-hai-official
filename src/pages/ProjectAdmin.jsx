import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import ProjectAdminPage from "../components/ProjectAdmin/ProjectAdmin";
function ProjectAdmin() {
    return (
        <>
            <AdminLayout>
                <ProjectAdminPage />
            </AdminLayout>
        </>
    );
}

export default ProjectAdmin;
