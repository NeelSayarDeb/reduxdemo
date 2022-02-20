import {combineReducers} from "redux"
import cartReducer from "./cartReducer"
import loginReducer from "./loginReducer"

const reducers = combineReducers({
    cart: cartReducer,
    loggedin :loginReducer
})

export default reducers