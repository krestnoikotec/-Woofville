import { createSlice } from "@reduxjs/toolkit";

const likedDogsSlice = createSlice({
    name: "likedDogs",
    initialState: {},
    reducers: {
        setLike: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        addLike: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        removeLike: (state, action) => {
            delete state[action.payload];
        },
    }
});

export const { setLike, addLike, removeLike } = likedDogsSlice.actions;
export default likedDogsSlice.reducer;