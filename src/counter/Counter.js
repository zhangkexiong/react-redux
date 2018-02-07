import React,{Component} from "react";
import {increaseAction} from "./countAction";
import {connect} from 'react-redux'
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction())
    }
}
Counter = connect(mapStateToProps,mapDispatchToProps)(Counter);
export default Counter;

