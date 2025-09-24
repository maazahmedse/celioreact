import React, { useEffect, useRef, useState } from "react";
import Backend from "../layouts/Backend";


function Dashboard({ }) {

    return (
        <div id="dashboard">
            <Backend pageheading="Dashboard" spinner>
                This is dashboard
            </Backend>
        </div>
    );

}

export default Dashboard;