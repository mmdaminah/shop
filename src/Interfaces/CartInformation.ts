import ICart from './CartProduct'
import IUser from './CartUserInterface'
interface ICartInformation {
    cart:ICart[],
    userInfo:IUser,
    postMethod:string,
    paymentMethod:string, 
    paymentBank:string
}
export default ICartInformation;