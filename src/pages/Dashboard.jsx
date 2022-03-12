import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../components/Dashboard/Dashboard";
import { Helmet } from "react-helmet-async";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard" />
            </Helmet>
            <AdminLayout>
                <DashboardPage />
            </AdminLayout>
        </>
    );
}

export default Dashboard;
