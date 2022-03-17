import React from "react";
import MainLayout from "../layouts/MainLayout";
import WebsiteProjectDetail from "../components/Project/WebsiteProject/WebsiteProject";
import { Helmet } from "react-helmet-async";
function WebsiteProject() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Website Project - Hong Hai Official</title>
                <meta
                    name="description"
                    content="Website Project of Hong Hai"
                />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <MainLayout>
                <WebsiteProjectDetail />
            </MainLayout>
        </>
    );
}

export default WebsiteProject;
