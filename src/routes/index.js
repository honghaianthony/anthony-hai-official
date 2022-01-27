import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Home } from "../pages";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
