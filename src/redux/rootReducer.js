import { combineReducers } from "redux";
import burgerSlice from "@/redux/slices/BurgerSlice.js";
import dogsSlice from "@/redux/slices/DogsSlice.js";
import openAuthSlice from "@/redux/slices/OpenAuthSlice.js";
const rootReducer = combineReducers({
    burger: burgerSlice,
    dogs: dogsSlice,
    openAuth: openAuthSlice,
})

export default rootReducer;