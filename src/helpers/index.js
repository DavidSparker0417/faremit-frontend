import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
export const Base_url = "https://api.faremit.com/";
export const toast = (type, message) => {
    (function () {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: toast => {
                toast.addEventListener("mouseenter", window.Swal.stopTimer);
                toast.addEventListener("mouseleave", window.Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: type,
            title: message
        });
    })();
};

export const checkPermissions = (permissions = []) => {
    let found = false;
    const userPermissions = ["add", "update", "delete"];
    if (userPermissions) {
        permissions.forEach(item => {
            found = found || userPermissions.includes(item);
        });
    }
    return found;
};

export const scrollTop = () => {
    const element = document.getElementById("top-page");
    if (element) {
        const position = getOffset(element);
        window.scrollTo(position.left, 0);
    }
};

export const formatToCurrency = value => {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(
        parseFloat(value)
    );
};

export const checkUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwt_decode(token);
        const expirationTime = decoded.exp * 1000; // Convert expiration time to milliseconds
        const currentTime = Date.now(); // Get the current time in milliseconds

        if (currentTime > expirationTime) {
            // Token has expired, remove it from localStorage
            localStorage.removeItem("token");
            return null;
        }

        return decoded;
    } else {
        return null;
    }
};

export const UserData = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwt_decode(token);
        const expirationTime = decoded.exp * 1000; // Convert expiration time to milliseconds
        const currentTime = Date.now(); // Get the current time in milliseconds

        if (currentTime > expirationTime) {
            localStorage.removeItem("token");
            return null;
        }

        return decoded;
    } else {
        return null;
    }
};

export const logout = navigate => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    toast("success", "Successful logout");
};
