import {findDOMNode} from "react-dom";
import React, {Component, PropTypes} from "react";

export default class Add extends Component{
    render(){
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={ e => this.handleClick(e) }>
                    Add
                </button>
            </div>
        );
    }

    handleClick(e) {
        const inputNode = findDOMNode(this.refs.input);
        const text = inputNode.value.trim();
        this.props.onAddClick(text);
        inputNode.value = '';
    }
}


Add.propTypes = {
    onAddClick: PropTypes.func.isRequired
}