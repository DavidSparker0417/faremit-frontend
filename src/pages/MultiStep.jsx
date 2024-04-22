/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import tachyons from "tachyons";

import MultiStepProgressBar from "../components/MultiStepProgressBar/MultiStepProgressBar";
import PageOne from "../components/Recipient/PageOne";
import PageTwo from "../components/Veriff/PageTwo";
import Nav from "../layouts/Nav";
import PageThree from "../components/Waiting/PageThree";

function MultiStep() {
    const [page, setPage] = useState("pageone");
    const amount = useSelector(state => state.transfer.amount);
    const recipient = useSelector(state => state.transfer.recipient);
    const token = useSelector(state => state.transfer.token);
    useEffect(() => {
        if (recipient && token) {
            setPage("pagethree");
        } else if (recipient) {
            setPage("pagetwo");
        } else if (!recipient || !token) {
            setPage("pageone");
        } else if (token) {
            setPage("pagethree");
        } else {
            setPage("pageone");
        }
    }, [amount, recipient, token]);

    const nextPage = page => {
        setPage(page);
    };

    const nextPageNumber = pageNumber => {
        switch (pageNumber) {
            case "1":
                if (recipient) {
                    setPage("pagetwo");
                } else {
                    setPage("pageone");
                }
                break;
            case "2":
                if (recipient && token) {
                    setPage("pagethree");
                } else if (recipient) {
                    setPage("pagetwo");
                } else {
                    setPage("pageone");
                }
                break;
            case "3":
                if (recipient && token && amount) {
                    setPage("pagethree");
                } else if (recipient && token) {
                    setPage("pagethree");
                } else if (recipient) {
                    setPage("pagetwo");
                } else {
                    setPage("pageone");
                }
                break;
            default:
                setPage("pageone");
        }
    };

    return (
        <>
            <Nav />
            <div className="flex flex-col  pt-24">
                <div className="text-center md:mt-5 py-14 flex items-center justify-center">
                    <div className="mt-10 shadow-lg px-5 pb-4 w-auto overflow-hidden max-h-[700px] overflow-y-auto">
                        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
                        {
                            {
                                pageone: <PageOne onButtonClick={nextPage} />,
                                pagetwo: <PageTwo onButtonClick={nextPage} />,
                                pagethree: <PageThree onButtonClick={nextPage} />
                            }[page]
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MultiStep;
