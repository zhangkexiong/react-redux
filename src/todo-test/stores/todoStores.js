import rootReducers from "../reducers";
import {createStore} from "redux";

export function todoStroe() {
    const store = createStore(rootReducers);
    return store;
}