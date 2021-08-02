import { combineReducers } from "redux";
import CartReducer from "./CartReducer/CartReducer";
import allProductReducer from "./AllProductsReducer/AllProducts";
const rootReducer = combineReducers({
    cart:CartReducer,
    allProducts:allProductReducer
})
export default rootReducer;