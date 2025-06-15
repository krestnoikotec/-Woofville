import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
    name: "burger",
    initialState: {isBurgerOpen: false},
    reducers: {
        toggleBurger: (state) => {
            state.isBurgerOpen = !state.isBurgerOpen;
        },
    },
})

export const { toggleBurger} = burgerSlice.actions;
export default burgerSlice.reducer;