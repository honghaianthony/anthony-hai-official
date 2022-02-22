import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../components/Dashboard/Dashboard";

import { Redirect } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <AdminLayout>
                <DashboardPage />
            </AdminLayout>
        </>
    );
}

export default Dashboard;
