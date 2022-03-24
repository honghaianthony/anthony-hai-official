import React from "react";
import MobileProjectDetail from "../components/Project/MobileProject/MobileProject";
import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
function MobileProject() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Mobile Project - Hong Hai Official</title>
                <meta name="description" content="Mobile Project of Hong Hai" />
                <meta name="Title" value="Hong Hai Official Project" />
                <link
                    rel="canonical"
                    href="https://www.anthonyhai.tk/mobile-project"
                />
                <meta property="og:title" content="Hong Hai Official Project" />
            </Helmet>
            <MainLayout>
                <MobileProjectDetail />
            </MainLayout>
        </>
    );
}

export default MobileProject;
