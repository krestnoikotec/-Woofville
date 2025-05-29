import { combineReducers } from "redux";
import burgerSlice from "@/redux/slices/BurgerSlice.js";
import dogsSlice from "@/redux/slices/DogsSlice.js";
const rootReducer = combineReducers({
    burger: burgerSlice,
    dogs: dogsSlice,
})

export default rootReducer;