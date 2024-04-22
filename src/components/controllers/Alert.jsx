import React from "react";

const Alert = ({ type, message, onClose }) => {
    const alertClasses = {
        success: "bg-green-100 text-green",
        error: "bg-red-100 text-primary"
    };

    return (
        <div className={`w-full mb-2 ${alertClasses[type]}`}>
            <div
                className={`border px-4 py-2 rounded relative" role="alert
            ${type === "success" ? "border-green" : "border-primary"}
            `}
            >
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};

export default Alert;
