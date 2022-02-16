import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner/Banner";
import Working from "../components/Working/Working";
import Reason from "../components/Reason/Reason";

function Home() {
    return (
        <>
            <MainLayout>
                <Banner />
                <Working />
                <Reason />
            </MainLayout>
        </>
    );
}

export default Home;
