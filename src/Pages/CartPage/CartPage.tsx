import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import IProduct from '../../Interfaces/ProductInterface'
import ICart from '../../Interfaces/CartInterface'
import { Button } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
const CartPage = (props: RouteComponentProps) => {
    const cartItems = useSelector<ICart, IProduct[]>(state => state.cart.cartProducts)
    return (
        <div className="w-100" style={{ marginTop: "8rem" }}>
            <div className="container w-100 d-flex">
                <div className="w-75">
                    {
                        cartItems.map((item) => {
                            return (
                                <div className="row bg-light p-2 m-4 rounded">
                                    <div className="col-4 text-center">
                                        <img style={{ width: "200px", height: "200px" }} src={item.image} alt="" />
                                    </div>
                                    <div className="col-5 d-flex flex-column justify-content-around">
                                        <div>{item.model}</div>
                                        <div>
                                            <Button variant="success" size="sm">+</Button>
                                            <span className="mx-2">0</span>
                                            <Button variant="danger" size="sm">-</Button>
                                        </div>
                                    </div>
                                    <div className="col-3 py-4 d-flex flex-column justify-content-between">
                                        <div className="d-flex flex-row-reverse">
                                            <MdDelete style={{ width: "50px", height: "50px", color: "red" }} />
                                        </div>
                                        <div>
                                            <div>
                                                <span>قیمت واحد:</span>
                                                <strong><span className="text-success">{item.price}</span></strong>
                                            </div>
                                            <div>
                                                <span>قیمت کامل:</span>
                                                <strong><span className="text-success">{item.price}</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-25 m-4">
                    <div className="bg-light rounded p-3">
                        <div>
                            <h5>خلاصه فاکتور</h5>
                            <hr />
                        </div>
                        <div className="my-3">
                            <span>مجموع سبد خرید:</span>
                            <strong><span className="text-success">2133123</span></strong>
                        </div>
                        <div className="my-3">
                            <span>مجموع کل:</span>
                            <strong><span className="text-success">2133123</span></strong>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success w-75">تایید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartPage;