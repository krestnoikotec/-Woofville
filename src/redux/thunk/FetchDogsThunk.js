import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDogImages = createAsyncThunk(
    "dogs/fetchImages",
    async ( { apiKey, limit } ) => {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${limit}&has_breeds=1&size=small`, {
            headers: {
                'x-api-key': apiKey
            }
        });
        if (!response.ok) throw new Error("Could not fetch images");

        const data = await response.json();

        const trimmedData = data.map(image => ({
            id: image.id,
            url: image.url,
            breed: image.breeds && image.breeds.length > 0 ? {
                id: image.breeds[0].id,
                name: image.breeds[0].name,
                bred_for: image.breeds[0].bred_for,
                temperament: image.breeds[0].temperament,
                life_span: image.breeds[0].life_span,
                origin: image.breeds[0].origin
            } : null
        }));

        return trimmedData;
    }
)