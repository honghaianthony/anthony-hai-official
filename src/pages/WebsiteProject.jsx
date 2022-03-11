import React from "react";
import MainLayout from "../layouts/MainLayout";
import WebsiteProjectDetail from "../components/Project/WebsiteProject/WebsiteProject";
import { Helmet } from "react-helmet";
function WebsiteProject() {
    return (
        <>
            <Helmet>
                <title>Website Project</title>
                <meta
                    name="description"
                    content="Website Project of Hong Hai"
                />
            </Helmet>
            <MainLayout>
                <WebsiteProjectDetail />
            </MainLayout>
        </>
    );
}

export default WebsiteProject;
