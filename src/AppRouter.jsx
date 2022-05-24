import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";

function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                {/* main route */}
                <Route path='/' element={<App />}>
                    {/* unprotected subroutes of '/' for component <App /> */}
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;