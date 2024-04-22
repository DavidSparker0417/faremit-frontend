/* eslint-disable import/order */
import React, { useEffect, useState } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css"; // Import isValidNumber and format from libphonenumber-js
import "react-phone-number-input/style.css";
export const CitySelect = ({ selectedCountry, selectedCity, setSelectedCity, error }) => {
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        let newCityOptions = [""];

        switch (selectedCountry.label) {
            case "🇰🇪 Kenya":
                newCityOptions = ["Nairobi", "Mombasa", "Kisumu"];
                break;
            case "🇬🇭 Ghana":
                newCityOptions = ["Accra", "Kumasi", "Tamale"];
                break;
            case "Uganda":
                newCityOptions = ["Kampala", "Entebbe", "Gulu"];
                break;
            case "🇪🇹 Ethiopia":
                newCityOptions = ["Addis Ababa", "Dire Dawa", "Mekelle"];
                break;
            case "🇺🇬 Uganda":
                newCityOptions = ["Kampala", "Nansana", "Kira"];
                break;
            case "🇸🇴 Somalia":
                newCityOptions = ["Mogadishu", "Hargeisa", "Kismayo"];
                break;
            default:
                break;
        }

        setCityOptions(newCityOptions);
        setSelectedCity(null); // Reset selected city when country changes
    }, [selectedCountry]);

    const handleCityChange = selectedOption => {
        setSelectedCity(selectedOption);
    };

    const selectClassName = error ? "border-red-300" : "border-gray-300";

    return (
        <Select
            options={cityOptions.map(city => ({ value: city, label: city }))}
            value={selectedCity}
            className={`${selectClassName} focus:border-indigo-500 focus:ring-indigo-500/20`}
            onChange={handleCityChange}
        />
    );
};
export const CountrySelect = ({ selectedCountry, setSelectedCountry, error, SendingCountries }) => {
    const [countries, setCountries] = useState([
        {
            name: "Canada",
            code: "+1",
            flag: "https://hatscripts.github.io/circle-flags/flags/ca.svg"
        }
    ]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then(response => response.json())
            .then(data => {
                const allowedCountries = data.countries.filter(country => {
                    const countryName = country.value;
                    return SendingCountries.includes(countryName);
                });
                setCountries(allowedCountries);
                if (!selectedCountry && allowedCountries.length > 0) {
                    setSelectedCountry(allowedCountries[0]);
                }
            })
            .catch(error => {
                // Handle any errors if needed
                console.error("Error fetching countries:", error);
            })
            .finally(() => {
                // Set loading to false regardless of success or failure
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? ( // Display loading indicator
                <p>Loading...</p>
            ) : (
                <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={selectedOption => setSelectedCountry(selectedOption)}
                    className={`${
                        error ? "border-red-300" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-indigo-500/20`}
                />
            )}
        </div>
    );
};
export const PhoneNumberInput = ({ selectedCountry, phoneNumber, setPhoneNumber }) => {
    const con = selectedCountry ? selectedCountry.value.toLowerCase() : "";

    const validatePhoneNumber = number => {
        // Replace this with your validation logic based on the selected country
        // You can use regular expressions or country-specific validation rules
        // For a basic example, you can check if the number is not empty
        return number.trim() !== "";
    };

    const handlePhoneNumberChange = value => {
        // Validate the phone number before updating the state
        if (validatePhoneNumber(value, con)) {
            setPhoneNumber(value);
        }
    };

    // Format the phone number with the country code for display

    return (
        <>
            <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
        </>
    );
};
export const PhoneNumberInput1 = ({ selectedCountry, setPhoneNumber, setValue }) => {
    const con = selectedCountry ? selectedCountry.value.toUpperCase() : "";

    const handlePhoneInputChange = newValue => {
        if (typeof newValue === "string") {
        } else {
            // Handle cases where newValue is not a string
            console.error("Input is not a string");
        }
    };
    return (
        <>
            <PhoneInput
                placeholder="Enter phone number"
                defaultCountry={con}
                withCountryCallingCode
                countryCallingCodeEditable
                onChange={handlePhoneInputChange}
            />
        </>
    );
};

export function CountryDropdown({ selectedCountry, setSelectedCountry, countries }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCountrySelect = country => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    function Flag({ country, flagUrl }) {
        return (
            <div className="flex gap-2">
                <img src={flagUrl} alt={`${country} flag`} className="shrink-0 w-6 aspect-square" />
                <div className="my-auto">{country}</div>
            </div>
        );
    }

    // Set default country
    const defaultCountry = selectedCountry || countries[0]; // Use the first country as default if selectedCountry is not set

    return (
        <div className="relative mt-1">
            <div
                className="flex justify-between items-center p-3 w-full text-sm bg-white rounded-md border border-gray-300 cursor-pointer"
                onClick={toggleDropdown}
            >
                <Flag country={defaultCountry.name} flagUrl={defaultCountry.flag} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                    {countries.map(country => (
                        <div
                            key={country.code}
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleCountrySelect(country)}
                        >
                            <img
                                src={country.flag}
                                alt={`${country.name} flag`}
                                className="shrink-0 w-6 aspect-square"
                            />
                            <div>{country.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export function TextInput({ label, placeholder, handleChange, value }) {
    console.log(value);
    return (
        <div className="mt-2">
            <label className="text-sm text-gray-700 font-semibold">
                {label} <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
                <input
                    className={`transition-all duration-300 py-2.5 px-4 w-full 
                             border-secondary focus:border-indigo-500 focus:ring-indigo-500/20
                             rounded-md text-sm placeholder-gray-400 focus:ring`}
                    value={value}
                    name={label.toLowerCase()} // Use label directly
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export function PhoneInput({ selectedCountry, handleChange, value }) {
    console.log(value);
    return (
        <div className="flex flex-col justify-center w-full text-sm bg-white rounded-md border border-secondary border-solid">
            <div className="flex gap-2">
                <div className="flex gap-2 whitespace-nowrap text-slate-900">
                    {" "}
                    <img
                        src={selectedCountry.flag}
                        alt=""
                        className="shrink-0 w-6 aspect-square"
                    />{" "}
                    <div className="my-auto">{selectedCountry.code}</div>
                </div>
                <div className="flex-1 my-auto text-gray-400">
                    <label htmlFor="phoneNumber" className="sr-only">
                        Enter phone number
                    </label>
                    <input
                        type="tel"
                        name="phone" // Update the name attribute to "phone"
                        placeholder="Enter phone number"
                        value={value.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
}
