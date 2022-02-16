import Navigation from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
