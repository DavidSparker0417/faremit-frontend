/* eslint-disable import/order */
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import "flag-icon-css/css/flag-icon.min.css";

import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "ar", "fr", "sw", "es"],
        fallbackLng: "en",
        debug: false,
        // Options for language detector
        detection: {
            order: ["path", "cookie", "htmlTag"],
            caches: ["cookie"]
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: "/assets/locales/{{lng}}/translation.json"
        }
    });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
            <Analytics />
        </PersistGate>
    </Provider>
);
reportWebVitals();
