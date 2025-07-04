import { combineReducers } from "redux";
import burgerSlice from "@/redux/slices/BurgerSlice.js";
import dogsSlice from "@/redux/slices/DogsSlice.js";
import openAuthSlice from "@/redux/slices/OpenAuthSlice.js";
import userSlice from "@/redux/slices/UserSlice.js";

const rootReducer = combineReducers({
    burger: burgerSlice,
    dogs: dogsSlice,
    openAuth: openAuthSlice,
    user: userSlice,
})

export default rootReducer;