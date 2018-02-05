import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';
import {addToCart} from "./actions/cart-actions";

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
