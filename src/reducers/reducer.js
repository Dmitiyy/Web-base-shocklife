const initialState = {
    col: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACT':
            return {
                col: !state.col
            }
        default: 
            return state;
    } 
}
export default reducer;