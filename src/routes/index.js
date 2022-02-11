import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
    Home,
    About,
    Project,
    Blog,
    BlogDetail,
    ProjectDetail,
} from "../pages";
import ScrollToTop from "../helpers/ScrollToTop";

export default function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/project" element={<Project />}></Route>
                    <Route exact path="/blog" element={<Blog />}></Route>
                    <Route
                        exact
                        path="/blog/blog-detail"
                        element={<BlogDetail />}
                    ></Route>
                    <Route
                        exact
                        path="/project/website-project"
                        element={<ProjectDetail />}
                    ></Route>
                </Routes>
            </ScrollToTop>
        </Router>
    );
}
