import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "../api";

export const stellarApi = createApi({
    reducerPath: "stellarApi",
    baseQuery,
    endpoints: builder => ({
        StellarWithdraw: builder.mutation({
            query: details => ({
                url: `/stellar/withdraw/`,
                method: "POST",
                body: { ...details }
            })
        }),
        stellarDeposit: builder.mutation({
            query: details => ({
                url: `/stellar/deposit/`,
                method: "POST",
                body: { ...details }
            })
        })
    })
});

export const { useStellarDepositMutation, useStellarWithdrawMutation } = stellarApi;
