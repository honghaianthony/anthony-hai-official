import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner/Banner";
import Working from "../components/Working/Working";
import Reason from "../components/Reason/Reason";
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <>
            <Helmet>
                <title>Hong Hai Official</title>
                <meta name="description" content="Hong Hai Official Home" />
                <meta name="Title" value="Hong Hai Official" />
                <link rel="canonical" href="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
            </Helmet>
            <MainLayout>
                <Banner />
                <Working />
                <Reason />
            </MainLayout>
        </>
    );
}

export default Home;
