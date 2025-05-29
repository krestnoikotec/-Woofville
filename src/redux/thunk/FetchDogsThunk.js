import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDogImages = createAsyncThunk(
    "dogs/fetchImages",
    async ( { apiKey, limit } ) => {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${limit}&has_breeds=1&size=small`, {
            headers: {
                'x-api-key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error("Could not fetch images");
        }
        const data = await response.json();
        return data;
    }
)