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
