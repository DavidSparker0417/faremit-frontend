import axios from "axios"; // Import Axios
import React, { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useDispatch } from "react-redux";

import AnimatedSVG from "../../helpers/Animat";
import { setAccounts } from "../../store/Slices/AccountsSlice";

import Accounts from "./Accounts";

// eslint-disable-next-line no-unused-vars
const getOrg = async () => {
    const token_Api = localStorage.getItem("token");

    try {
        const response = await axios.post(
            "https://api.faremit.com/api/org",
            {},
            {
                // Empty object as request data
                headers: {
                    Authorization: `Bearer ${token_Api}`
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        return error;
    }
};

// eslint-disable-next-line no-unused-vars
let UserIdentity;
export const getUser = async () => {
    const token_External = await getOrg();
    const token_Api = localStorage.getItem("token");

    try {
        const response = await axios.post(
            "https://api.faremit.com/api/user",
            {},
            {
                headers: {
                    authorization_external: `${token_External}`,
                    Authorization: `Bearer ${token_Api}`
                }
            }
        );
        UserIdentity = response.data.identityId;
        return response.data.identityId;
    } catch (error) {
        return error;
    }
};

const fetchLinkToken = async () => {
    const token_Api = localStorage.getItem("token");

    try {
        const response = await axios.post(
            "https://api.faremit.com/api/create_link_token",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token_Api}`
                }
            }
        );

        return response.data.linkToken;
    } catch (error) {
        return error;
    }
};

export const PlaidLinkButton = () => {
    const dispatch = useDispatch();
    const [linkToken, setLinkToken] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // eslint-disable-next-line no-unused-vars
                const userToken = await getUser();
                const linkTokenResponse = await fetchLinkToken();

                setLinkToken(linkTokenResponse);

                // Now that you have both tokens, you can proceed with your logic.
                // ...
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: async (public_token, metadata) => {
            dispatch(setAccounts(metadata));
            const token_Api = localStorage.getItem("token");

            const data = {
                public_token: public_token,
                accountID: metadata.account_id
            };

            try {
                const response = await axios.post(
                    "https://api.faremit.com/api/processorToken",
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token_Api}`
                        }
                    }
                );
                return response.data;
            } catch (error) {}
        }
    });

    return (
        <>
            {ready ? (
                <button
                    onClick={() => open()}
                    type="button"
                    className="w-full mt-10 items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r from-[#554AE4] to-[#ff4501] hover:from-[#554AE4] hover:to-[#554AE4] block text-center duration-300 active:scale-100  hover:scale-95 scale-100 active:outline-none px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600  focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                >
                    <span>Connect Bank</span>
                </button>
            ) : (
                <button
                    type="button"
                    className="w-full cursor-not-allowed mt-10 items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r from-[#554AE4] to-[#ff4501] hover:from-[#554AE4] hover:to-[#554AE4] block text-center duration-300 active:scale-100  hover:scale-95 scale-100 active:outline-none px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600  focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                >
                    <AnimatedSVG className="w-full h-8" />
                </button>
            )}
            <Accounts />
        </>
    );
};

const EJS = window.FortressElementsJS;

export function Main() {
    const [ElementKYC, setElementKYC] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        const generateElementSessionJWT = async identityId => {
            const accessToken = await getOrg();

            try {
                const response = await axios.get(
                    `https://api.sandbox.fortressapi.com/api/trust/v1/identity-elements/${identityId}/jwt?element=kyc`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                );
                return response.data.jwt;
            } catch (error) {
                console.error("Error generating Element JWT:", error);
                throw error;
            }
        };
        const initializeElementKYC = async () => {
            const elementClient = EJS.createElementClient({
                elementName: EJS.ElementNames.KYC,

                onMessage: message => {
                    if (message.type === EJS.ElementMessageTypes.ELEMENT_STARTED) {
                        // handle action element started
                    }
                },
                theme: { primaryColor: "#290ed7", secondaryColor: "#CCC" },
                uiLabels: {
                    statusScreenButton: "Redirect to page"
                }
            });
            setElementKYC(elementClient);
            try {
                const identityId = await getUser(); // Get the user ID
                // Simulate a 2-second loading delay
                setTimeout(() => {
                    setIsLoading(false); // Set loading to false after 2 seconds
                }, 500);
                if (!identityId) {
                    window.location.reload();
                    const jwt = await generateElementSessionJWT(identityId); // Pass the user ID to the function
                    setJwt(jwt);
                } else {
                    const jwt = await generateElementSessionJWT(identityId); // Pass the user ID to the function
                    setJwt(jwt);
                }
            } catch (error) {
                console.error("Error generating Element JWT:", error);
            }
        };

        initializeElementKYC();

        return () => {
            if (ElementKYC) {
                ElementKYC.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (ElementKYC) {
            ElementKYC.done(({ status }) => {
                const token = localStorage.getItem("token");

                axios({
                    method: "PATCH",
                    url: "https://api.faremit.com/api/auth/verif/status",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {
                    if (response.status === 200) {
                        // toast("success", "Thanks your are veriffied");
                        window.location.reload(); // Reload the page
                        localStorage.setItem("token", response.data.token);
                    } else {
                        window.location.reload(); // Reload the page
                    }
                });
            });
        }
    }, [ElementKYC]);

    const handleElementKYCClick = () => {
        ElementKYC.run(jwt);
    };

    return (
        <>
            <button
                onClick={handleElementKYCClick}
                type="button"
                className={` 
                w-full mt-10 items-center justify-center space-x-3 transform-gpu hover:bg-white rounded-lg text-white bg-gradient-to-r from-[#554AE4] to-[#ff4501] hover:from-[#554AE4] hover:to-[#554AE4] block text-center duration-300 active:scale-100  hover:scale-95 scale-100 active:outline-none px-3
                 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600  focus:outline-none
                  focus:ring focus:border-indigo-500 focus:ring-indigo-500/50
                  ${isLoading && "cursor-not-allowed"}
                  `}
            >
                {isLoading ? (
                    // Show loading indicator for 2 seconds
                    <AnimatedSVG className="w-full h-8" />
                ) : (
                    <span>Verify Yourself</span>
                )}
            </button>
        </>
    );
}
