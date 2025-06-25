import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    uid: null,
    displayName: null,
    isAuthenticated: false,
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {email, uid, displayName} = action.payload;
            state.email = email;
            state.uid = uid;
            state.displayName = displayName;
            state.isAuthenticated = !!action.payload;
        },
        logoutUser: (state) => {
            state.email = null;
            state.uid = null;
            state.displayName = null;
            state.isAuthenticated = false;
        }
    }
})

export const {setUser, logoutUser} = UserSlice.actions;
export default UserSlice.reducer;

