import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import australia from "./flags/australia.png";
import canada from "./flags/canada.png";
import england from "./flags/england.png";
import ethiopia from "./flags/ethiopia.png";
import Ghana from "./flags/Ghana.png";
import kenya from "./flags/kenya.png";
import norwey from "./flags/norwey.png";
import somalia from "./flags/somalia.png";
import uganda from "./flags/uganda.png";
import UnitedState from "./flags/UnitedState.png";
export const Input = ({
    id = "",
    type = "text",
    label = "",
    required = true,
    placeholder = "",
    value = "",
    disabled = false,
    large,
    error = [],
    onChange = () => {}
}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            {label && (
                <label htmlFor={id} className="text-sm text-Grey-900 font-semibold">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative">
                <input
                    id={id}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    className={`transition-all duration-300 ${
                        disabled ? "bg-gray-100" : ""
                    } mt-2 py-2.5 px-4 w-full ${
                        error.length
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                            : "border-secondary focus:border-indigo-500 focus:ring-indigo-500/20"
                    } rounded-md text-sm placeholder-gray-400 ${large && "py-20"} focus:ring ${
                        type === "password" ? " pr-10" : ""
                    }`}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                />

                {type === "password" && (
                    <>
                        {show ? (
                            <HiEye
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        ) : (
                            <HiEyeSlash
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        )}
                    </>
                )}

                {error.map((item, index) => (
                    <p key={index} className="text-primary text-sm mt-0.5">
                        {item}
                    </p>
                ))}
            </div>
        </>
    );
};
export const InputField = ({ label, type, name, value, onChange, placeholder, errors }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <label className="text-sm text-gray-700 font-semibold">
                {label} <span className="text-red-500">*</span>
            </label>

            <div className="relative">
                <input
                    className={`transition-all duration-300  mt-2 py-2.5 px-4 w-full 
                    ${
                        errors.length > 0
                            ? "border-primary focus:border-primary focus:ring-secondary-400-500/20"
                            : "border-secondary-200 focus:border-secondary-200 focus:ring-secoborder-secondary-400/20"
                    } 
                    rounded-md text-sm placeholder-gray-400 $ `}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {type === "password" && (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
};

export const Checkbox = ({ id = "", label = "" }) => {
    return (
        <label htmlFor={id} className="space-x-2 inline-block mr-2">
            <input
                id={id}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                type="checkbox"
            />
            <span className="text-sm cursor-pointer">{label}</span>
        </label>
    );
};

export const Select = ({
    id = "",
    label = "",
    required = true,
    options = [],
    value = "",
    disabled = false,
    error = [],
    onChange = () => {}
}) => {
    return (
        <>
            <label htmlFor={id} className="text-sm text-gray-700 font-semibold">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative overflow-hidden z-50">
                <select
                    id={id}
                    className={`transition-all duration-300 ${
                        disabled ? "bg-gray-100" : ""
                    } mt-2 py-2.5 px-4 w-full ${
                        error.length
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20"
                    } rounded-md text-sm placeholder-gray-400 focus:ring`}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {error.map((item, index) => (
                    <p key={index} className="text-red-400 text-sm mt-0.5">
                        {item}
                    </p>
                ))}
            </div>
        </>
    );
};

export const Selection = props => {
    const {
        currencyArr,
        title,
        selectedOption,
        handleChange,
        enteredValue,
        handleInput,
        readOnly,
        istwo
    } = props;
    const currencyToCountryCode = {
        KES: kenya, // Kenyan Shilling
        GHS: Ghana, // Ghanaian Cedi
        // ZMW: "ZM", // Zambian Kwacha
        UGX: uganda, // Ugandan Shilling
        ETB: ethiopia, // Ethiopian Birr
        SOS: somalia, // Somali Shilling
        USD: UnitedState, // United States Dollar
        CAD: canada, // Canadian Dollar
        GBP: england, // British Pound Sterling
        // EUR: "EU", // Euro
        AUD: australia, // Australian Dollar
        NOK: norwey // United Arab Emirates Dirham
    };
    const [searchInput, setSearchInput] = useState("");

    const filteredCurrencyArr = currencyArr.filter(item =>
        item.country.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
        <div className="flex space-x-3 space-y-6 items-center max-w-full">
            {/* input send */}
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-max h-full  md:px-5 rounded-xl bg-white border border-secondary">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 md:ml-1 flex-shrink-0 text-sm font-semibold text-left text-[#5c5676]">
                        {title}
                    </p>
                    <input
                        className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#001140] focus:outline-none ring-0 border-none placeholder:text-gray-600 focus:ring-0 hover:border-none focus:border-none"
                        type="text"
                        value={enteredValue}
                        onChange={handleInput}
                        placeholder="200"
                        readOnly={readOnly}
                    />
                </div>
                {/* open model of countries */}
                <div className="flex-1">
                    <Menu>
                        <div
                            className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative
                                  md:gap-3 md:pl-3 py-[23.5px] border-t-0 -ml-10 md:ml-0 border-r-0 border-b-0 border-l border-[#c7c4d4]"
                            style={{ zIndex: 10000000000 }}
                        >
                            <Menu.Button className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative md:gap-2 cursor-pointer">
                                <img
                                    className="md:w-[29px] w-[25px]  h-auto object-cover"
                                    src={currencyToCountryCode[selectedOption]}
                                    alt={selectedOption}
                                />
                                <p className="flex-grow-0 ml-1 flex-shrink-0 w-11 text-lg text-left text-[#140201] ">
                                    {selectedOption}
                                </p>
                            </Menu.Button>
                            <svg
                                width={10}
                                height={10}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`flex-grow-0 flex-shrink-0 -mt-1  relative transition-all duration-300 h-4 w-4`}
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
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items className="overflow-hidden z-50">
                                    <div
                                        className={`${
                                            istwo ? "-mt-20 h-max" : "h-max"
                                        } absolute md:right-28 right-0  top-10 z-50 px-2 py-1  w-[334px] md:w-96 h-64 overflow-scroll ov text-gray-600 bg-white border border-secondary rounded-md shadow`}
                                    >
                                        <form>
                                            <label
                                                for="default-search"
                                                class="mb-2 text-md font-medium text-secondary sr-only"
                                            >
                                                Search
                                            </label>
                                            <div class="relative">
                                                <div class="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <svg
                                                        class="w-4 h-4 text-gray-500 "
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                        />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="search"
                                                    onChange={e => setSearchInput(e.target.value)}
                                                    id="default-search"
                                                    class="block w-full p-2.5 ps-10 text-md text-gray-900 border border-secondary rounded-lg   focus:ring-0 outline-none"
                                                    placeholder="Search country"
                                                    required
                                                />
                                            </div>
                                        </form>
                                        {filteredCurrencyArr.map((item, index) => (
                                            <Menu.Item
                                                key={index}
                                                as={"button"}
                                                className="flex items-center hover:bg-gray-50 group rounded-lg w-full space-x-3 px-3 py-2 text-sm "
                                                onClick={() => handleChange(item.currency)}
                                            >
                                                <img
                                                    className="w-10  mt-2 h-auto object-cover"
                                                    src={item.image}
                                                />
                                                <span className="w-full ml-3 text-lg font-medium mt-2  text-left">
                                                    {item.country}
                                                </span>
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
};
