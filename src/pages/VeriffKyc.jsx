/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Menu, Transition } from "@headlessui/react";
import { Veriff } from "@veriff/js-sdk";
import { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import { PrimaryButton } from "../components/controllers/buttons";

export default function VeriffKyc({ onButtonClick }) {
    const [veriff, setVeriff] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.veriff.me/incontext/js/v1/veriff.js";
        script.async = true;
        script.onload = () => {
            const v = Veriff({
                apiKey: "86b2c73d-5901-4c78-a8a3-1b9f99ff23c1",
                parentId: "veriff-root",
                onSession: (err, response) => {
                    console.log(response);
                    console.log(window.veriffSDK);
                    window.veriffSDK.createVeriffFrame({
                        url: response.verification.url,
                        onEvent: msg => {
                            onButtonClick("pagethree");
                        }
                    });
                }
            });
            v.setParams({
                vendorData: "7eb19312-79d6-11ec-90d6-0242ac120003"
            });
            setVeriff(v);
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="w-full">
            <div
                id="veriff-root"
                className="min-w-full"
                style={{
                    // marginLeft: "-165px",
                    minWidth: "480px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "full"
                }}
            ></div>
            {veriff && veriff.mount()}
        </div>
    );
}

const currenyArr = ["AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP"];

const Select = props => {
    const {
        currencyArr,
        title,
        selectedOption,
        handleChange,
        enteredValue,
        handleInput,
        readOnly
    } = props;

    return (
        <div className="rounded-lg mt-2 bg-indigo-50 p-4 lg:p-3">
            <div className="flex space-x-3 space-y-6 items-center">
                <div className="w-2/3 relative">
                    <h6 className="text-sm text-indigo-900">{title}</h6>
                    <input
                        type="number"
                        placeholder="0"
                        value={enteredValue}
                        onChange={handleInput}
                        readOnly={readOnly}
                        className="p-0 w-full bg-indigo-50 border-0 border-b-2 
                text-indigo-800 placeholder-indigo-900 border-gray-300 focus:border-indigo-800 placeholder-opacity-80 font-bold text-xl lg:text-2xl focus:ring-0"
                        // placeholder="0,000"
                    />
                </div>

                <Menu>
                    {({ open }) => (
                        <div className="relative w-1/4 md:w-1/3">
                            <Menu.Button className="w-full shadow-sm flex items-center space-x-2 justify-center text-indigo-900 bg-white py-3 md:py-4 rounded-lg text-lg uppercase font-semibold">
                                <span>{selectedOption}</span>
                                <HiChevronRight
                                    className={`transition-all duration-300 ${
                                        open ? "rotate-90" : ""
                                    } h-6 w-6`}
                                />
                            </Menu.Button>

                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items className="overflow-hidden">
                                    <div className="absolute right-0 z-50 px-2 py-1 mt-1 w-32 h-40 overflow-scroll ov text-gray-600 bg-white border rounded-md shadow">
                                        {currencyArr.map((item, index) => (
                                            <Menu.Item
                                                key={index}
                                                as={"button"}
                                                className="flex items-center space-x-3 px-3 py-2 text-sm hover:text-indigo-600"
                                                onClick={() => handleChange(item)}
                                            >
                                                <span className="w-14 text-md font-medium truncate text-left">
                                                    {item}
                                                </span>
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    )}
                </Menu>
            </div>
        </div>
    );
};

export function Calculator() {
    const [selectedOption, setSelected] = useState("AED");
    const [enteredValue, setEntered] = useState(1);
    const [selectedCurrent, setCurrency] = useState("1 EUR = 1.184192 USD");
    const [oppositeOption, setOption] = useState("EUR");
    const [findedValue, setFinded] = useState(0.23);
    const [charge, setCharge] = useState(0);
    const calculate = (selected, opposite, entered) => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${selected}`)
            .then(res => res.json())
            .then(res => {
                const rate = res.rates[opposite];
                setCurrency(`1 ${selected} = ${rate} ${opposite}`);

                // Calculate charge based on the selected currency
                switch (selected) {
                    case "AED":
                        setCharge(0.5);
                        break;
                    case "USD":
                        setCharge(0.1);
                        break;
                    case "EUR":
                        setCharge(0.2);
                        break;
                    case "GBP":
                        setCharge(0.3);
                        break;
                    case "AUD":
                        setCharge(0.04);
                        break;
                    case "CAD":
                        setCharge(0.25);
                        break;
                    case "CHF":
                        setCharge(0.06);
                        break;
                    case "CNY":
                        setCharge(0.07);
                        break;
                    default:
                        setCharge(0.0);
                        break;
                }

                // Calculate converted value including charges
                setFinded((entered * rate * (1 + charge / 100)).toFixed(2));
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

    const xchangeHandler = () => {
        const selected = selectedOption;
        const opposite = oppositeOption;

        calculate(selected, opposite, enteredValue);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            selectedOption,
            enteredValue,
            oppositeOption,
            findedValue
        };
        console.log(localStorage.setItem("transaction", JSON.stringify(data)));
    };

    return (
        <div className="container">
            {/* You Send */}
            <form onSubmit={handleSubmit}>
                <Select
                    currencyArr={currenyArr}
                    readOnly={false}
                    handleChange={handleChange}
                    selectedOption={selectedOption}
                    enteredValue={enteredValue}
                    handleInput={handleInput}
                    title="you send"
                />
                <div className="space-y-3 m-9 ml-3 lg:space-y-5 text-indigo-900">
                    {/* <div
                        className="flex items-center space-x-4 text-indigo-600 text-sm cursor-pointer"
                        onClick={xchangeHandler}
                    >
                        <IoMdSync className="w-5 h-5" />
                        <span>Reserve Currency</span>
                    </div> */}
                    <div className="flex items-center space-x-2 w-full">
                        {" "}
                        <span className="bg-gray-300 w-6 h-5 rounded-2xl flex items-center justify-center">
                            =
                        </span>
                        <div className="w-2/3">
                            <div className="rate">{selectedCurrent}</div>
                        </div>
                        <div className="w-1/2">Rate</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="bg-gray-300 w-6 h-5 rounded-2xl flex items-center justify-center">
                            +
                        </span>
                        <div className="w-1/2">
                            <span>{charge}</span>
                        </div>
                        <div className="w-1/2">Our fee</div>
                    </div>
                </div>
                {/* Recipient Gets */}
                <Select
                    currencyArr={currenyArr}
                    readOnly={true}
                    handleChange={handleOppositeChange}
                    selectedOption={oppositeOption}
                    enteredValue={findedValue}
                    title="Recipient gets                "
                    handleInput={e => {
                        setEntered(e.target.value);
                        calculate(selectedOption, oppositeOption, enteredValue);
                    }}
                />
                <Link to="/send">
                    <button
                        // onClick={submit}
                        type="submit"
                        className="w-full flex mt-10 items-center justify-center space-x-3 transition-all block text-center duration-300 px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                    >
                        {/* {loading && <Loader color={"white"} />} */}
                        <span>Get started</span>
                    </button>
                </Link>
            </form>
        </div>
    );
}
