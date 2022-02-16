import Sidebar from "../components/Sidebar/Sidebar";

function AdminLayout({ children }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}

export default AdminLayout;
