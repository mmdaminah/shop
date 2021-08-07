import { combineReducers } from "redux";
import CartReducer from './CartReducer/CartReducer'
import allProductReducer from "./AllProductsReducer/AllProducts";
import UserReducer from "./UserReducer/userReducer";
const rootReducer = combineReducers({
    cart:CartReducer,
    allProducts:allProductReducer,
    User:UserReducer
})
export default rootReducer;