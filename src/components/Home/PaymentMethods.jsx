import * as React from "react";

const PaymentMethodCard = ({ title, description, imageSrc, bgColor }) => (
    <div className="flex flex-col grow justify-center max-md:mt-7">
        <div className={`flex flex-col px-6 py-10 ${bgColor}  rounded-xl max-md:px-5`}>
            <h3 className="text-2xl font-semibold tracking-wide leading-8 text-slate-900">
                {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
            <img
                src={imageSrc}
                alt={title}
                className="self-center mt-8 max-w-full aspect-square w-[120px]"
            />
        </div>
    </div>
);

const paymentMethods = [
    {
        title: "Debit Card",
        description:
            "Use your debit card to send money in a snap. It’s fast, secure, and straightforward.",
        bgColor: "bg-[#F5F4FD]",
        icon: "/images/debit-card.png", // replace with your actual icon path
        comingSoon: false
    },
    {
        title: "Bank Transfers",
        description:
            "Link your bank account and send money easily. It’s fast, secure, and straightforward",
        bgColor: "bg-[#D6D4F780]",
        icon: "/images/bank_transfer.png", // replace with your actual icon path
        comingSoon: true
    },
    {
        title: "Credit Card",
        description:
            "Use your credit card to send money in a snap. It’s fast, secure, and straightforward",
        bgColor: "bg-[#EEEDFC99]",
        icon: "/images/credit-card.png", // replace with your actual icon path
        comingSoon: false
    }
];
function PaymentMenthods() {
    return (
        <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <div className="flex flex-col items-center mt-10 w-full max-w-[1001px] max-md:max-w-full">
                <h2 className="justify-center py-2 text-5xl font-medium text-[#4b0082] rounded bg-[#ee82ee] bg-opacity-50 leading-[63.84px] max-md:max-w-full max-md:text-4xl">
                    Our payment methods
                </h2>
                <p className="mt-3 text-xl tracking-wider leading-8 text-center text-slate-700 max-md:max-w-full">
                    We are constantly working to introduce a variety of payment methods that are
                    perfectly suited to you, wherever you are, across the world.
                </p>
                <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {paymentMethods.map((method, index) => (
                            <div
                                key={index}
                                className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${method.bgColor}`}
                            >
                                <PaymentMethodCard
                                    title={method.title}
                                    description={method.description}
                                    imageSrc={method.icon}
                                    bgColor={method.bgColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentMenthods;
