import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from "./react-redux/stores/configureStore";
import App from "./react-redux/containers/App";
const stores = configureStore();
// console.log("initial state: ", store.getState());
//
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );
//
// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(removeCart());
//
// unsubscribe();

ReactDOM.render(
    <Provider store={stores}>
        <App />
    </Provider>
    , document.getElementById('root'));
