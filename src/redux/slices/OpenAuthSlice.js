import { createSlice } from "@reduxjs/toolkit";

const openAuthSlice = createSlice({
    name: "openAuth",
    initialState: {isOpenAuth: false},
    reducers: {
        toggleOpenAuth: (state) => {
            state.isOpenAuth = !state.isOpenAuth;
        },
    },
})

export const { toggleOpenAuth } = openAuthSlice.actions;
export default openAuthSlice.reducer;