import  {combineReducers} from "redux"
import { cartData } from "./reducer"
import { userData } from "./Auth/UserReducer"

export default combineReducers({
    cartData,
    userData
})