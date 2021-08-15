import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MdShoppingCart, MdLocalShipping, MdPayment, MdDone } from "react-icons/md";
import routes from "../../Routes/cartRoutes"
import { Route } from 'react-router-dom'
import ICartProducts from '../../Interfaces/CartProduct'
import ICart from '../../Interfaces/CartInterface'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { createContext, useReducer } from 'react';
import CartInfoReducer from './CartInfoReducer';
import ICartInformation from '../../Interfaces/CartInformation';
export const context = createContext<any>({})
const CartPage = (props: RouteComponentProps) => {
    const [localState, localDispatch] = useReducer(CartInfoReducer, {
        cart: [],
        userInfo: {},
        postMethod: "",
        paymentMethod: "",
        paymentBank: ""
    })
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    const history = useHistory();
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const [state, setState] = useState([1, 0, 0, 0])
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    useEffect(() => {
        console.log(history.location.pathname)
        if (history.location.pathname === "/cart") {
            setState([1, 0, 0, 0])
        }
        else if (history.location.pathname === "/cart/verifyaddress") {
            setState([1, 1, 0, 0])
        }
        else if (history.location.pathname === "/cart/payment") {
            setState([1, 1, 1, 0])
        }
        else if (history.location.pathname === "/cart/verifypayment") {
            setState([1, 1, 1, 1])
        }
    }, [history.location.pathname])
    // dispatch({type:"resetCart"})
    return (
        <div className="w-100 bg-light" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            <div className="d-flex justify-content-around container w-100 bg-white p-2"
                style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px", position: "relative", top: "10px" }}
            >{console.log(localState)}
                <div className="text-center" style={{ opacity: `${state[0] ? 100 : 50}%` }}>
                    <MdShoppingCart style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>تایید سبد خرید</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{ opacity: `${state[1] ? 100 : 50}%` }}>
                    <MdLocalShipping style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب آدرس و شیوه ارسال</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{ opacity: `${state[2] ? 100 : 50}%` }}>
                    <MdPayment style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب روش پرداخت</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{ opacity: `${state[3] ? 100 : 50}%` }}>
                    <MdDone style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>اتمام سفارش</div>
                </div>
            </div>
            <context.Provider value={{ localState, localDispatch }}>
                <div className="container w-100 d-flex">
                    {
                        routes.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={"/cart" + item.path}
                                    exact={item.exact}
                                    render={(props) => <item.Component {...props} />}
                                />
                            )
                        })
                    }
                </div>
            </context.Provider>
        </div>
    )
}
export default CartPage;