import React from "react";
import AnotherLayout from "../layouts/AnotherLayout";
import Login from "../components/Authentication/Login";
import { Helmet } from "react-helmet-async";
function LoginPage() {
    return (
        <>
            <Helmet>
                <title>Login - Hong Hai Official</title>
                <meta name="description" content="Login" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <AnotherLayout>
                <Login />
            </AnotherLayout>
        </>
    );
}

export default LoginPage;
