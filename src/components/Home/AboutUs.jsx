import React from "react";

function AboutUs() {
    return (
        <div className="relative bg-[#FFFBEB] p-2 md:p-4  max-w-screen h-full">
            <div className="  grid grid-cols-2 container   justify-between mx-auto max-w-7xl">
                <div className="space-y-10 col-span-2 md:col-span-1 md:p-24">
                    <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-[#fe5719]">
                        Bridging Dreams
                    </p>

                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 md:w-[513px] text-xl text-left text-[#2f4858]">
                            Faremit ensures a secure and protected transfer experience. We are
                            regulated by lorem ipsum dolor and we lorem ipsum dolor. Find out more
                            about how we secure your money..
                        </p>
                    </div>
                    <div className="flex  flex-grow-0 flex-shrink-0 relative gap-2">
                        <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#554adf]">
                            Our Security Policy
                        </p>
                        <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M5.94 13.28L10.2867 8.93333C10.8 8.42 10.8 7.58 10.2867 7.06667L5.94 2.72"
                                stroke="#554ADF"
                                stroke-width={2}
                                stroke-miterlimit={10}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <div className=" mt-3 col-span-2 md:col-span-1 w-full h-auto bg-gray-100 rounded-xl">
                    <img
                        className="w-full h-full  md:p-5  rounded-tl-xl rounded-br-xl"
                        src="/images/rectangle-49.png"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 container mt-3 md:mt-32   justify-between mx-auto max-w-7xl">
                <div className="w-full col-span-2 md:col-span-1    h-auto bg-gray-100 rounded-xl">
                    <img
                        className="w-full h-full  md:p-5  rounded-tl-xl rounded-br-xl"
                        src="/images/image-3.png"
                    />
                </div>
                <div className="space-y-10 mt-3 md:p-24 col-span-2 md:col-span-1">
                    <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-[#fe5719]">
                        Bridging Dreams
                    </p>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 md:w-[513px] text-xl text-left text-[#2f4858]">
                            We offer the best exchange rates for you to transfer funds to your loved
                            ones, manage payments for your small business and oversee your global
                            finances. With Faremit, we provide you with boundless possibilities.
                        </p>
                    </div>
                    <div className="flex  flex-grow-0 flex-shrink-0 relative gap-2">
                        <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#554adf]">
                            Our Security Policy
                        </p>
                        <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M5.94 13.28L10.2867 8.93333C10.8 8.42 10.8 7.58 10.2867 7.06667L5.94 2.72"
                                stroke="#554ADF"
                                stroke-width={2}
                                stroke-miterlimit={10}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <img
                src="/images/AnimationFrame.png"
                className="w-[435.88px] hidden md:flex h-[435.88px] absolute left-1/3 top-96 rounded-[480px] object-cover"
            />
        </div>
    );
}

export default AboutUs;
