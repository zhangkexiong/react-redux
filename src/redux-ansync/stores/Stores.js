import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {weatherReducer} from "../reducers/reducer";
import thunkMiddleware from 'redux-thunk';
const reducer = combineReducers({
    weatherDate:weatherReducer
})
// const win = window;
// win.Perf = Perf
const middlewares = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }
const storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers);
