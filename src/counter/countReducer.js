export function countReducer(state={count:0},action) {
    const count = state.count;
    switch (action.type){
        case "ADD":return{
            count:count+1
        }
        default:return state
    }
}