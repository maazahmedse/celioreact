import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";


export default function AppRoutes() {

    const handledDataLayer = useRef();
    handledDataLayer.current = true;


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}