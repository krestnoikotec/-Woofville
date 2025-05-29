import { createSlice } from "@reduxjs/toolkit";
import { fetchDogImages } from "@/redux/thunk/FetchDogsThunk.js";

const dogsSlice = createSlice({
    name: "dogs",
    initialState: {
        images: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDogImages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDogImages.fulfilled, (state, action) => {
                state.status = "succeeded"; // Змінено на "succeeded"
                state.images = action.payload;
            })
            .addCase(fetchDogImages.rejected, (state, action) => {
                state.status = "failed"; // Змінено на "failed"
                state.error = action.error.message;
            });
    },
});

export default dogsSlice.reducer;