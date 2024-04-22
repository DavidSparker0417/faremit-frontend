import * as React from "react";

function FastSecureReliableSection() {
    return (
        <section className="flex flex-col items-start p-20 font-medium bg-[#f9d9d9] max-md:px-5">
            <h2 className="mt-10 ml-11 text-5xl text-orange-600 leading-[63.84px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Fast, Secure and Reliable.
            </h2>
            <p className="mt-2 ml-11 text-xl tracking-wider leading-8 text-slate-700 max-md:max-w-full">
                Create an account in five easy steps via the web or mobile app.
            </p>
            <div className="flex gap-5 justify-between self-center mt-20 w-full max-w-[1196px] text-neutral-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <StepCard
                    stepNumber="01"
                    stepDescription="Create an account. It's quick and secure"
                    bgColor="bg-[#fd8b61cc]"
                />
                <StepCard
                    stepNumber="02"
                    stepDescription="Verify your details. Better security for everyone."
                    bgColor="bg-[#FE956ECC]"
                />
                <StepCard
                    stepNumber="03"
                    stepDescription="Add a recipient and a payment method."
                    bgColor="bg-[#f7b3b3CC]"
                />
                <StepCard
                    stepNumber="04"
                    stepDescription="Send money across the world."
                    bgColor="bg-[#ebacacCC]"
                />
                <StepCard
                    stepNumber="05"
                    stepDescription="Keep track of your transfers."
                    bgColor="bg-[#f2dbdb]"
                    hasShadow
                />
            </div>
        </section>
    );
}

function StepCard({ stepNumber, stepDescription, bgColor, hasShadow = false }) {
    return (
        <div className="flex flex-col justify-center">
            <div
                className={`flex flex-col items-start px-8 py-20 rounded-xl bg-opacity-80 max-md:px-5 ${bgColor} ${
                    hasShadow ? "shadow-sm" : ""
                }`}
            >
                <div className="mt-6 text-4xl max-md:mt-10 text-[#000000]">{stepNumber}</div>
                <p className="mt-14 mb-12 text-xl tracking-wide max-md:my-10 text-[#1d1d1d]">
                    {stepDescription}
                </p>
            </div>
        </div>
    );
}

export default function StepsComponent() {
    return (
        <main>
            <FastSecureReliableSection />
        </main>
    );
}
