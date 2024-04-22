import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import Login from "../../pages/Login";
import Register from "../../pages/Register";

const ModalContainer = ({
    isOpen,
    size = "md",
    closeModal,
    setIsOpen,
    margin = "yes",
    handleLoginSuccess
}) => {
    const [appTheme, setAppTheme] = useState("light");

    const handleThemeChange = theme => {
        setAppTheme(theme);
    };
    let modalWidth = "w-full";
    if (size === "lg") {
        modalWidth = "w-4/6";
    }

    if (size === "xl") {
        modalWidth = "w-5/6";
    }

    if (size === "sm") {
        modalWidth = "w-2/6";
    }
    const [activeButton, setActiveButton] = useState("login");

    const handleButtonClick = button => {
        setActiveButton(button);
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                open={isOpen}
                onClose={closeModal}
                className="fixed flex items-center justify-center  drop-shadow-2xl inset-0 z-50 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen w-full px-2 md:px-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-70 backdrop-blur-lg backdrop-filter backdrop-saturate-150" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className={`relative ${modalWidth} mx-auto max-w-xl bg-white rounded ${
                                margin === "yes" ? "mb-5 mx-10" : ""
                            }`}
                        >
                            <div className="flex mx-2 mt-2 mb-4 rounded-md bg-gray-100 relative tabs">
                                <button
                                    className={`tabs-item relative z-10 py-1 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none ${
                                        appTheme === "light" ? "active" : ""
                                    }`}
                                    onClick={() => {
                                        handleThemeChange("light");
                                        handleButtonClick("login");
                                    }}
                                >
                                    login in
                                </button>
                                <button
                                    className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${
                                        appTheme === "system" ? "active" : ""
                                    }`}
                                    onClick={() => {
                                        handleThemeChange("system");
                                        handleButtonClick("signup");
                                    }}
                                >
                                    sign up
                                </button>

                                <span
                                    className={`tab-item-animate rounded-md bg-white ${
                                        appTheme === "system" ? "active" : ""
                                    }`}
                                ></span>
                            </div>
                            <div className="py-8 px-4 sm:px-6 lg:px-8">
                                {activeButton === "login" && (
                                    <Login
                                        closeModal={closeModal}
                                        setIsOpen={setIsOpen}
                                        handleSuccess={handleLoginSuccess} // Pass the callback function
                                    />
                                )}
                                {activeButton === "signup" && (
                                    <Register
                                        closeModal={closeModal}
                                        setIsOpen={setIsOpen}
                                        handleLoginSuccess={handleLoginSuccess} // Pass the callback function
                                        setactive={setActiveButton}
                                        handleThemeChange={handleThemeChange}
                                    />
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalContainer;
