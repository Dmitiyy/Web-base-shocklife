const nameChange = (e) => {
    return {
        type: 'HAN',
        payload: e.target.value
    }
}
const emailChange = (e) => {
    return {
        type: 'HAE',
        payload: e.target.value
    }
}
const phoneChange = (e) => {
    return {
        type: 'HAP',
        payload: e.target.value
    }
}
const clear = () => {
    return {
        type: 'CLE'
    }
}
export {nameChange, emailChange, phoneChange, clear};