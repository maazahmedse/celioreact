import React from 'react'
import "./Alert.css";


const Alert = ({ type = "error", message, onClose }) => {
    if (!message) return null;

    return (
        <div class="alert alert-danger alert-styled-left alert-bordered">
            <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span></button>
            <span class="text-semibold">Oh snap!</span> Change a few things up and <a href="#" class="alert-link">try submitting again</a>.
        </div>
    );
};

export default Alert;