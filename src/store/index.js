/* eslint-disable no-unused-vars */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // or "redux-persist/lib/localStorage" for localStorage

import { checkUser } from "../helpers";

import { AccountsReducer } from "./Slices/AccountsSlice";
import { transferReducer } from "./Slices/transferSlice";
import { UserReducer } from "./Slices/UserInfo";
import { stellarApi } from "../services/stellarApi";

export const Rootapi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/",
        // baseUrl: "https://api.faremit.com/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({})
});

const appReducer = combineReducers({
    [Rootapi.reducerPath]: Rootapi.reducer,
    [stellarApi.reducerPath]: stellarApi.reducer,
    transfer: transferReducer,
    User: UserReducer,
    Account: AccountsReducer
    // ... other reducers
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["transfer", "User", "Account"] // include only the "transfer" reducer
};

const rootReducer = (state, action) => {
    if (!checkUser()) {
        state = undefined;
    }
    return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(Rootapi.middleware, stellarApi.middleware)
    // devTools: false
});

export const persistor = persistStore(store);
