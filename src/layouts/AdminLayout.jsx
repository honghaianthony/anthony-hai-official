import Sidebar from "../components/Sidebar/Sidebar";
import AdminTopNav from "../components/AdminTopNav/AdminTopNav";
import { UseStore } from "../store";
import "../assets/scss/AdminAppearance.scss";
function AdminLayout({ children }) {
    const [state, dispatch] = UseStore();
    return (
        <div className="layout">
            <div className="layout-content">
                {state.isAuthenticated && (
                    <>
                        <AdminTopNav />
                        <Sidebar />
                        <div className="layout-content-main"> {children}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AdminLayout;
