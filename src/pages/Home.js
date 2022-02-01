import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner/Banner";
import Working from "../components/Working/Working";

function Home() {
    return (
        <>
            <MainLayout>
                <Banner />
                <Working />
            </MainLayout>
        </>
    );
}

export default Home;
