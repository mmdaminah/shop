import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Button, Form } from 'react-bootstrap';
import { context } from '../CartPage'
import { useContext } from 'react';
import ICartProducts from '../../../Interfaces/CartProduct'
import ICart from '../../../Interfaces/CartInterface'
import { useSelector } from 'react-redux'
import axios from 'axios';
const PaymentMethod = (props: RouteComponentProps) => {
    const { localState, localDispatch } = useContext(context)
    const history = useHistory();
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const handleClick = ()=>{
        localDispatch({type:"payment",payload:payment})
        axios.post("/order",{
            ...localState,...payment
        })
        history.push("/cart/verifypayment")
    }
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    const [payment,setPayment] = useState({
        paymentMethod:"",
        paymentBank:""
    })
    const handleChange = (event: React.FormEvent)=>{
        const data = event.target as HTMLInputElement
        setPayment({...payment,[data.name]:data.value})
    }
    return (
        <div className="container w-100 d-flex">{console.log(payment)}
            <div className={`bg-light mt-4 p-3 ${windowWidth < 500 ? "w-100" : "w-75"}`}>
                <h4>روشهای پرداخت</h4>
                <div className="row d-flex justify-content-lg-between justify-content-center">
                    <div className="col-lg-5 bg-white p-4 mt-3"
                        style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                    >
                        <h5>انتخاب نوع پرداخت</h5>
                        <Form onChange={handleChange}>
                            <Form.Check name="paymentMethod" value="online" type="radio" id="default-radio" label="آنلاین" />
                            <Form.Check name="paymentMethod" value="cash" type="radio" id="default-radio" label="نقدی" />
                        </Form>
                    </div>
                    <div className="col-lg-6 bg-white p-4 mt-3"
                        style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                    >
                        <h5>انتخاب درگاه پرداخت</h5>
                        <Form onChange={handleChange}>
                            <Form.Check name="paymentBank" value="saman" type="radio" id="default-radio" label="درگاه بانک سامان" />
                            <Form.Check name="paymentBank" value="mellat" type="radio" id="default-radio" label="درگاه بانک ملت" />
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-3 bg-white w-100 p-4"
                        style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                    >
                        <label htmlFor="">کد تخفیف</label>
                        <div className="d-flex">
                            <Form.Control
                                className="bg-light"
                                style={{ borderRadius: "22px", border: "none" }}
                                type="text" placeholder="در صورت داشتن کد تخفیف آن را وارد کنید" />
                            <Button variant="outline-success" className="mx-4">اعمال</Button>
                        </div>
                    </div>
                </div>
                {
                    windowWidth < 500 &&
                    <Button className="w-100"
                        style={{
                            position: "sticky", left: "0", bottom: "12%",
                            backgroundColor: "#3BC9A7"
                        }}
                        onClick={handleClick}
                    >
                        پرداخت و ثبت نهایی
                    </Button>
                }
            </div>
            {
                windowWidth > 500 &&
                <div className="w-25 my-4 mx-1 bg-white"
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
                                style={{ fontSize: "small", backgroundColor: "#3BC9A7" }}
                                onClick={handleClick}
                                className="btn btn-success w-100">پرداخت و ثبت نهایی
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default PaymentMethod;