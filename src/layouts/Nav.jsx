/* eslint-disable no-unused-vars */
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../components/Logo/Logo";
import ViewModel from "../components/modal/EditUser";
import ModalContainer from "../components/modal/ModalContainer";
import { Container } from "../components/utils";
import { checkUser, logout, UserData } from "../helpers";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };
    const [isVisible, setIsVisible] = useState(false); // Initialize isVisible state

    const openModal = () => {
        setModalOpen(true);
    };

    const handleClick = e => {
        e.preventDefault();
        window.location.reload();
        logout(navigate);
    };
    const handleProfileClick = () => {
        setIsVisible(!isVisible); // Toggle the isVisible state
    };
    const user = UserData();
    const verificationStatus = user && user.id.verificationStatus;
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const offset = window.pageYOffset;
        setIsScrolled(offset > 50); // Set true if scrolled more than 50px
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={`text-gray-600 p-2 sm:p-0 text-base xl:text-lg font-medium  ${
                isScrolled ? "bg-white" : ""
            }  py-4 lg:py-[1.1rem] xl:py-6 fixed w-full z-50`}
        >
            <Container className="flex items-center justify-between py-2 xl:py-0">
                <Link to="/">
                    <Logo />
                </Link>
                {checkUser() ? (
                    <>
                        {/* <div className="space-x-4 xl:space-x-8 hidden md:block">
                            <Link
                                to="#personal"
                                className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                            >
                                Send money
                            </Link>
                            <Link
                                to="#business"
                                className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                            >
                                Transfer History
                            </Link>
                        </div> */}
                        <Menu>
                            <div className="relative">
                                {verificationStatus === false ? (
                                    <Menu.Button className="focus:outline-none">
                                        <img
                                            className="w-14 h-14 rounded-md"
                                            src="/images/unveriffied.jpeg"
                                            alt=""
                                        />
                                    </Menu.Button>
                                ) : (
                                    <div className="flex">
                                        <Menu.Button className="focus:outline-none">
                                            <img
                                                className="w-9 h-9 rounded-md"
                                                src="/images/veriffied.png"
                                                alt=""
                                            />
                                        </Menu.Button>
                                        {/* <div className="m-2">
                                            <Language />{" "}
                                        </div> */}
                                    </div>
                                )}

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items>
                                        <div className="absolute right-0 z-10 w-48 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow">
                                            <Menu.Item>
                                                <div
                                                    className="flex items-center cursor-pointer space-x-3 px-3 py-2.5 text-sm hover:text-purple-500"
                                                    onClick={handleProfileClick} // Add onClick handler to toggle visibility
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>
                                                    <span>Profile</span>
                                                </div>
                                            </Menu.Item>
                                            <hr />

                                            <Menu.Item>
                                                <button
                                                    className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500"
                                                    onClick={handleClick}
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                    </>
                ) : (
                    <div className="flex items-center space-x-3">
                        <div className="hidden md:flex flex-row z-50  items-center gap-10 w-max">
                            <Link
                                className="font-neue-haas-grotesk-display-pro text-base min-w-[68px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                                href="/"
                            >
                                Company
                            </Link>
                            <Link
                                className="font-neue-haas-grotesk-display-pro text-base min-w-[68px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                                href="/"
                            >
                                Get App{" "}
                            </Link>
                            <Link
                                className="font-neue-haas-grotesk-display-pro text-base min-w-[32px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                                href="/"
                            >
                                FAQ
                            </Link>
                            <button
                                className="flex justify-center bg-secondary items-center rounded-md w-[125px] h-10 font-bold shadow-sm bg-secondary-300 text-secondary-900"
                                // onClick={openModal}
                            >
                                <div className="flex flex-col justify-center items-center w-11 h-6">
                                    <Link
                                        className="font-inter text-sm whitespace-nowrap text-blue-900  text-opacity-100 leading-6"
                                        to="/Login"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex items-center px-2 justify-between">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <X onClick={toggleMenu} />
                    </div>

                    <div className="px-4 py-8 space-y-4 flex overflow-hidden z-50 flex-col">
                        {/* Add your navigation links here */}
                        <Link to="/contact" onClick={toggleMenu}>
                            Contact
                        </Link>
                        <Link
                            className="font-neue-haas-grotesk-display-pro text-base min-w-[68px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                            href="/"
                        >
                            Company
                        </Link>
                        <Link
                            className="font-neue-haas-grotesk-display-pro text-base min-w-[68px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                            href="/"
                        >
                            Get App{" "}
                        </Link>
                        <Link
                            className="font-neue-haas-grotesk-display-pro text-base min-w-[32px] whitespace-nowrap text-stone-700 text-opacity-100 leading-6 font-semibold"
                            href="/"
                        >
                            FAQ
                        </Link>
                        <button className="flex justify-center items-center rounded-md w-[125px] h-10 shadow-sm bg-secondary">
                            <div className="flex flex-col justify-center items-center w-11 h-6">
                                <Link
                                    className="font-inter text-sm whitespace-nowrap text-blue-900 text-opacity-100 leading-6 font-normal"
                                    href="/"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </button>

                        {/* <div className="m-2">
                            <Language />{" "}
                        </div> */}
                    </div>
                </div>
            </Container>
            <ViewModel isVisible={isVisible} setOpen={setIsVisible} />{" "}
            {/* Pass isVisible as a prop */}
        </nav>
    );
};

export default Nav;
