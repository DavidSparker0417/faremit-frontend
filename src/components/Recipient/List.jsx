import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../helpers";
import { useGetRecipientsQuery } from "../../store/recipient";
import { setRecipientData } from "../../store/Slices/transferSlice";

function List({ onButtonClick }) {
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetRecipientsQuery();
    const recipients = data?.recipients; // Access recipients property safely using optional chaining
    const handleRecipientClick = recipient => {
        dispatch(setRecipientData(recipient?.firstName));
        onButtonClick("pagetwo");
    };
    if (error?.data?.message) {
        logout();
    }
    return (
        <div className="h-full mt-6">
            {isLoading ? (
                <div className="grid grid-cols-1 gap-6 mt-10 w-full">
                    <div className="card">
                        <div className="flex space-x-4">
                            <div className="h-12 w-12 rounded-full loading"></div>
                            <div className="flex-1">
                                <div className="h-6 w-36 loading mb-1"></div>
                                <div className="h-4 mb-1 loading"></div>
                                <div className="h-4 mb-1 loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <p>{error.data.message}</p>
            ) : (
                <>
                    {recipients && recipients.length > 0 ? (
                        recipients.map(recipient => (
                            <div
                                className="grid overflow-scroll grid-cols-1 gap-6 mt-5 w-full"
                                key={recipient._id}
                                onClick={() => handleRecipientClick(recipient)}
                            >
                                <div className="flex items-center justify-between cursor-pointer items-left border  relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                                        <div className="ml-3 mt-2 text-left">
                                            <p className="font-medium text-gray-800 mt-">
                                                {recipient.firstName}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {recipient.city} ({recipient.phoneNumber})
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
                        ))
                    ) : (
                        <p className="mt-10 ">No recipients found please add New one !!!.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default List;
