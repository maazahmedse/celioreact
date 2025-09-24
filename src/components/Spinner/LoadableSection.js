import React from "react";
import { useLoader } from "../../context/LoaderContext";
import SectionLoader from "./SectionLoader";

const LoadableSection = ({ loaderKey, children }) => {
    const { loaders } = useLoader();
    const isLoading = loaders[loaderKey] || false;

    return (
        <div style={{ position: "relative" }}>
            {children}
            {isLoading && <SectionLoader />}
        </div>
    );
};

export default LoadableSection;