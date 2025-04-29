import { combineReducers } from "redux";
import burgerSlice from "./reducers/BurgerSlice.js";
const rootReducer = combineReducers({
    burger: burgerSlice,
})

export default rootReducer;