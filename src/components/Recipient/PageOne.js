/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import "./PageOne.css";
import { PrimaryButton } from "../controllers/buttons";
import { CitySelect, CountrySelect, PhoneNumberInput } from "../controllers/Countries";
import { Input } from "../controllers/field";
import { toast } from "../../helpers";
import { Loader } from "../utils";
import { useState } from "react";
import { useCreateRecipientMutation } from "../../store/recipient";
import List from "./List";
import { setRecipientData } from "../../store/Slices/transferSlice";
import { useDispatch } from "react-redux";
const PageOne = ({ onButtonClick }) => {
    const allowedCountries = ["KE", "GH", "UG", "ET", "SO"];

    const defaultMessage = {
        firstName: [],
        city: [],
        selectedCountry: [],
        phoneNumber: []
    };
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [city, setCity] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [error, setError] = useState("");
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [firstName, setfirstName] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleLoginError = error => {
        if (!error.data) {
            toast("error", "Network error");
            setError("Network error");
        } else if (error.data && error.data.message) {
            toast("error", error.data.message);
            setError(error.data.message);
        } else {
            toast("error", "Something went wrong");
            setError("Something went wrong");
        }
    };
    const [recipient, { isLoading, data, error: Error }] = useCreateRecipientMutation(); // destructure the mutation function

    const handleLogin = async event => {
        event.preventDefault();

        const newErrorMessage = { ...defaultMessage };
        if (!firstName) {
            setInvalid(true);
            newErrorMessage.firstName = ["This field is required"];
        }
        if (!firstName || !phoneNumber) {
            setErrorMessage(newErrorMessage);
            return;
        }
        try {
            if (!firstName || !city.value || !phoneNumber) {
                throw new Error("All fields are mandatory");
            }
            const response = await recipient({
                firstName,
                city: city.value,
                phoneNumber,
                selectedCountry: selectedCountry?.label
            }).unwrap();
            dispatch(setRecipientData(response?.firstName));
            window.location.reload();
            onButtonClick("pagetwo");
        } catch (error) {
            handleLoginError(error);
        }
    };
    const handleAddRecipient = () => {
        setShowForm(true);
    };
    return (
        <div className="container w-full max-w-lg min-w-full">
            <h2 className="text-xl mt-10">Select Receipient</h2>
            {/* list of registered recipients */}
            {showForm ? (
                <main className="pt3 black-80 center">
                    <form className="measure">
                        <p style={{ color: "#C0C0C0" }}>
                            Please provide us with your information below to become a recipient.
                            We're here to support you and address your needs.
                        </p>

                        <fieldset id="sign_up" className="ba mt-4 text-left b--transparent ph0 mh0">
                            <div className="mt3 space-y-4">
                                <div>
                                    <Input
                                        label={"Name"}
                                        id="FirstName"
                                        type="text"
                                        placeholder="Enter name"
                                        value={firstName}
                                        onChange={e => setfirstName(e.target.value)}
                                        error={errorMessage.firstName}
                                    />
                                </div>
                            </div>
                            <div className="mt3 space-y-2">
                                <label
                                    className="db lh-copy f6 mb1 font-bold"
                                    htmlFor="workspace-url"
                                    style={{ textAlign: "left" }}
                                >
                                    Country
                                </label>
                            </div>
                            <CountrySelect
                                setSelectedCountry={setSelectedCountry}
                                SendingCountries={allowedCountries}
                                error={errorMessage.selectedCountry}
                            />
                            <div className="mt3 space-y-2">
                                <label
                                    className="db lh-copy f6 font-bold"
                                    htmlFor="workspace-url"
                                    style={{ textAlign: "left" }}
                                >
                                    City
                                </label>
                                <CitySelect
                                    selectedCountry={selectedCountry}
                                    selectedCity={city}
                                    setSelectedCity={setCity}
                                    error={errorMessage.city}
                                />
                            </div>
                            <div className="mt3 space-y-2 w-full">
                                <label
                                    className="db lh-copy f6 font-bold"
                                    htmlFor="workspace-url"
                                    style={{ textAlign: "left" }}
                                >
                                    Phone Number
                                </label>
                                <PhoneNumberInput
                                    selectedCountry={selectedCountry}
                                    phoneNumber={phoneNumber}
                                    setPhoneNumber={setPhoneNumber}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <PrimaryButton onClick={handleLogin} disabled={isLoading}>
                                {isLoading && <Loader color={"white"} />}
                                <span>Continue</span>
                            </PrimaryButton>
                        </div>
                    </form>
                </main>
            ) : (
                <div className="measure pt3">
                    <p style={{ color: "#C0C0C0" }} className="mt-5">
                        Explore our comprehensive list of recipients and discover the individuals
                        who have benefited from our services.
                    </p>
                    <List onButtonClick={onButtonClick} />
                    <div className="mt-10">
                        <PrimaryButton onClick={handleAddRecipient}>
                            <span> Add New Recipient</span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageOne;
