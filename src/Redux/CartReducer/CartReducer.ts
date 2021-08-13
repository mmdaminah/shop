import ICartProduct from "../../Interfaces/CartProduct";
interface IInitialState {
    cartProducts: ICartProduct[];
}
const initialState: IInitialState = {
    cartProducts: [],
};
const CartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "addProduct":
            let findItem = state.cartProducts.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.model === action.payload.model
            );
            if (action.payload.action === "decrease"){
                if(findItem && findItem?.count > 0)
                    findItem.count -= 1;
                if(findItem && findItem?.count === 0){
                    return {
                        ...state,
                        cartProducts:state.cartProducts.filter(
                            (item) =>   
                                item.id !== action.payload.id &&
                                item.model !== action.payload.model
                        )
                    }
                }
                else 
                    return {
                        ...state,
                        cartProducts:state.cartProducts
                    }
            }
            else if (action.payload.action === "increase"){
                if(findItem && findItem?.count >= 0)
                    findItem.count += 1;
                return {
                    ...state,
                    cartProducts:state.cartProducts
                }
            }
            else{
                if (findItem) findItem.count += 1;
                else {
                    findItem = action.payload;
                    findItem && (findItem.count = 1);
                }
            }
            return {
                ...state,
                cartProducts: [
                    ...state.cartProducts.filter(
                        (item) =>
                            !(
                                item.id === action.payload.id &&
                                item.model === action.payload.model
                            )
                    ),
                    findItem,
                ],
            };
        case "delteProduct":
            return {
                ...state,
                cartProducts: [...state.cartProducts.filter(
                        (item) =>
                            !(
                                item.id === action.payload.id &&
                                item.model === action.payload.model
                            )
                    )],
            };
        case 'resetCart':
            return initialState
        default:
            return state;
    }
};
export default CartReducer;
