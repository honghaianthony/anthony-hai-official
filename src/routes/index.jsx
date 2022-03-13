import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
    UpdateBlog,
    UpdateProject,
} from "../pages";
import ScrollToTop from "../helpers/ScrollToTop";
import { UseStore, Actions } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const [state, dispatch] = UseStore();

    useEffect(() => {
        dispatch(Actions.reload());
    }, []);
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/project" component={Project}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route
                        exact
                        path="/blog/:slug.:_id.html"
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
                    <PrivateRoute
                        exact
                        path="/admin"
                        component={Dashboard}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path="/project-admin"
                        component={ProjectAdmin}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path="/blog-admin"
                        component={BlogAdmin}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path="/blog-admin/update/:blogId"
                        component={UpdateBlog}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path="/project-admin/update/:projectId"
                        component={UpdateProject}
                    ></PrivateRoute>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </ScrollToTop>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </BrowserRouter>
    );
}
