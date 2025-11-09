import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtextedRoute";
import { useAuth } from "../context/authContext";
import Login from "../pages/Login";
import Chatgpt from "../pages/Chatgpt";
import ProductList from "../pages/ProductList";
import CreateProduct from "../pages/CreateProduct";


export default function AppRoutes() {
    const { user } = useAuth();
    const handledDataLayer = useRef();
    handledDataLayer.current = true;

    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chatgpt />} />

                <Route path="/" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
                <Route path="/productlist" element={<ProtectedRoute user={user}><ProductList /></ProtectedRoute>} />
                <Route path="/createproduct" element={<ProtectedRoute user={user}><CreateProduct /></ProtectedRoute>} />
            </Routes>
        </Router>
    )
}