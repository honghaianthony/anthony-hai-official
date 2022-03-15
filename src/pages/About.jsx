import React from "react";
import MainLayout from "../layouts/MainLayout";
import Intro from "../components/Intro/Intro";
import { Helmet } from "react-helmet-async";
function About() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>About</title>
                <meta
                    name="description"
                    content="The portfolio information of Hong Hai"
                />
            </Helmet>
            <MainLayout>
                <Intro />
            </MainLayout>
        </>
    );
}

export default About;
