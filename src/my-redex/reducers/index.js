const initialState = {
    text: 'Hello'
}

export function reducer(state=initialState,action) {
    switch (action.type){
        case "ADD_CLICK": return{
            text:[state.text,action.text]
        }
        default:return state;
    }
}

