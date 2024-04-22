/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { USD } from "@assets/images";
import { useForm } from "react-hook-form";
//import { Header } from "@components";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import axios from "axios";
import { url, url2 } from "../../../api";

const initialState = {
    amount: "",
    wallet_address: ""
};

const StellarDeposit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [deposit, setDeposit] = useState(initialState);
    const [charge, setCharge] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const currencyArr = {
        USD: USD
    };

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setDeposit(prev => {
            return { ...prev, [name]: value };
        });
    };

    const search = useLocation().search;
    const transaction_id = new URLSearchParams(search).get("transaction_id");
    const asset_code = new URLSearchParams(search).get("asset_code");
    const transaction = new URLSearchParams(search).get("type");
    const token = new URLSearchParams(search).get("token");

    // Use Effect
    useEffect(() => {
        const charge = numCalc(deposit.amount);
        setCharge(charge.toFixed(2));
        setLimit(deposit.amount);
    }, [deposit.amount]);

    // Set Limit
    const setLimit = amount => {
        if (amount > 2000000) {
            deposit.amount = 2000000;
        }
    };

    // calculating fee
    const numCalc = numb => {
        if (numb < 5000) {
            return numb * 0.0;
        }
        if (numb >= 5000 && numb < 66000) {
            return numb * 0.01 + 55;
        }
        if (numb >= 66000 && numb < 220000) {
            return 700;
        }
        if (numb >= 220000) {
            return numb * 0.003;
        }
    };

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            // const { data } = await axios.get(
            //   `${url2}/user/wallet-validate?address=${deposit.wallet_address}`,
            // );
            navigate(
                // data.validWallet === null
                //   ? "/stellar/deposit/kyc"
                //   :
                "/stellar/proof-of-payment",
                {
                    state: {
                        type: transaction,
                        asset_code: asset_code,
                        transaction_id: transaction_id,
                        token: token,
                        fee: charge,
                        amount: deposit.amount,
                        wallet_address: deposit.wallet_address
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
            <div className="max-w-[80%] md:max-w-[70%] mx-auto mb-10 sm:px-12 ">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-primary text-xl md:text-4xl font-semibold">Deposit</h1>
                </div>
                <form className="space-y-6 mt-8">
                    <div className="space-y-1">
                        <p className="text-gray-500 text-lg">Enter Deposit Amount</p>
                        <div className="w-full bg-white rounded-md flex p-3">
                            <input
                                {...register("amount", { required: true })}
                                className="w-full bg-white text-lg text-gray-500 rounded-md placeholder-gray-400 outline-none"
                                type="number"
                                value={deposit.amount}
                                placeholder="5000.00"
                                onChange={handleChange}
                            />
                            <div className="flex items-center text-gray-500 font-normal text-lg space-x-3 mr-5">
                                <img
                                    className="w-9"
                                    src={currencyArr[asset_code]}
                                    alt="LINK Logo"
                                />
                                <p className="text-black">{asset_code}</p>
                            </div>
                        </div>
                        <p className="text-md lg:text-lg text-primary">Minimum amount: 20000</p>
                        {errors.amount && <p className="text-rose-600">This field is required</p>}
                    </div>
                    <div className=" bg-primary bg-opacity-10 text-lg text-primary font-medium py-2 px-3 rounded-md flex justify-between items-center">
                        <p>Fee</p>
                        <p>{charge}</p>
                    </div>
                    <div className="space-y-2 mt-2">
                        <p className="text-gray-500 text-lg">Wallet address</p>
                        <input
                            {...register("wallet_address", { required: true })}
                            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
                            placeholder="Enter wallet address"
                            value={deposit.wallet_address}
                            onChange={handleChange}
                        />
                        {errors.wallet_address && (
                            <p className="text-rose-600">This field is required</p>
                        )}
                    </div>

                    <div className="md:flex justify-center items-center pt-3">
                        {deposit.amount === "" ? (
                            <button
                                type="button"
                                className="bg-disabledAlt px-16 py-2 capitalize flex items-center justify-center space-x-2 w-full md:w-auto text-white font-normal text-xl mb-1 mr-6 rounded-md  active:ring ring-green-400 transition duration-200 ease-out cursor-pointer"
                                onClick={null}
                            >
                                <span>Continue</span>
                            </button>
                        ) : deposit.amount < 100 ? (
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
                            >
                                <span>Next</span>
                                {isLoading && <ImSpinner2 className="text-white animate-spin " />}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default StellarDeposit;
