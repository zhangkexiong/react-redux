import {SET_VISIBILITY_FILTER, VisibilityFiltersTest} from "../actions/todoActions";


const { SHOW_ALL } = VisibilityFiltersTest;

export function visableFilterTest(state= SHOW_ALL,action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}