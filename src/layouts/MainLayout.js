import Navigation from "../components/Navigation/Navbar";

function MainLayout({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

export default MainLayout;
