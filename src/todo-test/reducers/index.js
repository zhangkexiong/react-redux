import {todosTest} from "./todoTest";
import {combineReducers} from "redux";
import {visableFilterTest} from "./visableFilterTest";

const rootReducers = combineReducers({
    todos:todosTest,
    visableFilter:visableFilterTest
})
export default rootReducers;