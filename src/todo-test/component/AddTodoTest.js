import * as React from "react";
import { findDOMNode } from 'react-dom';

export default class AddTodoTest extends React.Component{
    render(){
        return (<div>
            <input type='text' ref='input' />
            <button onClick={ e => this.handleClick(e) }>
                Add
            </button>
        </div>);
    }

    /**
     * 处理表单的点击事件
     * @param e
     */
    handleClick(e){
        const inputNode = findDOMNode(this.refs.input);
        const text = inputNode.value.trim();
        this.props.onAddClick(text);
        inputNode.value = '';
    }
}