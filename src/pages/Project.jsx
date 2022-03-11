import React from "react";
import MainLayout from "../layouts/MainLayout";
import ProjectProduct from "../components/Project/Project";
import { Helmet } from "react-helmet";
function Project() {
    return (
        <>
            <Helmet>
                <title>Project</title>
                <meta name="description" content="Projects of Hong Hai" />
            </Helmet>
            <MainLayout>
                <ProjectProduct />
            </MainLayout>
        </>
    );
}

export default Project;
