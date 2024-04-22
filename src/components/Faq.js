import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
const faqs = [
    {
        question: "How do I initiate a money transfer?",
        answer: "To initiate a money transfer, you can visit one of our branch locations, use our mobile app, or log in to our website. Follow the instructions to provide the recipient's details and complete the transfer."
    },
    {
        question: "What information do I need to send money?",
        answer: "You will typically need the recipient's full name, contact information, bank account details, and the amount you wish to send. Additional information may be required depending on the transfer method and destination."
    },
    {
        question: "How long does it take for a money transfer to be completed?",
        answer: "The time it takes to complete a money transfer can vary depending on the destination and transfer method. Some transfers can be completed within minutes, while others may take a few business days."
    },
    {
        question: "Are there fees associated with money transfers?",
        answer: "Yes, there are usually fees associated with money transfers. The fees can vary based on factors such as the transfer amount, destination, and the service you choose. It's important to check our fee schedule for accurate information."
    },
    {
        question: "Can I cancel a money transfer?",
        answer: "In most cases, money transfers cannot be canceled once initiated. However, if you believe there was an error or need assistance, please contact our customer support as soon as possible."
    }
];

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const handleToggle = index => {
        setSelected(selected === index ? null : index);
    };

    return (
        <div className="mt-2  bg-[#FFF5F1]">
            <div className="flex flex-col  space-y-1.5 items-left max-w-5xl mx-auto justify-center   ">
                <h1 className="text-5xl text-primary ">Beyond Transactions, Building Trust</h1>
                <p className="-mt-24 text-lg space-y-4">
                    Our dedicated support team is here to assist you every step of the way, with{" "}
                    <br />
                    whatever answer or guidance you need.
                </p>
            </div>

            <div className="mx-auto w-full max-w-screen-xl mt-3 px-2.5 md:px-20 my-20">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="p-3">
                        <img width={500} height={300} src="/images/frq.png" alt="" />
                    </div>
                    <div className="col-span-2 mt-1 px-3 sm:px-0">
                        {" "}
                        <h1 className="font-semibold">Frequently Asked Questions</h1>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-2">
                                <div
                                    className="cursor-pointer  gap-4 space-x-10 flex justify-between items-center border-b-secondary border-b"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h3 className="text-left text-lg mt-5 font-medium text-gray-500 ">
                                        {faq.question}
                                    </h3>
                                    <AnimatePresence>
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-6 w-6 transition-transform ${
                                                selected === index ? "transform rotate-40" : ""
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            key="answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d={
                                                    selected === index
                                                        ? "M19 9l-7 7-7-7"
                                                        : "M9 5l7 7-7 7"
                                                }
                                            />
                                        </motion.svg>
                                    </AnimatePresence>
                                </div>
                                <AnimatePresence>
                                    {selected === index && (
                                        <motion.div
                                            key="answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="py-4 border-b-gray-400">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
