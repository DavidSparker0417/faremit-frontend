import { Link } from "react-router-dom";
import { CheckSuccess } from "../../../assets/images/Images";

export const WithdrawSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-16 mt-20">
            <h1 className="text-slate-800 text-3xl md:text-5xl font-bold text-center">
                Sell request received
            </h1>
            <CheckSuccess width={200} height={200} />
            <p className="text-black text-base w-96 mx-auto text-center">
                When your asset has been received, a vendor will send currency to the bank account
                provided.
            </p>
            <div>
                <Link to="/user/dashboard">
                    <button className="bg-secondary rounded-md text-white text-lg py-3 px-8 w-72">
                        Done
                    </button>
                </Link>
            </div>
        </div>
    );
};
