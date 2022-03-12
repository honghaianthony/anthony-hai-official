import React from "react";
import MainLayout from "../layouts/MainLayout";
import WebsiteProjectDetail from "../components/Project/WebsiteProject/WebsiteProject";
import { Helmet } from "react-helmet-async";
function WebsiteProject() {
    return (
        <>
            <Helmet prioritizeSeoTags>
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
