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
    NotFound,
    Login,
} from "../pages";
import ScrollToTop from "../helpers/ScrollToTop";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminTopNav from "../components/AdminTopNav/AdminTopNav";

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
                <Route exact path="/admin" component={Dashboard}></Route>
                <Route
                    exact
                    path="/project-admin"
                    component={ProjectAdmin}
                ></Route>
                <Route exact path="/blog-admin" component={BlogAdmin}></Route>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}
