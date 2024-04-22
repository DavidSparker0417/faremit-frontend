/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { Header } from "../../../components";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import toast from "react-hot-toast";
import { useStellarDepositMutation } from "../../../services/stellarApi";

const DepositSummary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const transaction_id = location.state.transaction_id;
    const asset_code = location.state.asset_code;
    const token = location.state.token;
    const type = location.state.type;
    const fee = location.state.fee;
    // const callback = 'postmessage';
    const Hex = location.state.Hex;
    const amount = location.state.amount;
    const vendor_name = location.state.link_account_name;
    const vendor_accNumber = location.state.link_account_number;
    const vendor_bank = location.state.link_bank_name;
    const wallet_address = location.state.wallet_address;
    const bankName = location.state.bank_name;
    const account_number = location.state.account_number;

    const externalId = Math.floor(Math.random() * 9999999);
    const newAmount = amount;
    const fixedAmount = fee;

    let config = {
        withCredentials: true,
        origin: true,
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            transaction_id: transaction_id,
            asset_code: asset_code,
            amount: newAmount,
            amount_fee: fixedAmount,
            memo_type: "text",
            hashed: Hex,
            callback: "postmessage",
            externalId: externalId,
            account: `${account_number} ${bankName}`
        }
    };

    // Function to close the popup window
    function closePopup() {
        // Send a message to the opener window to indicate completion
        window.opener.postMessage("success", "*");

        // Close the popup window
        window.close();
    }

    const validateRequest = async () => {
        setIsLoading(true);
        console.log(
            `[DAVID] ------------validateRequest state = ${JSON.stringify(
                location?.state
            )}---------`
        );
        console.log(config.headers.Authorization);
        try {
            let data = await axios.get(
                `https://cryptoprince0207.online/sep24/transactions/${type}/interactive/complete`,
                config
            );
            if (data.status === 200) {
                window.location.replace(
                    `https://cryptoprince0207.online/sep24/transaction/more_info?id=${transaction_id}`
                );
            }
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    };

    const [stellarDeposit] = useStellarDepositMutation();

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            // const transact = await stellarDeposit({
            //   transaction: type,
            //   transaction_id,
            //   reference: externalId,
            //   asset_code,
            //   amount,
            //   fee,
            //   wallet_address,
            //   account_number,
            //   bankName,
            //   vendor_name,
            //   vendor_accNumber,
            //   vendor_bank,
            // }).unwrap();
            validateRequest();
            //toast.success(transact.message);
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    };

    return (
        <>
            {/* <Header cross="none" /> */}
            <div className="flex flex-col items-center justify-center space-y-8 w-[80%] mx-auto my-10">
                <div className="bg-white rounded px-10 py-8 space-y-5 w-96">
                    <div className="mx-auto w-[30%]">
                        <div className="bg-secondary text-white rounded-full p-4 inline-flex ">
                            <Logo width={40} height={40} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-black text-sm font-semibold">Transaction type</h1>
                        <p className="capitalize text-gray-600 font-medium text-sm">{type}</p>
                    </div>
                    <div>
                        <h1 className="text-black text-sm font-semibold">Transaction Id</h1>
                        <p className="capitalize text-gray-600 font-medium text-sm">
                            {transaction_id}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-black text-sm font-semibold">{type} Amount</h1>
                        <p className="capitalize text-gray-600 font-medium text-sm">
                            {newAmount} {asset_code}
                        </p>
                    </div>
                    {bankName !== null ? (
                        <div>
                            <h1 className="text-black text-sm font-semibold">Deposit Bank Name</h1>
                            <p className="text-gray-600 font-medium text-sm">{bankName}</p>
                        </div>
                    ) : (
                        ""
                    )}
                    {account_number !== null ? (
                        <div>
                            <h1 className="text-black text-sm font-semibold">
                                Deposit Account Number
                            </h1>
                            <p className="text-gray-600 font-medium text-sm">{account_number}</p>
                        </div>
                    ) : (
                        ""
                    )}
                    <div>
                        <h1 className="text-black text-sm font-semibold">Transaction Status</h1>
                        {type === "deposit" ? (
                            <p className="text-gray-600 font-medium text-sm md:text-sm">
                                Please confirm transaction request. Waiting for funds to be sent to
                                vendor account.
                            </p>
                        ) : (
                            <p className="text-gray-600 font-medium text-sm md:text-sm">
                                Please confirm transaction. We would make a bank deposit to the
                                account provided once TEST is released.
                            </p>
                        )}
                    </div>
                    <p className="text-black font-semibold text-center mt-3 text-sm md:text-sm"></p>
                </div>
                <div className="pt-6">
                    <button
                        className="bg-secondary px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                        onClick={onSubmit}
                    >
                        <span>Confirm</span>
                        {isLoading && <ImSpinner2 className="text-white animate-spin " />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default DepositSummary;

function Logo({ width, height }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 76 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.77051 26.9999L27.2313 48.4607L70.2288 5.53906"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
