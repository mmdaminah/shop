import IProduct from './ProductInterface'
interface ICart {
    cart: {
        cartProducts: IProduct[]
    }
}
export default ICart;