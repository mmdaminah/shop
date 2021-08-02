import ICartProduct from '../Interfaces/CartProduct'
interface ICart {
    cart: {
        cartProducts: ICartProduct[]
    }
}
export default ICart;