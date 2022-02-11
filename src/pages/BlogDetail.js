import React from "react";
import MainLayout from "../layouts/MainLayout";
import BlogDetails from "../components/Blog/BlogDetail/BlogDetail";
function BlogDetail() {
    return (
        <>
            <MainLayout>
                <BlogDetails />
            </MainLayout>
        </>
    );
}

export default BlogDetail;
