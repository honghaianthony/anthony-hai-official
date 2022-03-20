import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import AuthProvider from "./store/Provider";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.hydrate(
    <HelmetProvider>
        <AuthProvider>
            <App>
                <Helmet>
                    <title>Hong Hai Official</title>
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
                    <meta name="title" content="Hong Hai Official" />
                    <meta
                        name="description"
                        content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.anthonyhai.tk/"
                    />
                    <meta property="og:title" content="Hong Hai Official" />
                    <meta
                        property="og:description"
                        content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                    />
                    <meta property="og:image" content="" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.anthonyhai.tk/"
                    />
                    <meta
                        property="twitter:title"
                        content="Hong Hai Official"
                    />
                    <meta
                        property="twitter:description"
                        content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                    />
                    <meta property="twitter:image" content=""></meta>
                    <link rel="canonical" href="https://www.anthonyhai.tk/" />
                </Helmet>
            </App>
        </AuthProvider>
    </HelmetProvider>,
    document.getElementById("root")
);

// ReactDOM.render(
//     <React.StrictMode>
//         <AuthProvider>
//             <App />
//         </AuthProvider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
