import React from "react";
import MobileProjectDetail from "../components/Project/MobileProject/MobileProject";
import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
function MobileProject() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Mobile Project</title>
                <meta name="description" content="Mobile Project of Hong Hai" />
            </Helmet>
            <MainLayout>
                <MobileProjectDetail />
            </MainLayout>
        </>
    );
}

export default MobileProject;
