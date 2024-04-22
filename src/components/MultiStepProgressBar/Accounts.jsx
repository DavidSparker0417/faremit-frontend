import React from "react";
import { useSelector } from "react-redux";

function Accounts() {
    const token = useSelector(state => state.Account);
    return (
        <div>
            {" "}
            <div className="h-full mt-6">
                <>
                    {token.accounts ? (
                        <div
                            className="grid overflow-scroll grid-cols-1 gap-6 mt-5 w-full"
                            key={token.account.id}
                        >
                            <div className="flex items-center justify-between cursor-pointer items-left border  relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                                    <div className="ml-3 mt-2 text-left">
                                        <p className="font-medium text-gray-800 mt-">
                                            {token.account.name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {token.account.mask} ({token.account.type})
                                        </p>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-10 ">No accounts found please add New one !!!.</p>
                    )}
                </>
            </div>
        </div>
    );
}

export default Accounts;
