import React,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import {addTodoTest, completeTodoTest, setVisibilityFilterTest, VisibilityFiltersTest} from "../actions/todoActions";
import AddTodoTest from "../component/AddTodoTest";
import TodoListTest from "../component/TodoListTest";
import FooterTest from "../component/FootTest";

class TodoApp extends Component{
    render(){
        const {dispatch,visibleTodos,visableFilter} = this.props;
        return(<div>
            {console.dir(this.props)}
            <AddTodoTest
                onAddClick={text=>dispatch(addTodoTest(text))}
            />
            <TodoListTest
                todos={visibleTodos}
                onTodoClick={index=>dispatch(completeTodoTest(index))}
            />
            <FooterTest
                filter={visableFilter}
                onFilterChange={nextFilter=>dispatch(setVisibilityFilterTest(nextFilter))}
            />
        </div>);
    }
}

function selectTodos(todos, filter) {
    alert(filter)
    console.log(fil)
    switch (filter) {
        case VisibilityFiltersTest.SHOW_ALL:
            return todos;
        case VisibilityFiltersTest.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFiltersTest.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:return todos;
    }
}


function select(state) {
    return {
        visibleTodos:selectTodos(state.todos,state.visableFilter),
        visableFilter:state.visableFilter
    };
}

// function select(state) {
//     return {
//         visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//         visibilityFilter: state.visibilityFilter
//     };
// }

export default connect(select)(TodoApp);