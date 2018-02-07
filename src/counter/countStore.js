import {countReducer} from "./countReducer";
import {createStore} from "redux";

export function countStore() {
    return createStore(countReducer);
}