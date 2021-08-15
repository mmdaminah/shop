import ICartInformation from "../../Interfaces/CartInformation";
const CartInfoReducer = (state:ICartInformation,action:any)=>{
    switch(action.type){
        case "addUserInfo":
            return {
                ...state,
                userInfo:action.payload.userInfo,
                postMethod:action.payload.postMethod
            }
        case "addCart":
            return {
                ...state,
                cart:action.payload
            }
        case "payment":
            return {
                ...state,
                paymentMethod:action.payload.paymentMethod,
                paymentBank:action.payload.paymentBank
            }
        default:
            return state
    }
}
export default CartInfoReducer;