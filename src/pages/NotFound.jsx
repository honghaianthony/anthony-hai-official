import React from "react";
import AnotherLayout from "../layouts/AnotherLayout";
import NotFoundPage from "../components/NotFound/NotFound";

function NotFound() {
    return (
        <>
            <AnotherLayout>
                <NotFoundPage />
            </AnotherLayout>
        </>
    );
}

export default NotFound;
