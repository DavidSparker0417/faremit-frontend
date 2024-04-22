/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import { BiCopy, BiArrowBack } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import toast from "react-hot-toast";
//import { Header } from '../../../components';
import { linkBankList } from "../../../libs/linkBanklist";
import { useEffect, useState } from "react";

const StellarDepositAccount = () => {
    const [account_name, setAccountName] = useState("");
    const [account_number, setAccountNumber] = useState("");
    const [bank_name, setBankName] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * linkBankList.length);
        const randomBankDetail = linkBankList[randomIndex];

        setAccountName(randomBankDetail.accountName);
        setAccountNumber(randomBankDetail.accountNumber);
        setBankName(randomBankDetail.bankName);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const asset_code = location.state.asset_code;
    const handleSubmit = () => {
        navigate("/stellar/deposit-status", {
            state: {
                link_account_name: account_name,
                link_account_number: account_number,
                link_bank_name: bank_name,
                ...location.state
            }
        });
    };

    const handleCopy = data => {
        navigator.clipboard.writeText(data);
        toast("✅ Copied to clipboard");
    };

    return (
        <>
            {/* <Header cross="none" /> */}
            <div className="max-w-[80%] md:max-w-[70%] mx-auto mb-10 sm:px-12 ">
                <div className="flex items-center justify-between mb-5">
                    <div
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-3 text-primary text-lg font-medium mb-3 cursor-pointer"
                    >
                        <BiArrowBack className="text-3xl" />
                    </div>
                    <h1 className="text-primary text-xl font-semibold">
                        Send {location.state.flag}
                    </h1>
                    <div
                        onClick={window.close}
                        className="flex items-center space-x-3 text-primary text-lg font-medium mb-3 cursor-pointer"
                    >
                        <span className="hidden md:block">Cancel</span>
                        {/* <CgClose className="text-2xl" /> */}
                    </div>
                </div>
                <div className="space-y-6">
                    <p className="text-black text-base">
                        Send the exact {asset_code} to the account below
                    </p>

                    <div className="space-y-4">
                        <div className="font-medium rounded-md flex justify-between items-center">
                            <p className="text-lg lg:text-xl text-gray-500">Account name</p>
                            <div className="flex space-x-3 items-center">
                                <p className="text-lg lg:text-xl font-medium text-black">
                                    {account_name}
                                </p>
                                <div onClick={() => handleCopy(account_name)}>
                                    <BiCopy className="text-primary text-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="font-medium rounded-md flex justify-between items-center">
                            <p className="text-lg lg:text-xl text-gray-500">Account number</p>

                            <div className="flex space-x-3 items-center">
                                <p className="text-lg lg:text-xl font-medium text-black">
                                    {account_number}
                                </p>
                                <div onClick={() => handleCopy(account_number)}>
                                    <BiCopy className="text-primary text-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="font-medium rounded-md flex justify-between items-center">
                            <p className="text-lg lg:text-xl text-gray-500">Bank name</p>
                            <div className="flex space-x-3 items-center">
                                <p className="text-lg lg:text-xl font-medium text-black">
                                    {bank_name}
                                </p>
                                <div onClick={() => handleCopy(bank_name)}>
                                    <BiCopy className="text-primary text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className=" bg-primary bg-opacity-10 text-lg text-primary font-medium py-2 px-3 rounded-md flex justify-between items-center">
                            <p>Amount to send:</p>
                            <p>
                                {location.state.amount} {asset_code}
                            </p>
                        </div>
                        <div className=" bg-primary bg-opacity-10 text-lg text-primary font-medium mt-0 py-2 px-3 rounded-md flex justify-between items-center">
                            <p>Merchant Fee:</p>
                            <p>
                                {location.state.fee} {asset_code}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5 pt-5">
                        <div className="flex items-center space-x-4">
                            <BsInfoCircle className="text-primary text-3xl lg:text-xl font-medium" />
                            <p className="text-primary text-sm font-medium">
                                Ensure to send the exact amount or your transaction will not be
                                processed
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <BsInfoCircle className="text-primary text-3xl lg:text-xl font-medium" />
                            <p className="text-primary text-sm font-medium">
                                Please do not add any crypto phrase or your transfer will not be be
                                processed.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex justify-center items-center pt-3">
                        <button
                            type="button"
                            className="bg-secondary px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                            onClick={handleSubmit}
                        >
                            <span>I've Paid</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StellarDepositAccount;
