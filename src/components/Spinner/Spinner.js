import React from 'react';
import { useState } from "react";

function Spinner() {

    // const [isloading, setloading] = useState(true);
    // setTimeout(() => {
    //     setloading(false);
    // }, 5500);

    return (
        <div className="overlay">
            <i className="icon-spinner spinner"></i>
        </div>
    )
}

export default Spinner