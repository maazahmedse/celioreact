import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ type = "danger", message, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose && onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;

    return (

        <div className={`toast alert alert-${type} alert-styled-left alert-bordered`}>
            <span>{String(message)}</span>
            {/* <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span></button> */}

        </div>


        // <div className={`toast toast-${type}`}>
        //     <span>{String(message)}</span>
        //     <button className="toast-close" onClick={onClose}>
        //         ✕
        //     </button>
        // </div>
    );
};

export default Toast;