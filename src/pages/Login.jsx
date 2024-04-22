import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Input } from "../components/controllers/field";
import AnimatedSVG from "../helpers/Animat";
import AuthLayout from "../layouts/AuthLayout";
import { useLoginMutation } from "../store/login";
import { setUserData } from "../store/Slices/UserInfo";
import image from "./image.png";
import AuthSlider from "../components/auth/Slider";

const Login = ({ closeModal, setIsOpen, handleSuccess }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const defaultMessage = {
        Name: [],
        Password: []
    };

    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [error, setError] = useState("");
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const handleLoginSuccess = token => {
        setLoading(false);
        toast("loged in successfully");
        localStorage.setItem("token", token);
        window.location.reload();
        navigate("/");
    };

    const [login] = useLoginMutation(); // destructure the mutation function
    const handleLoginError = error => {
        setError(error?.data?.message);
        if (error.data && error.data.message) {
            setError(error.data.message);
        }
        console.log(error);
        setLoading(false);
    };
    const handleLogin = async event => {
        event.preventDefault();

        const newErrorMessage = defaultMessage;

        if (!Name) {
            setInvalid(true);
            newErrorMessage.Name = ["This field is required"];
        }
        if (!Password) {
            setInvalid(true);
            newErrorMessage.Password = ["This field is required"];
        }
        if (!Name || !Password) {
            setErrorMessage(newErrorMessage);
            return;
        }
        try {
            setLoading(true);

            const email = Name.toLocaleLowerCase();
            const password = Password;

            const response = await login({ email, password }).unwrap(); // call the mutation function with the form data
            dispatch(setUserData(response.data.user));

            handleLoginSuccess(response.token);

            localStorage.setItem("id", response.data.user._id);
            // getUserFromResponse(response.data);
        } catch (error) {
            handleLoginError(error);
        }
    };

    return (
        <AuthLayout>
            <div className="flex justify-between w-full h-full flex-wrap">
                <AuthSlider />
                <div className="flex   md:-mt-0 items-left justify-center flex-col w-full lg:w-1/2 lg:px-28 px-6">
                    <h3 className=" text-2xl font-semibold text-gray-700 ">Welcome back</h3>
                    <p className=" text-sm mt-2 mb-10 text-black">
                        New to Faremit?{" "}
                        <Link className="text-[#554ae4] font-semibold" to="/signup">
                            Sign Up
                        </Link>
                    </p>

                    {error && (
                        <div className="my-2 text-center w-full text-secondary bg-primary py-2 rounded-md">
                            {error}
                        </div>
                    )}
                    <form className="space-y-5 w-full" onSubmit={handleLogin}>
                        <div>
                            <Input
                                label="Name"
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={Name}
                                onChange={e => setName(e.target.value)}
                                error={errorMessage.Name}
                            />
                        </div>

                        <div>
                            <Input
                                label="Password"
                                id="Password"
                                type="password"
                                placeholder="Enter Password"
                                value={Password}
                                onChange={e => setPassword(e.target.value)}
                                error={errorMessage.Password}
                            />
                        </div>

                        <div className="mt-5 sm:mt-6">
                            <div className="flex flex-col space-y-4">
                                <button
                                    type="submit"
                                    className="w-full   items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r bg-[#554AE4] hover:from-[#554AE4] hover:to-[#554AE4] block text-center active:outline-none px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3   focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500/50  "
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <AnimatedSVG className="w-full h-8 text-white" />
                                    ) : (
                                        <span className="w-24 truncate md:-w-max text-secondary">
                                            {" "}
                                            Sign in
                                        </span>
                                    )}
                                </button>
                                <a>Forget Password?</a>
                            </div>
                        </div>
                        <img
                            src={image}
                            alt="image"
                            className="absolute top-0 right-0 w-56 h-56 z-0 object-cover"
                        />
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
