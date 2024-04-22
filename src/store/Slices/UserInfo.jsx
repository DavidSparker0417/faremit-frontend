import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "User",
    initialState: {},
    reducers: {
        setUserData: (state, action) => {
            state.amount = action.payload;
        }
    }
});

export const { setUserData } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
