import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MdShoppingCart, MdLocalShipping, MdPayment, MdDone } from "react-icons/md";
import routes from "../../Routes/cartRoutes"
import { Route } from 'react-router-dom'
import ICartProducts from '../../Interfaces/CartProduct'
import ICart from '../../Interfaces/CartInterface'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
const CartPage = (props: RouteComponentProps) => {
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    const history = useHistory();
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const [state, setState] = useState([1,0,0,0])
    const [nextStep, setNextStep] = useState("")
    useEffect(()=>{
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    },[])
    useEffect(() => {
        console.log(history.location.pathname)
        if(history.location.pathname === "/cart"){
            setState([1,0,0,0])
            setNextStep("/cart/verifyaddress")
        }
        else if(history.location.pathname === "/cart/verifyaddress"){
            setState([1,1,0,0])
            setNextStep("/cart/payment")
        }
        else if(history.location.pathname === "/cart/payment"){
            setState([1,1,1,0])
        }
    }, [history.location.pathname])
    // dispatch({type:"resetCart"})
    return (
        <div className="w-100 bg-light" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            <div className="d-flex justify-content-around container w-100 bg-white p-2"
            style={{boxShadow:"0 5px 8px -3px rgb(0 0 0 / 10%)",borderRadius:"8px",position:"relative",top:"10px"}}
            >
                <div className="text-center" style={{opacity:`${state[0] ? 100 : 50 }%`}}>
                    <MdShoppingCart style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>تایید سبد خرید</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{opacity:`${state[1] ? 100 : 50 }%`}}>
                    <MdLocalShipping style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب آدرس و شیوه ارسال</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{opacity:`${state[2] ? 100 : 50 }%`}}>
                    <MdPayment style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب روش پرداخت</div>
                </div>
                <div style={{ width: "60px", height: "2px", margin: "auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center" style={{opacity:`${state[3] ? 100 : 50 }%`}}>
                    <MdDone style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>اتمام سفارش</div>
                </div>
            </div>
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
                {
                    windowWidth > 500 &&
                    <div className="w-25 m-4 bg-white" 
                    style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}>
                        <div className="rounded p-3">
                            <div>
                                <h5>خلاصه فاکتور</h5>
                                <hr />
                            </div>
                            <div className="my-3">
                                <span>مجموع سبد خرید:</span>
                                <strong><span className="text-success">
                                    {
                                        cartItems.reduce((accumulator: number, current: ICartProducts) => {
                                            return accumulator + (+current.price * current.count);
                                        }, 0)
                                    }
                                </span></strong>
                            </div>
                            <div className="my-3">
                                <span>مجموع کل:</span>
                                <strong>
                                    <span className="text-success">
                                        {
                                            cartItems.reduce((accumulator: number, current: ICartProducts) => {
                                                return accumulator + (+current.price * current.count);
                                            }, 0)
                                        }
                                    </span>
                                </strong>
                            </div>
                            <div className="text-center">
                                <button
                                    onClick={() => history.push(nextStep)}
                                    className="btn btn-success w-75">تایید</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default CartPage;