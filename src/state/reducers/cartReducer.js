let initstate = 0
const reducer = (state=initstate, action) => {
    if(action.type === 'add'){
        return state + action.amount
    } else if(action.type === 'remove'){
        return state - action.amount
    } else {
        return state
    }
}

export default reducer