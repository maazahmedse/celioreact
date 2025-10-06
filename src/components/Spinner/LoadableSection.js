import React from "react";
import { useLoader } from "../../context/LoaderContext";
import SectionLoader from "./SectionLoader";

const LoadableSection = ({ loaderKey, children, spinner }) => {
    const { loaders } = useLoader();
    const isLoading = loaders[loaderKey] || false;

    if (isLoading && spinner) {
        return (
            <div style={{ position: "relative" }}>
                {children}
                {isLoading && <SectionLoader />}
            </div>
        );
    }

    // Otherwise render children as-is
    return <div style={{ position: "relative" }}>{children}</div>;

    // return (
    //     <div style={{ position: "relative" }}>
    //         {children}
    //         {isLoading && <SectionLoader />}
    //     </div>
    // );
};

export default LoadableSection;