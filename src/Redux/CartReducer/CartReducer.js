const initialState = {
    cartProducts:[]
}
const CartReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'addProduct':
            return {
                ...state,
                cartProducts:[...state.cartProducts,action.payload]
            }
        default:
            return state;
    }
}
export default CartReducer;