import React, {Component} from "react";
import TodoTest from "./TodoTest";

export default class TodoListTest extends Component {
    render() {
        return (
            <ul>
                {console.dir(this.props)}
                {
                    this.props.todos.map((todo, index) =>
                        <TodoTest
                            {...todo}
                            onClick={() => this.props.onTodoClick(index)}
                            key={index}
                        />
                    )
                }
            </ul>
        );
    }
}