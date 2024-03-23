import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";

const reducers=combineReducers({
    authenticate:authenticateReducer,
})

export default reducers;