import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const linkExcelApi = "https://lobster-app-whutt.ondigitalocean.app";
export const url2 = "https://octopus-app-5atot.ondigitalocean.app/api";
export const url = "http://cryptoprince0207.online/faremit_backend/api";
export const url3 = "https://jellyfish-app-wn3tf.ondigitalocean.app/api";

export const baseQuery = fetchBaseQuery({
    // baseUrl: url2,
    baseUrl: url,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth?.token;
        if (token) {
            headers.set("authorization", `Bearer: ${token}`);
        }
        return headers;
    }
});
