/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsCheck, BsChevronExpand } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { url3 } from "../../../api";
// import Naira from '@assets/icons/naira.png';
//import { Header } from "@components";
import { bankList } from "@libs/bankList";
import { url, url2 } from "../../../api";

const initialState = {
    amount: "",
    wallet_address: "",
    account_name: "",
    account_number: "",
    fee: ""
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const StellarWithdraw = () => {
    const [withdraw, setWithdraw] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState(bankList[0]);
    const [charge, setCharge] = useState(0);
    const [fullName, setFullName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accNameCheck, setAccNameCheck] = useState("");

    const checkIDNumber = () => {
        if (accountNumber.length !== 10) setAccNameCheck("🚫 provide 10 digits of account number");
        setFullName("Hello");
        if (accountNumber.length === 10) {
            setAccNameCheck("");
            handleCheckAccountNumber();
        }
    };

    const handleCheckAccountNumber = async () => {
        const loading = toast.loading("Fetching account name...");

        try {
            const { data } = await axios.get(
                `${url3}/account/verify-account-number?num=${accountNumber}&bank=${selected.bank_code}`
            );
            if (data.status === "success") {
                setFullName(data.name);
                // setAccNameCheck("✅ account name retrieved");
                toast.success("Account name found", { id: loading });
            } else {
                // setAccNameCheck(data.message);
                toast.error("Account name invalid", { id: loading });
            }
        } catch (error) {
            // console.log(error);
            toast.error("Failed to get account name", { id: loading });
        }
    };

    useEffect(() => {
        checkIDNumber();
    }, [accountNumber]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setWithdraw(prev => {
            return { ...prev, [name]: value };
        });
    };

    const search = useLocation().search;
    const transaction_id = new URLSearchParams(search).get("transaction_id");
    const asset_code = new URLSearchParams(search).get("asset_code");
    const transaction = new URLSearchParams(search).get("type");
    const token = new URLSearchParams(search).get("token");
    const wallet = new URLSearchParams(search).get("wallet");

    // Use Effect
    useEffect(() => {
        const charge = numCalc(withdraw.amount);
        setCharge(charge);
        setLimit(withdraw.amount);
    }, [withdraw.amount]);

    // Set Limit
    const setLimit = amount => {
        if (amount > 5000000) {
            withdraw.amount = 5000000;
        }
    };

    // calculating fee
    const numCalc = numb => {
        if (numb < 5000) {
            return numb * 0.0;
        }
        if (numb >= 5000 && numb < 65000) {
            return numb * 0.01 + 110;
        }
        if (numb >= 65000) {
            return 760;
        }
        return 0;
    };

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            // const { data } = await axios.get(
            //   `${url2}/user/wallet-validate?address=${wallet}`,
            // );
            navigate(
                // data.validWallet === null
                //   ? "/stellar/withdraw/kyc"
                //   :
                "/stellar/withdraw-status",
                {
                    state: {
                        type: transaction,
                        asset_code: asset_code,
                        transaction_id: transaction_id,
                        token: token,
                        fee: charge,
                        amount: withdraw.amount,
                        wallet_address: wallet,
                        bank_name: selected.bank_name,
                        account_number: accountNumber,
                        // account_name: fullName [DAVID]
                        account_name: null
                        // Hex: data.HexValue,
                    }
                }
            );
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* <Header cross="none" /> */}
            <div className="max-w-[80%] md:max-w-[70%] mx-auto mb-10 sm:px-12 ">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-primary text-4xl font-medium">Withdraw</h1>
                </div>
                <form className="space-y-6 mt-8">
                    <div className="space-y-1">
                        <p className="text-gray-500 text-lg">Enter Amount</p>
                        <div className="w-full bg-white rounded-md flex p-3">
                            <input
                                {...register("amount", { required: true })}
                                className="w-full bg-white text-lg text-gray-500 rounded-md placeholder-gray-400 outline-none"
                                value={withdraw.amount}
                                type="number"
                                placeholder="5000.00"
                                onChange={handleChange}
                            />
                            <div className="mr-10 flex items-center text-gray-500 font-normal text-lg space-x-3">
                                {/* <img className="w-9" src={Naira} alt="LINK Logo" /> */}
                                <p className="text-black font-semibold">{asset_code}</p>
                            </div>
                        </div>
                        <p className="text-md lg:text-lg text-primary">Minimum amount: 10000</p>
                        {errors.amount && <p className="text-rose-600">This field is required</p>}
                    </div>
                    <div className=" bg-primary bg-opacity-10 text-lg text-primary font-medium py-2 px-3 rounded-md flex justify-between items-center">
                        <p>Fee</p>
                        <p>{charge}</p>
                    </div>
                    <p className="text-black text-2xl font-medium pt-4">
                        Recipient bank account details
                    </p>
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
                            <p className="text-gray-500 text-lg">Account number</p>
                            <input
                                type="tel"
                                maxLength="10"
                                className="w-full bg-white text-lg text-gray-500 px-3 py-2 rounded-md placeholder-gray-400 outline-none"
                                placeholder="Enter account number"
                                onChange={e => setAccountNumber(e.target.value)}
                                required
                                readOnly={selected.bank_name === "Select Bank" ? true : false}
                            />
                            <p className="text-gray-600">{accNameCheck}</p>
                        </div>
                        <div className="space-y-2 mt-2">
                            <p className="text-gray-500 text-lg">Account name</p>
                            <input
                                type="text"
                                className="w-full bg-white text-lg text-gray-500 px-3 py-2 rounded-md placeholder-gray-400 outline-none"
                                placeholder="Enter account name"
                                value={fullName}
                                readOnly
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex justify-center items-center pt-3">
                        {fullName === "" || withdraw.amount === "" ? (
                            <button
                                type="button"
                                className="bg-disabledAlt px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                                onClick={"#"}
                            >
                                <span>Continue</span>
                            </button>
                        ) : withdraw.amount < 100 ? (
                            <button
                                type="button"
                                disable={true}
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

export default StellarWithdraw;
