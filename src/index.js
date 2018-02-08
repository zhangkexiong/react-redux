import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connect, Provider} from 'react-redux'
import store from "./redux-ansync/stores/Stores"
import App from "./redux-ansync/container/App";
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



//定义组件
// class App extends Component{
//     render() {
//         const {text, onChangeText, onButtonClick} = this.props;
//         return (
//             <div>
//                 <h1 onClick={onChangeText}> {text} </h1>
//                 <button onClick={onButtonClick}>click me</button>
//             </div>
//         );
//     }
// }
//
//
// //action
// const changeTextAction = {
//     type:'CHANGE_TEXT'
// }
// const buttonClickAction = {
//     type:'BUTTON_CLICK'
// }
//
//
// //reducer
// const initialState = {
//     text: 'Hello'
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'CHANGE_TEXT':
//             return {
//                 text: state.text=='Hello' ? 'world':'Hello'
//             }
//         case 'BUTTON_CLICK':
//             return {
//                 text: 'Hello world'
//             }
//         default:
//             return initialState;
//     }
// }
//
// //store
// let store = createStore(reducer);
//
// //映射Redux state到组件的属性
// function mapStateToProps(state) {
//     return { text: state.text }
// }
//
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch){
//     return{
//         onButtonClick:()=>dispatch(buttonClickAction),
//         onChangeText:()=>dispatch(changeTextAction)
//     }
// }
//
// //连接组件
// App = connect(mapStateToProps, mapDispatchToProps)(App)
// let store = countStore();
// console.dir(store.getState());
// ReactDOM.render(
//     <Provider store={store}>
//         <Counter />
//     </Provider>, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
