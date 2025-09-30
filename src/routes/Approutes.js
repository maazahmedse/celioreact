import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtextedRoute";
import { useAuth } from "../context/authContext";
import Login from "../pages/Login";


export default function AppRoutes() {
    const { user } = useAuth();
    const handledDataLayer = useRef();
    handledDataLayer.current = true;

    return (
        <Router>
            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute user={user}>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                <Route
                    path="/login"
                    element={
                        <Login />
                    } />
            </Routes>
        </Router>
    )
}