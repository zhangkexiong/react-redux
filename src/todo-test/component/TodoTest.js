import React,{Component} from "react";

export default class TodoTest extends Component{
    render(){
        const {onClick,completed,text} = this.props;
        return (<li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                cursor: completed ? 'default' : 'pointer'
            }}
        >
            {text}
        </li>)
    }
}