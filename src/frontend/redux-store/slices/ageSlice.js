import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
    name: "ageSlice",
    initialState: {
        age: null,
    },
    reducers: {
        updateAge: (state, action) => {
            console.log("updateAge payload", action);
            state.age = action.payload;
        },
    }
});

export const {
    updateAge,
} = ageSlice.actions;

export default ageSlice.reducer;