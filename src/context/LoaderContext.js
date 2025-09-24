import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    // Store loaders by key (users, orders, etc.)
    const [loaders, setLoaders] = useState({});

    const showLoader = (key) => {
        setLoaders((prev) => ({ ...prev, [key]: true }));
    };

    const hideLoader = (key) => {
        setLoaders((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <LoaderContext.Provider value={{ loaders, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
};