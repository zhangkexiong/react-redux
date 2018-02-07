import React,{Component} from "react";
import {connect} from "react-redux";
import {add, remove} from "../actions/myAction";

class App extends Component{

    render(){
        const {text,addAction,removeAction} = this.props;
        return (<div>
            <h1>{alert(text)}</h1>
            <button onClick={addAction}>add action</button>
            <button onClick={removeAction}>remove action</button>
        </div>)
    }
}

/**
 * 将store中的数据绑定到组件props上
 * @param state 表示的是redux中的store
 * @returns {{text}} 表示将store中的text作为该组件的属性
 */
function mapStateToProps(state) {
    return {text:state.text}
}

function mapDispatchToProps(dispatch) {
    return {
        addAction:(text)=>dispatch(add(text)),
        removeAction:()=>dispatch(remove())
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
