import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import ProjectAdminPage from "../components/ProjectAdmin/ProjectAdmin";
import { Helmet } from "react-helmet-async";
function ProjectAdmin() {
    return (
        <>
            <Helmet>
                <title>Project Admin Management - Hong Hai Official</title>
                <meta name="description" content="Project admin management" />
            </Helmet>
            <AdminLayout>
                <ProjectAdminPage />
            </AdminLayout>
        </>
    );
}

export default ProjectAdmin;
