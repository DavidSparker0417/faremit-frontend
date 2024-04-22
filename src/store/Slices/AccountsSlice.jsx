import { createSlice } from "@reduxjs/toolkit";

const AccountsSlice = createSlice({
    name: "Account",
    initialState: {}, // Initial state should be an empty object or an appropriate initial state for your account data
    reducers: {
        setAccounts: (state, action) => {
            // Update the state with the payload data
            return { ...state, ...action.payload };
        }
    }
});

export const { setAccounts } = AccountsSlice.actions;
export const AccountsReducer = AccountsSlice.reducer;
