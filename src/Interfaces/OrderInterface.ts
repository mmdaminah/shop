import ICartProducts from './CartProduct';
import IUser from './CartUserInterface'
interface IOrder {
    userInfo: IUser;
    postMethod: string;
    cart: ICartProducts[];
    paymentMethod: string;
    paymentBank: string;
}
export default IOrder;