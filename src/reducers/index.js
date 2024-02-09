import courses from "./courses";
import enrolled from "./enrolled";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    courses,
    enrolled
})
