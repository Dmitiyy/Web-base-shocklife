const initialState = {
    col: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COL':
            return {
                ...state,
                col: !initialState.col
            }
        default: 
            return state;
    } 
}
export default reducer;