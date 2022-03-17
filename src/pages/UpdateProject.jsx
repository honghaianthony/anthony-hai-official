import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateProjectPage from "../components/ProjectAdmin/UpdateProject/UpdateProject";
import { Helmet } from "react-helmet-async";
function UpdateBlog() {
    return (
        <>
            <Helmet>
                <title>Update Project - Hong Hai Official</title>
                <meta name="description" content="Update project admin" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <AdminLayout>
                <UpdateProjectPage />
            </AdminLayout>
        </>
    );
}

export default UpdateBlog;
