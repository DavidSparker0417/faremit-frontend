import { createSlice } from "@reduxjs/toolkit";

const transferSlice = createSlice({
    name: "transfer",
    initialState: {
        amount: 0,
        recipient: "",
        token: ""
    },
    reducers: {
        setTransactionData: (state, action) => {
            state.amount = action.payload;
        },
        setRecipientData: (state, action) => {
            state.recipient = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setTransactionData, setRecipientData, setToken } = transferSlice.actions;
export const transferReducer = transferSlice.reducer;
