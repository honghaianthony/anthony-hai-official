import React from "react";

import { Route, Switch } from "react-router-dom";
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

export const AdminRoute = () => {
    return (
        <Switch>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/blog-admin" component={BlogAdmin} />
            <Route path="/project-admin" component={ProjectAdmin} />
        </Switch>
    );
};
