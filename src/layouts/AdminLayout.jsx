import Sidebar from "../components/Sidebar/Sidebar";
import AdminTopNav from "../components/AdminTopNav/AdminTopNav";
import { useStore } from "../store";
function AdminLayout({ children }) {
    const [state, dispatch] = useStore();
    return (
        <>
            {state.isAuthenticated && (
                <>
                    <AdminTopNav />
                    <Sidebar />
                    {children}
                </>
            )}
        </>
    );
}

export default AdminLayout;
