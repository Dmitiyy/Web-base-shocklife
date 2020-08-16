const initialState = {
    name: '',
    email: '',
    phone: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HAN':
            const target = action.payload
            return {
                ...state,
                name: target
            }
        case 'HAE':
            const target2 = action.payload
            return {
                ...state,
                email: target2
            }
        case 'HAP':
            const target3 = action.payload
            return {
                ...state,
                phone: target3
            }
        case 'CLE':
            return {
                name: '',
                email: '',
                phone: ''
            }
        default: 
            return state;
    } 
}
export default reducer;