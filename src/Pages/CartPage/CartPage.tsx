import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MdShoppingCart, MdLocalShipping, MdPayment, MdDone } from "react-icons/md";
import routes from "../../Routes/cartRoutes"
import { Route } from 'react-router-dom'
const CartPage = (props: RouteComponentProps) => {
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const [state,setState] = useState("state1")
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    // dispatch({type:"resetCart"})
    return (
        <div className="w-100" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            <div className="d-flex justify-content-around container w-100">
                <div className="text-center">{console.log(state)}
                    <MdShoppingCart style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>تایید سبد خرید</div>
                </div>
                <div style={{width: "60px", height: "2px", margin:"auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center">
                    <MdLocalShipping style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب آدرس و شیوه ارسال</div>
                </div>
                <div  style={{width: "60px", height: "2px", margin:"auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center">
                    <MdPayment style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>انتخاب روش پرداخت</div>
                </div>
                <div style={{width: "60px", height: "2px", margin:"auto 0", backgroundColor: "#019CA7" }}></div>
                <div className="text-center">
                    <MdDone style={{ width: "50px", height: "50px", color: "#019CA7" }} />
                    <div>اتمام سفارش</div>
                </div>
            </div>
            {
                routes.map((item,index) => {
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
    )
}
export default CartPage;