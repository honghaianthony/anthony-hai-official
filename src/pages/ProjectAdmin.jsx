import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import ProjectAdminPage from "../components/ProjectAdmin/ProjectAdmin";
import { Helmet } from "react-helmet";
function ProjectAdmin() {
    return (
        <>
            <Helmet>
                <title>Project Admin Management</title>
                <meta name="description" content="Project admin management" />
            </Helmet>
            <AdminLayout>
                <ProjectAdminPage />
            </AdminLayout>
        </>
    );
}

export default ProjectAdmin;
