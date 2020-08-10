const initialState = {
    num: 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NUM':
            return {
                num: ++initialState.num 
            }
        default: 
            return state;
    } 
}
export default reducer;