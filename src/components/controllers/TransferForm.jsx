/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setTransactionData } from "../../store/Slices/transferSlice";
import ModalContainer from "../modal/ModalContainer";

import { Selection } from "./field";
import canada from "./flags/canada.png";
import kenya from "./flags/kenya.png";
import UnitedState from "./flags/UnitedState.png";

const TransferForm = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const handleLoginSuccess = () => {
        closeModal(); // Close the modal after successful login
    };
    const SendingCountries = [
        { currency: "KES", image: kenya, country: "Kenya" }
        // { currency: "GHS", image: Ghana, country: "Ghana" },
        // { currency: "ZMW", image: "ZM", country: "Zambia" },
        // { currency: "UGX", image: uganda, country: "Uganda" },
        // { currency: "ETB", image: ethiopia, country: "Ethiopia" }
        // { currency: "SOS", image: somalia, country: "Somalia" }
    ];

    const RecievingCountries = [
        { currency: "USD", image: UnitedState, country: "United States" },
        { currency: "CAD", image: canada, country: "Canada" }
        // { currency: "GBP", image: england, country: "United Kingdom" },
        // // { currency: "EUR", image: "EU", country: "European Union" },
        // { currency: "AUD", image: australia, country: "Australia" },
        // { currency: "NOK", image: norwey, country: "Norway" }
    ];

    const [selectedOption, setSelected] = useState("USD");
    const [enteredValue, setEntered] = useState(1);
    const [selectedCurrent, setCurrency] = useState("1.184192");
    const [oppositeOption, setOption] = useState("KES");
    const [findedValue, setFinded] = useState(0.23);
    const [charge, setCharge] = useState(0);
    const navigate = useNavigate();

    const calculate = (selected, opposite, entered) => {
        fetch(`http://localhost:3000/api/paircode/${selected}/${opposite}/${entered}`)
            // fetch(`https://api.faremit.com/api/paircode/${selected}/${opposite}/${entered}`)
            .then(res => res.json())
            .then(res => {
                const rate = res.conversion_rate.toFixed();
                const conversionResult = res.conversion_result;
                console.log(res);
                setCurrency(`${rate}`);

                // Calculate charge based on the selected currency
                let charge = selected === "USD" ? 4 : 2;
                setCharge(charge);

                // Set converted value from the server response
                setFinded(conversionResult.toFixed(2));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Handle the error appropriately in your application
            });
    };

    useEffect(() => {
        calculate(selectedOption, oppositeOption, enteredValue);
    }, [selectedOption, oppositeOption, enteredValue]);

    const handleChange = newOption => {
        setSelected(newOption);
    };

    const handleInput = e => {
        setEntered(e.target.value);
    };

    const handleOppositeChange = newOption => {
        setOption(newOption);
    };
    const handleSubmit = e => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (token) {
            setTimeout(() => {
                dispatch(setTransactionData(findedValue));
                navigate("/send");
            }, 100); // Delay of 1 second (1000 milliseconds)
        } else {
            navigate("/login");
        }
    };

    return (
        <div
            className="flex justify-center items-start w-full md:w-[481px] h-[508px]  relative gap-2 rounded-xl 
            
            "
        >
            {" "}
            <div className="flex overflow-hidden z-50 justify-center items-start w-full md:w-[461px] h-full relative gap-2 rounded-xl bg-white border border-secondary shadow-lg">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full absolute left-0 p-1.5 top-3 md:left-4 gap-3">
                    <Selection
                        currencyArr={RecievingCountries}
                        readOnly={false}
                        handleChange={handleChange}
                        selectedOption={selectedOption}
                        enteredValue={enteredValue}
                        handleInput={handleInput}
                        title="You send"
                        istwo={false}
                    />
                    <div className="flex justify-between cursor-not-allowed items-center flex-grow-0 flex-shrink-0 w-full  px-5 py-3 rounded-xl  border border-secondary">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#5c5676]">
                                Payment Method
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#001140]">
                                Bank Transfer
                            </p>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                            <svg
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M2.66666 6.5L7.99999 11.8333L13.3333 6.5"
                                    stroke="#001140"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col bg-secondary justify-start items-start flex-grow-0 flex-shrink-0 w-full n gap-5 px-5 py-3 rounded-xl">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 pl-4 border-t-0 border-r-0 border-b-0 border-l border-secondary">
                            <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4e4c54]">
                                    Fee
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#2e2b3b]">
                                    <span>{charge}%</span>{" "}
                                </p>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-4 h-4 absolute left-[-24px] top-0"
                                    preserveAspectRatio="none"
                                >
                                    <circle cx={8} cy={8} r={8} fill="#EEEDFC" />
                                    <path
                                        d="M4 8H12"
                                        stroke="#4E4C54"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 12V4"
                                        stroke="#4E4C54"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4e4c54]">
                                    Exhange rate
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#2e2b3b]">
                                    {selectedCurrent}
                                </p>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-4 h-4 absolute left-[-24px] top-0.5"
                                    preserveAspectRatio="none"
                                >
                                    <circle cx={8} cy={8} r={8} fill="#EEEDFC" />
                                    <rect
                                        x={4}
                                        y={6}
                                        width={9}
                                        height="1.5"
                                        rx="0.75"
                                        fill="#4E4C54"
                                    />
                                    <rect
                                        x={4}
                                        y="9.5"
                                        width={9}
                                        height="1.5"
                                        rx="0.75"
                                        fill="#4E4C54"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4e4c54]">
                                    Total Payable Amount
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#2e2b3b]">
                                    {findedValue}
                                </p>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-4 h-4 absolute left-[-24px] top-0.5"
                                    preserveAspectRatio="none"
                                >
                                    <circle cx={8} cy={8} r={8} fill="#EEEDFC" />
                                    <rect
                                        x={4}
                                        y={6}
                                        width={9}
                                        height="1.5"
                                        rx="0.75"
                                        fill="#4E4C54"
                                    />
                                    <rect
                                        x={4}
                                        y="9.5"
                                        width={9}
                                        height="1.5"
                                        rx="0.75"
                                        fill="#4E4C54"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-not-allowed">
                        <Selection
                            currencyArr={SendingCountries}
                            readOnly={true}
                            handleChange={handleOppositeChange}
                            selectedOption={oppositeOption}
                            enteredValue={findedValue}
                            title="Recipient gets                "
                            handleInput={e => {
                                setEntered(e.target.value);
                                calculate(selectedOption, oppositeOption, enteredValue);
                            }}
                            istwo={true}
                        />{" "}
                    </div>

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full   items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r bg-[#554AE4] text-secondary  hover:from-[#554AE4] hover:to-[#554AE4] block text-center active:outline-none px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3   focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                    >
                        {/* {loading && <Loader color={"white"} />} */}
                        <span className="text-2xl">get started </span>
                    </button>
                </div>{" "}
            </div>
            <img
                src="/images/Frame6.png"
                className="absolute h-96 w-96 left-0 right-0 top-24 z-0" // Set a lower z-index value
                alt=""
            />
            {/* You Send */}
            {/* NEW DESIGN */}
            {/* <ModalContainer
                isOpen={modalOpen}
                closeModal={closeModal}
                handleLoginSuccess={handleLoginSuccess} // Pass the callback function
                setIsOpen={setModalOpen}
            /> */}
        </div>
    );
};

export default TransferForm;
