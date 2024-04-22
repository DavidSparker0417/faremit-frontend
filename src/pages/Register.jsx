import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import { HiEyeSlash } from "react-icons/hi2";

import AnimatedSVG from "../helpers/Animat";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import image from "./image.png";
import AuthLayout from "../layouts/AuthLayout";
import { useSignupMutation, useSignupOtpMutation } from "../store/Signup";
import Alert from "../components/controllers/Alert";
import { Info } from "lucide-react";
import AuthSlider from "../components/auth/Slider";
import { CountryDropdown, PhoneInput, TextInput } from "../components/controllers/Countries";
const RegistrationForm = ({ closeModal, setactive, handleThemeChange }) => {
    const countries = [
        {
            name: "United States",
            label: "US United States",
            code: "+1",
            flag: "https://hatscripts.github.io/circle-flags/flags/us.svg"
        },
        {
            name: "Canada",
            label: "CA Canada",
            code: "+1",
            flag: "https://hatscripts.github.io/circle-flags/flags/ca.svg"
        },
        {
            name: "United Kingdom",
            label: "UK United Kingdom",
            code: "+44",
            flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg"
        }
    ];
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        Username: "",
        fullName: "",
        userOTP: "",
        email: "",
        password: "",
        Country: countries[0], // Set default country here
        phone: "",
        address: "",
        city: ""
    });
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [show, setShow] = useState(false);

    const [Signup] = useSignupMutation();
    const [SignupOtp] = useSignupOtpMutation();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateStep1 = () => {
        if (!formData.email || !formData.fullName.trim() || !formData.password.trim()) {
            setErrors(["All fields are mandatory"]);
            return false;
        }
        return true;
    };

    const handleSubmitOtp = async () => {
        setIsLoading(true);
        const data = { Email: formData.email.toLowerCase() };
        try {
            const response = await SignupOtp(data).unwrap();
            if (response) {
                setSuccess(response.message);
                setCurrentStep(2);
                toast.success("otp sent successfully");
            }
        } catch (error) {
            if (error.data) {
                setErrors([error.data.message]);
            }
        }
        setIsLoading(false);
    };
    console.log(formData.password);
    const handleSubmit = async () => {
        const data = {
            fullName: formData.fullName,
            country: formData.Country,
            Email: formData.email,
            password: formData.password,
            address: formData.address,
            city: formData.city,
            userOTP: formData.userOTP,
            phone: formData.phone
        };

        try {
            setIsLoading(true);
            const response = await Signup(data).unwrap();
            if (response) {
                toast.success("Congrats Registration successful");
                setSuccess(response.message);
                toast.success("Congrats Registration successful");
                navigate("/login");
            }
            setCurrentStep(3);
        } catch (error) {
            if (error.data && error.data) {
                setErrors([error.data.message]);
            } else {
                setErrors(["An error occurred. Please try again later."]);
            }
        }
        setIsLoading(false);
    };

    const handleNext = e => {
        e.preventDefault();
        if (currentStep === 1 && validateStep1()) {
            handleSubmitOtp(); // Submit the form data
        } else if (currentStep === 2) {
            setCurrentStep(3); // Submit the form data
        } else if (currentStep === 3) {
            handleSubmit(); // Submit the form data
        }
    };

    return (
        <AuthLayout>
            <div className="flex justify-between w-full h-full flex-wrap">
                <AuthSlider />
                <div className="flex  overflow-hidden z-50 md:mt-0 items-left justify-center flex-col w-full lg:w-1/2 lg:px-28 px-6">
                    {currentStep === 2 && (
                        <>
                            <h3 className="text-2xl font-semibold text-gray-700 ">
                                Verify your email address
                            </h3>
                            <p className="text-md text-grey-500 mt-2 mb-10 ">
                                6-digit code sent to {formData.email}
                                <button
                                    className="text-[#554ae4] ml-2 font-medium"
                                    onClick={() => setCurrentStep(1)}
                                >
                                    Change email
                                </button>
                            </p>
                        </>
                    )}
                    {currentStep === 1 && (
                        <>
                            <h3 className="text-2xl font-semibold text-gray-700 ">
                                Create your Faremit Account
                            </h3>
                            <p className="text-md text-grey-500 mt-2 mb-10 ">
                                Already have an account?
                                <Link className="text-[#554ae4] ml-2 font-medium" to="/login">
                                    Sign in
                                </Link>
                            </p>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <h1 className="w-full text-3xl font-medium text-[#0f172a]">
                                Finish setting up your account
                            </h1>
                            <p className="-mt-3 mb-3 w-full text-base font-medium tracking-wide leading-6 text-[#404040]">
                                Please provide your legally valid information
                            </p>
                        </>
                    )}
                    {errors.length > 0 && (
                        <Alert
                            type="error"
                            message={errors.join(", ")}
                            onClose={() => setErrors([])}
                        />
                    )}

                    <form className="w-full" onSubmit={handleNext}>
                        {currentStep === 1 && (
                            <div className="space-y-3 w-full">
                                <div>
                                    <label className="text-sm text-gray-700 font-semibold">
                                        Email <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative mt-2">
                                        <input
                                            className={`transition-all duration-300   py-2.5 px-4 w-full 
                                 border-secondary focus:border-indigo-500 focus:ring-indigo-500/20
                             rounded-md text-sm placeholder-gray-400   focus:rin`}
                                            type="email"
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-700 font-semibold">
                                        Full name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative mt-2">
                                        <input
                                            className={`transition-all duration-300   py-2.5 px-4 w-full 
                                 border-secondary focus:border-indigo-500 focus:ring-indigo-500/20
                             rounded-md text-sm placeholder-gray-400   focus:rin`}
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm flex items-center justify-start space-x-2">
                                        <Info className="w-4 h-4" />
                                        <blockquote>
                                            Enter your name as it appears on your government
                                            approved ID
                                        </blockquote>
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-700 font-semibold">
                                        Password <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative mt-2">
                                        <input
                                            className={`transition-all duration-300   py-2.5 px-4 w-full 
                                 border-secondary focus:border-indigo-500 focus:ring-indigo-500/20
                             rounded-md text-sm placeholder-gray-400   focus:rin`}
                                            name="password"
                                            type={show ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                        />
                                        {show ? (
                                            <HiEye
                                                onClick={() => setShow(!show)}
                                                className="cursor-pointer right-3 top-[0.7rem] text-gray-300 h-5 w-5 absolute"
                                            />
                                        ) : (
                                            <HiEyeSlash
                                                onClick={() => setShow(!show)}
                                                className="cursor-pointer right-3 top-[0.7rem] text-gray-300 h-5 w-5 absolute"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div className="space-y-5 w-full">
                                <div>
                                    <label className="text-sm text-gray-700 font-semibold">
                                        Code <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative mt-2">
                                        <input
                                            className={`transition-all duration-300   py-2.5 px-4 w-full 
                                 border-secondary focus:border-indigo-500 focus:ring-indigo-500/20
                             rounded-md text-sm placeholder-gray-400   focus:rin`}
                                            type="text"
                                            required
                                            name="userOTP"
                                            value={formData.userOTP}
                                            onChange={handleChange}
                                            placeholder="Enter 6-digit access code"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentStep === 3 && (
                            <div className="space-y-5 w-full">
                                <CountryDropdown
                                    selectedCountry={formData.Country} // Pass selected country
                                    setSelectedCountry={country =>
                                        setFormData(prevData => ({ ...prevData, Country: country }))
                                    }
                                    countries={countries} // Pass the countries array
                                />
                                <PhoneInput
                                    selectedCountry={formData.Country}
                                    value={formData}
                                    handleChange={handleChange}
                                />
                                <TextInput
                                    label="City"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    handleChange={handleChange}
                                />
                                <TextInput
                                    label="Address"
                                    placeholder="Address"
                                    value={formData.address}
                                    handleChange={handleChange}
                                />
                                {/* <TextInput
                                    label="PostalCode"
                                    placeholder="PostalCode"
                                    value={formData.postalCode}
                                    handleChange={handleChange}
                                /> */}
                            </div>
                        )}
                        <div className="mt-5 sm:mt-6 w-full">
                            <div className="flex justify-between space-x-5">
                                <button
                                    type="submit"
                                    className="w-full text-secondary  items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r bg-[#554AE4] hover:from-[#554AE4] hover:to-[#554AE4] block text-center active:outline-none px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3   focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                >
                                    {isLoading ? (
                                        <AnimatedSVG className="w-full h-8" />
                                    ) : (
                                        <span className="w-24 truncate md:-w-max">
                                            {currentStep === 1 ? "Next" : "Sign up"}
                                        </span>
                                    )}
                                </button>
                            </div>
                            {currentStep === 1 ? (
                                <p className="text-sm text-grey-400 mt-2   items-start leading-5">
                                    By signing up, you agree to Faremit’s
                                    <Link
                                        className="font-medium ml-1 text-blue font-medium text-black  hover:no-underline"
                                        href="/privacy"
                                    >
                                        privacy
                                    </Link>
                                    ,
                                    <Link
                                        className="font-medium  text-gray-600 hover:und  hover:no-underline "
                                        href="/law"
                                    >
                                        <span className=" text-blue font-medium">
                                            patriot act disclosure
                                        </span>
                                    </Link>
                                    <Link
                                        className="font-medium  text-black  hover:no-underline "
                                        href="/Consent"
                                    >
                                        <span className="text-gray-800">and</span>
                                        <span className=" text-blue font-medium">
                                            ACH payment authorization
                                        </span>
                                    </Link>
                                </p>
                            ) : null}
                        </div>
                    </form>
                </div>
                <img
                    src={image}
                    alt="image"
                    className="absolute top-0 right-0 w-56 h-56 z-0 object-cover"
                />
            </div>
        </AuthLayout>
    );
};

export default RegistrationForm;
