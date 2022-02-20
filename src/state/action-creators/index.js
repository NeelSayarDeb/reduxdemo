export const addCart = (amount) => {
    return (dispatch)=>{
        dispatch({
            type:"add",
            amount: amount
        })
    }
}

export const removeCart = (amount) => {
    return (dispatch)=>{
        dispatch({
            type:"remove",
            amount: amount
        })
    }
}