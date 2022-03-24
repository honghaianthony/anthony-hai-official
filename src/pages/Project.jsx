import React from "react";
import MainLayout from "../layouts/MainLayout";
import ProjectProduct from "../components/Project/Project";
import { Helmet } from "react-helmet-async";
function Project() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Project - Hong Hai Official</title>
                <meta name="description" content="Hong Hai Official Project" />
                <meta name="Title" value="Hong Hai Official Project" />
                <link
                    rel="canonical"
                    href="https://www.anthonyhai.tk/project"
                />
                <meta property="og:title" content="Hong Hai Official Project" />
            </Helmet>
            <MainLayout>
                <ProjectProduct />
            </MainLayout>
        </>
    );
}

export default Project;
