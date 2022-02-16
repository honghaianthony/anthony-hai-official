import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Sidebar from "../components/Sidebar/Sidebar";

import { AdminRoute } from "./AdminRoute";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/project" component={Project}></Route>
                <Route exact path="/blog" component={Blog}></Route>
                <Route
                    exact
                    path="/blog/blog-detail"
                    component={BlogDetail}
                ></Route>
                <Route
                    exact
                    path="/project/website-project"
                    component={WebsiteProject}
                ></Route>
                <Route
                    exact
                    path="/project/mobile-project"
                    component={MobileProject}
                ></Route>
                <Route
                    render={(props) => (
                        <div className="layout">
                            <Sidebar {...props} />
                            <div className="layout-content">
                                <div className="layout-content-main">
                                    <AdminRoute />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}
