/* eslint-disable no-unused-vars */
import { useState } from "react";
import SumsubWebSdk from "@sumsub/websdk-react";

import VeriffKyc from "../../pages/VeriffKyc";
import "./PageTwo.css";

const PageTwo = ({ onButtonClick }) => {
    const [name, setname] = useState("");
    const defaultMessage = {
        name: [],
        phone: [],
        password: []
    };
    // const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [selectedCountry, setSelectedCountry] = useState("hi");
    const accessToken = "sbx:cFQA3acH53FWirjMx7tNlEMb.DUQOI9o4PqgNqLEv64841notwKDMq1m6";
    return (
        <main className="pt5 black-80 center">
            <form className="measure">
                <h2 className="text-xl">You information</h2>
                <p className="text-gray-300 mt-2">
                    You can always create another workspace later.lways create another workspace
                    later.
                </p>

                <div className="mt-14 flex items-center justify-center ">
                    <SumsubWebSdk
                        accessToken={accessToken}
                        updateAccessToken={() => console.log("updateAccessToken")}
                        expirationHandler={() => Promise.resolve(accessToken)}
                        config={{
                            lang: "ru-RU",
                            email: "abdishakuur@gmail.com",
                            phone: +23099032,
                            i18n: {
                                document: {
                                    subTitles: {
                                        IDENTITY: "Upload a document that proves your identity"
                                    }
                                }
                            },
                            onMessage: (type, payload) => {
                                console.log("WebSDK onMessage", type, payload);
                            },
                            uiConf: {
                                customCssStr:
                                    ":root {\n  --black: #000000;\n   --grey: #F5F5F5;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--grey);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}"
                            },
                            onError: error => {
                                console.error("WebSDK onError", error);
                            }
                        }}
                        options={{ addViewportTag: false, adaptIframeHeight: true }}
                        onMessage={(type, payload) => {
                            console.log("onMessage", type, payload);
                        }}
                        onError={data => console.log("onError", data)}
                    />
                </div>
            </form>
        </main>
    );
};

export default PageTwo;
