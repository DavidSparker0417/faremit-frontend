import { Navigate } from "react-router-dom";

export const Auth = ({ children }) => {
    return localStorage.getItem("token") ? children : <Navigate to="/" />;
};

export const Guest = ({ children }) => {
    return !localStorage.getItem("token") ? children : <Navigate to="/" />;
};
