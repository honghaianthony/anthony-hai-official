import React from "react";
import AnotherLayout from "../layouts/AnotherLayout";
import NotFoundPage from "../components/NotFound/NotFound";
import { Helmet } from "react-helmet-async";
function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Not Found</title>
                <meta name="description" content="Not found 404" />
            </Helmet>
            <AnotherLayout>
                <NotFoundPage />
            </AnotherLayout>
        </>
    );
}

export default NotFound;
