import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ICart from '../../../Interfaces/CartInterface'
import { Button, Modal } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import ICartProducts from '../../../Interfaces/CartProduct'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const CartView = (props: RouteComponentProps) => {
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    const history = useHistory();
    const dispatch = useDispatch()
    const [modalItem, setModalItem] = useState<ICartProducts>()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (item: ICartProducts) => {
        setModalItem(item)
        setShow(true);
    }
    const handleRemove = () => {
        modalItem && dispatch(
            { type: "delteProduct", payload: { id: modalItem.id, model: modalItem.model } })
        handleClose()
    }
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    // dispatch({type:"resetCart"})
    return (
        <div className="w-100" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            <div className="container w-100 d-flex">
                <div className={`${windowWidth < 500 ? "w-100" : "w-75"}`}>
                    {
                        cartItems.map((item) => {
                            return (
                                <div className="row bg-light p-2 m-4 rounded">
                                    <div className={`${windowWidth < 500 ? "col12" : "col-4"} 
                                    text-center`}>
                                        <img className="w-100" style={{ maxWidth: "150px" }} src={item.image} alt="" />
                                    </div>
                                    <div className={`${windowWidth < 500 ? "col12" : "col-4"} 
                                    d-flex flex-column justify-content-around my-2`}>
                                        <div className="text-center">{item.model}</div>
                                        <div className="text-center">
                                            <Button
                                                onClick={() => dispatch({ type: "addProduct", payload: { id: item.id, model: item.model, action: "increase" } })}
                                                variant="success" size="sm">+</Button>
                                            <span className="mx-2">{item.count}</span>
                                            <Button
                                                onClick={() => dispatch({ type: "addProduct", payload: { id: item.id, model: item.model, action: "decrease" } })}
                                                variant="danger" size="sm">-</Button>
                                        </div>
                                    </div>
                                    <div className={`${windowWidth < 500 ? "col12" : "col-4"} 
                                    py-4 d-flex flex-column justify-content-between align-items-center`}>
                                        <div className="d-flex flex-row-reverse">
                                            <MdDelete
                                                onClick={() => handleShow(item)}
                                                style={{ width: "50px", height: "50px", color: "red" }} />
                                        </div>
                                        <div>
                                            <div>
                                                <span>قیمت واحد:</span>
                                                <strong><span className="text-success">{item.price}</span></strong>
                                            </div>
                                            <div>
                                                <span>قیمت کامل:</span>
                                                <strong><span className="text-success">{+item.price * item.count}</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    windowWidth > 500 &&
                    <div className="w-25 m-4">
                        <div className="bg-light rounded p-3">
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
                                onClick={()=>history.push("/cart/verifyaddress")}
                                className="btn btn-success w-75">تایید</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Modal show={show} onHide={handleClose} style={{ position: "fixed", top: "25%" }}>
                <Modal.Body className="p-5">
                    <div className="text-center">
                        <MdDelete className="p-4" style={{ width: "130px", height: "130px", color: "red", backgroundColor: "#FFEFEF", borderRadius: "50%" }} />
                        <h4 className="my-3">آیا از حذف این محصول اطمینان دارید؟</h4>
                    </div>
                    <div className="text-center my-3">
                        <Button className="mx-2" variant="outline-secondary" onClick={handleClose}>
                            لغو
                        </Button>
                        <Button className="mx-2" variant="success" onClick={handleRemove}>
                            بله حذف کن
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default CartView;