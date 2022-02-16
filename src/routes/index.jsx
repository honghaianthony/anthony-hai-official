import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/scss/AdminAppearance.scss";
import PrivateRoute from "./PrivateRoute";
import {
    Home,
    About,
    Project,
    Blog,
    BlogDetail,
    WebsiteProject,
    MobileProject,
    Dashboard,
    BlogAdmin,
    ProjectAdmin,
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
                        element={<WebsiteProject />}
                    ></Route>
                    <Route
                        exact
                        path="/project/mobile-project"
                        element={<MobileProject />}
                    ></Route>
                    <Route exact path="/admin" element={<Dashboard />} />
                    <Route exact path="/blog-admin" element={<BlogAdmin />} />
                    <Route
                        exact
                        path="/project-admin"
                        element={<ProjectAdmin />}
                    />
                </Routes>
            </ScrollToTop>
        </Router>
    );
}
