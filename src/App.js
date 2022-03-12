import Router from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.css";

const helmetContext = {};
function App() {
    return (
        <>
            <HelmetProvider context={helmetContext}>
                <Helmet>
                    <title>Hong Hai Official</title>
                    <meta
                        name="description"
                        content="The personal portfolio of Dang Ngo Hong Hai"
                    />
                    <meta
                        name="keywords"
                        content="Portfolio, Hong Hai Official, Hong Hai Portfolio, Hong Hai Blog, Anthony Hai Official, anthonyhai, Anthony Hai Portfolio"
                    />
                    <style type="text/css">{`
                .app{
                    background-color: #fff;
                }
                .header{
                    background-color: #f8f9fa;
                    color: black;
                }`}</style>
                </Helmet>
                <div className="App">
                    <Router />
                </div>
            </HelmetProvider>
        </>
    );
}

const { helmet } = helmetContext;

export default App;
