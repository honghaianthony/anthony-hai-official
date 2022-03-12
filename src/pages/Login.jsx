import React from "react";
import AnotherLayout from "../layouts/AnotherLayout";
import Login from "../components/Authentication/Login";
import { Helmet } from "react-helmet-async";
function LoginPage() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Login</title>
                <meta name="description" content="Login" />
            </Helmet>
            <AnotherLayout>
                <Login />
            </AnotherLayout>
        </>
    );
}

export default LoginPage;
