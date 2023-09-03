import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
    name: "customerSlice",
    initialState: {
        csData: [],
        flag: false
    },
    reducers: {
        storeCSData: (state, action) => {
            console.log("getCSData payload", action);
            state.csData = action.payload;
        },
        updateSubmitted: (state, action) => {
            console.log("updateSubmitted payload", action);
            state.flag = action.payload;
        }
    }
});

export const {
    storeCSData,
    updateSubmitted
} = customerSlice.actions;

export default customerSlice.reducer;