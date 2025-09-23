import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import Dashboard from "../pages/Dashboard";


export default function AppRoutes() {

    const handledDataLayer = useRef();
    handledDataLayer.current = true;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}