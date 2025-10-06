import React, { useEffect, useRef, useState } from "react";
import Backend from "../layouts/Backend";
import { useAuth } from "../context/authContext";


function Dashboard({ props }) {
    const { user } = useAuth();
    console.log(user);

    useEffect(() => {
        document.title = "dashboard.html"; // 👈 sets the title bar
    }, []);

    return (
        <div id="dashboard">
            <Backend pageheading="Dashboard" user>
                {
                    user.datainfo.map(datt => (
                        <div key={datt.id}>
                            <span>{datt.name}</span>
                        </div>
                    ))
                }
            </Backend>
        </div>
    );

}

export default Dashboard;