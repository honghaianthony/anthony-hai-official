import Router from "./routes";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
