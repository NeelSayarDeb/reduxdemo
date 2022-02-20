const reducer = (state=true, action) => {
    if(action.type === 'login'){
        return state = true
    } else if(action.type === 'logout'){
        return state = false
    } else {
        return state
    }
}

export default reducer