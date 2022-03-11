import React from "react";
import MainLayout from "../layouts/MainLayout";
import Intro from "../components/Intro/Intro";
import { Helmet } from "react-helmet";
function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta
                    name="description"
                    content="The information of Hong Hai"
                />
            </Helmet>
            <MainLayout>
                <Intro />
            </MainLayout>
        </>
    );
}

export default About;
