/* eslint-disable no-unused-vars */
import { Dialog, Transition } from "@headlessui/react";
import { Locate, MailCheck, Phone, PhoneOutgoing, User, UserCircle, X } from "lucide-react";
import React, { Fragment } from "react";

import { checkUser } from "../../helpers";

const ViewModel = ({ isVisible, setOpen, size = "lg", margin = "yes" }) => {
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
    const user = checkUser();

    const data = user && user.id;
    // payment information json data
    const paymentInfo = [
        {
            name: "Payment Method",
            value: "   MasterCard 404"
        },
        {
            name: "Invoice Date",
            value: "   12/12/2020"
        },
        {
            name: "Due Date",
            value: "   12/12/2020"
        },
        {
            name: "Date Paid",
            value: "   12/12/2020"
        }
    ];
    //   contact information json data
    const contactInfo = [
        {
            name: "Name",
            value: "   John Doe",
            icon: <User className="text-blue-600 w-7" />
        },
        {
            name: "Phone",
            value: "   +1 (555) 555-5555",
            icon: <Phone className="text-blue-600 w-7" />
        },
        {
            name: "Address",
            value: "  Nairobi, Kenya",
            icon: <Locate className="text-blue-600 w-7" />
        },
        {
            name: "Email",
            value: "abdishakuuralimohamed@gmail.com",
            icon: <MailCheck className="text-blue-600 w-7" />
        }
    ];
    return (
        <Transition show={isVisible} as={Fragment}>
            <Dialog
                open={isVisible}
                onClose={setOpen}
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
                            className={`relative ${modalWidth} mx-auto w-full md:max-w-xl bg-white rounded ${
                                margin === "yes" ? "mb-5 mx-10" : ""
                            }`}
                        >
                            <form>
                                <div className="sticky top-0 flex z-50 overflow-hidden  shadow-md mb-2 items-center justify-between px-2 bg-gray-50 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7">
                                    <p className="text-base font-semibold ">Profile Information</p>
                                    <button
                                        className="  text-gray-500 focus:outline-none"
                                        onClick={() => setOpen(false)}
                                    >
                                        <X className="h-6 w-7" />
                                    </button>
                                </div>
                                <div className="space-y-12 mt-28 md:mt-0 px-4">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <div className="relative mt-2 w-full">
                                            {user && data.verificationStatus === false ? (
                                                <div className="flex  mb-3 space-x-2">
                                                    <img
                                                        className="w-14 h-14 rounded-md"
                                                        src="/images/unveriffied.jpeg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="p-2.5 mb-3 text-sm text-red-800 rounded-lg bg-red-50 "
                                                        role="alert"
                                                    >
                                                        <span className="font-medium">
                                                            Not Verefied!
                                                        </span>{" "}
                                                        Kindly verify your information to send money
                                                        immediately.
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex  mb-3 space-x-2">
                                                    <img
                                                        className="w-9 h-9 rounded-md"
                                                        src="/images/veriffied.png"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="p-2.5 mb-3 text-sm text-green-800 rounded-lg bg-green-50 "
                                                        role="alert"
                                                    >
                                                        <span className="font-medium">
                                                            Veriffied!
                                                        </span>{" "}
                                                        don't hasitate sending money with your loved
                                                        ones again.
                                                    </div>
                                                    {/* <div className="m-2">
                                            <Language />{" "}
                                        </div> */}
                                                </div>
                                            )}
                                        </div>

                                        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        value={user && data.name}
                                                        disabled
                                                        className="block w-full rounded-md  bg-gray-100  di border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    phone
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        disabled
                                                        value={user && data.phone}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Email address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        disabled
                                                        value={user && data.Email}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    disabled
                                                    value={user && data.country.label}
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <div className="col-span-full">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Street address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        disabled
                                                        value={user && data.address}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label
                                                    htmlFor="city"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    City
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        disabled
                                                        value={user && data.city}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label
                                                    htmlFor="postal-code"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    ZIP / Postal code
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        disabled
                                                        value={user && data.postalCode}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    disabled
                                    className="py-2.5 my-3 -ml-0 mx-4 text-center justify-center px-10 flex items-center w-full e shadow-lg transition-all
                                     max-w-full transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r from-[#ff4501] to-[#554AE4]
                                      hover:from-[#554AE4] hover:to-[#554AE4] hover:border-gray-400 scale-95   hover:scale-95 active:outline-none"
                                    // type="submit"
                                    // disabled={loading}
                                >
                                    <span className="w-max truncate md:-w-max">
                                        Coming soon....
                                    </span>
                                </button>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ViewModel;
