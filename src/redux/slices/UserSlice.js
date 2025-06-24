import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {email, uid, displayName} = action.payload;
            state.user = {email, uid, displayName};
            state.isAuthenticated = !!action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {setUser, logoutUser} = UserSlice.actions;
export default UserSlice.reducer;

