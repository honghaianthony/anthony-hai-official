import React from "react";
import MainLayout from "../layouts/MainLayout";
import FeaturingBlog from "../components/Blog/FeaturingBlog/FeaturingBlog";
function Blog() {
    return (
        <>
            <MainLayout>
                <FeaturingBlog />
            </MainLayout>
        </>
    );
}

export default Blog;
