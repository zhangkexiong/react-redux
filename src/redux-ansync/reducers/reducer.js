import {FAILURE, LOADING, SUCCESS} from "./status";
import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS} from "../actions/actionTypes";

export function weatherReducer(state= {status:LOADING},action){
    switch (action.type){
        case FETCH_START:return {status:LOADING}
        case FETCH_SUCCESS:return {...state,status:SUCCESS,...action.result}
        case FETCH_ERROR:return {status:FAILURE}
        default:return state;
    }
}