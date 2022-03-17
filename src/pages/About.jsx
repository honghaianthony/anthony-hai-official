import React from "react";
import MainLayout from "../layouts/MainLayout";
import Intro from "../components/Intro/Intro";
import { Helmet } from "react-helmet-async";
function About() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>About - Hong Hai Official</title>
                <meta
                    name="description"
                    content="The portfolio information of Hong Hai"
                />
                <link
                    rel="Hong Hai Official"
                    href="https://www.anthonyhai.tk/"
                />
                <meta name="Title" value="About" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="About" />
            </Helmet>
            <MainLayout>
                <Intro />
            </MainLayout>
        </>
    );
}

export default About;
