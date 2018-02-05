import {reducer} from "../reducers";
import {createStore} from "redux";

export function getStore() {
    const store = createStore(reducer);
    return store;
}