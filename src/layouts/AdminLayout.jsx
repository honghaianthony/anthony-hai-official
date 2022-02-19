import Sidebar from "../components/Sidebar/Sidebar";
import AdminTopNav from "../components/AdminTopNav/AdminTopNav";

function AdminLayout({ children }) {
    return (
        <>
            <AdminTopNav />
            <Sidebar />
            {children}
        </>
    );
}

export default AdminLayout;
