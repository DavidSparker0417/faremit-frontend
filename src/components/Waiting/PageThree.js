import { WalletCardsIcon } from "lucide-react";
import React from "react";

const PageThree = ({ onButtonClick }) => {
    return (
        <main className="flex justify-center items-center pt-24 h-full bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                    {" "}
                    <WalletCardsIcon />
                    Coming Soon
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
                <div className="flex justify-center">
                    {/* You can add additional content like a countdown timer or subscribe form here */}
                </div>
            </div>
        </main>
    );
};

export default PageThree;
