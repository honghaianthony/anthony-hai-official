import Navigation from "../components/Navigation/Navbar";

function NotFoundLayout({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

export default NotFoundLayout;
