/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { BsCheck, BsChevronExpand, BsInfoCircle } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { url3 } from "../../../api";
//import { Header } from "../../../components";
import { bankList } from "../../../libs/bankList";

const initialState = {
    account_number: ""
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const StellarDepositPOP = () => {
    const [deposit, setDeposit] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState(bankList[0]);
    const [accountVerified, setAccountVerified] = useState(false);
    const [accNameCheck, setAccNameCheck] = useState("");

    const checkIDNumber = () => {
        if (deposit.account_number.length !== 10)
            setAccNameCheck("🚫 provide 10 digits of account number");

        if (deposit.account_number.length === 10) {
            setAccNameCheck("");
            handleCheckAccountNumber();
        }
    };

    useEffect(() => {
        checkIDNumber();
    }, [deposit.account_number]);

    const handleCheckAccountNumber = async () => {
        const loading = toast.loading("Verifying account");

        try {
            const { data } = await axios.get(
                `${url3}/account/verify-account-number?num=${deposit.account_number}&bank=${selected.bank_code}`
            );
            if (data.status === "success") {
                setAccountVerified(true);
                // setAccNameCheck("✅ account name retrieved");
                toast.success("Account Verified", { id: loading });
            } else {
                // setAccNameCheck(data.message);
                setAccountVerified(false);
                toast.error("Invalid account", { id: loading });
            }
        } catch (error) {
            // console.log(error);
            setAccountVerified(false);
            toast.error("Failed to verify account", { id: loading });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setDeposit(prev => {
            return { ...prev, [name]: value };
        });
    };
    const location = useLocation();

    const onSubmit = () => {
        setIsLoading(true);
        navigate("/stellar/deposit-account", {
            state: {
                bank_name: selected.bank_name,
                account_number: deposit.account_number,
                ...location.state
            }
        });
    };

    return (
        <>
            {/* <Header cross="none" /> */}
            <div className="max-w-[80%] md:max-w-[70%] mx-auto mb-10 sm:px-12 ">
                <div className="flex items-center justify-between mb-3">
                    <div
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-3 text-primary text-lg font-medium mb-3 cursor-pointer"
                    >
                        <BiArrowBack className="text-3xl" />
                    </div>
                    <h1 className="text-primary text-xl font-semibold">Deposit Account Used</h1>
                    <div
                        onClick={window.close}
                        className="flex items-center space-x-3 text-primary text-lg font-medium mb-3 cursor-pointer"
                    >
                        <span className="hidden md:block">Cancel</span>
                        {/* <CgClose className="text-2xl" /> */}
                    </div>
                </div>
                <p className="text-black text-base font-medium text-center">
                    Enter the account details used to make this transfer
                </p>
                <form className="space-y-6 mt-8">
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <p className="text-gray-500 text-lg">Bank name</p>
                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                    <>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-md border text-black  bg-white p-3 text-left text-base">
                                                <span className="flex items-center">
                                                    <span className="ml-3 block truncate">
                                                        {selected.bank_name}
                                                    </span>
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <BsChevronExpand
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {bankList.map((bank, index) => (
                                                        <Listbox.Option
                                                            key={index}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active
                                                                        ? "text-white bg-indigo-600"
                                                                        : "text-gray-900",
                                                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                )
                                                            }
                                                            value={bank}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <div className="flex items-center">
                                                                        <span
                                                                            className={classNames(
                                                                                selected
                                                                                    ? "font-semibold"
                                                                                    : "font-normal",
                                                                                "ml-3 block truncate"
                                                                            )}
                                                                        >
                                                                            {bank.bank_name}
                                                                        </span>
                                                                    </div>
                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active
                                                                                    ? "text-white"
                                                                                    : "text-indigo-600",
                                                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                            )}
                                                                        >
                                                                            <BsCheck
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <div className="space-y-2 mt-2">
                            <p className="text-gray-500 text-lg">Bank account number</p>
                            <input
                                {...register("account_number", { required: true })}
                                className="w-full bg-white text-lg text-gray-500 px-3 py-2 rounded-md placeholder-gray-400 outline-none"
                                placeholder="Enter bank account number"
                                maxLength="10"
                                type="tel"
                                onChange={handleChange}
                            />
                            {errors.account_number && (
                                <p className="text-rose-600">This field is required</p>
                            )}
                            <p className="text-gray-600">{accNameCheck}</p>
                        </div>
                        <div className="space-y-5 pt-5">
                            <div className="flex items-center space-x-4">
                                <BsInfoCircle className="text-primary text-4xl lg:text-xl font-medium" />
                                <p className="text-primary text-sm font-medium">
                                    All transfers should be done from account in your name, to avoid
                                    loss of funds.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center items-center pt-3">
                        {deposit.account_number === "" ? (
                            <button
                                type="button"
                                className="bg-disabledAlt px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                                onClick={null}
                            >
                                <span>Continue</span>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-secondary px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                                onClick={handleSubmit(onSubmit)}
                                // disabled={accountVerified === false ? true : false}
                            >
                                <span>Continue</span>
                                {isLoading && <ImSpinner2 className="text-white animate-spin " />}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default StellarDepositPOP;
