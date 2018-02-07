export const VisibilityFiltersTest = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_ACTIVE:"SHOW_ACTIVE",
    SHOW_COMPLETED:"SHOW_COMPLETE",
};
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export function addTodoTest(text) {
    return {
        type:ADD_TODO,
        text
    }
}

export function completeTodoTest(index) {
    return {
        type:COMPLETE_TODO,
        index
    }
}

export function setVisibilityFilterTest(filter) {
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}