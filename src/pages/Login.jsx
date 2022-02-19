import React from "react";
import AnotherLayout from "../layouts/AnotherLayout";
import Login from "../components/Authentication/Login";
function LoginPage() {
    return (
        <>
            <AnotherLayout>
                <Login />
            </AnotherLayout>
        </>
    );
}

export default LoginPage;
