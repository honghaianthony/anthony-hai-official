import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../components/Dashboard/Dashboard";
import { Helmet } from "react-helmet-async";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard - Hong Hai Official</title>
                <meta name="description" content="Dashboard" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <AdminLayout>
                <DashboardPage />
            </AdminLayout>
        </>
    );
}

export default Dashboard;
