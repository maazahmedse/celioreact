import React from "react";
import "./SectionLoader.css";

const SectionLoader = () => {
    return (
        <div className="section-loader">
            {/* <div className="spinner"></div> */}
            <img style={{ width: "44px", height: "41px" }} src="assets/img/pulse-loading.gif" />
        </div>
    );
};

export default SectionLoader;