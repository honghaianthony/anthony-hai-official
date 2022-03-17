import React from "react";
import NotFoundLayout from "../layouts/NotFoundLayout";
import NotFoundPage from "../components/NotFound/NotFound";
import { Helmet } from "react-helmet-async";
function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Not Found</title>
                <meta name="description" content="Not found 404" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <NotFoundLayout>
                <NotFoundPage />
            </NotFoundLayout>
        </>
    );
}

export default NotFound;
