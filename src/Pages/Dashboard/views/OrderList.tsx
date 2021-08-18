import axios from 'axios'
import React, { useState, useEffect } from 'react'
import IOrder from '../../../Interfaces/OrderInterface'
import { Button, Modal, Table } from 'react-bootstrap'
import ICartProducts from '../../../Interfaces/CartProduct'
const OrderList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get("/orders")
            .then((res) => {
                console.log(res.data)
                setOrders(res.data)
            })
    }, [])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalItem, setModalItem] = useState<IOrder>()
    const handleShowModal = (item: IOrder) => {
        setModalItem(item)
        handleShow()
    }
    return (
        <div className="w-100">
            <h1>لیست سفارشات</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام کامل</th>
                        <th>روش ارسال</th>
                        <th>استان</th>
                        <th>شهر</th>
                        <th>جمع کل</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((item: IOrder, index) => (
                            <tr
                                key={Math.random() * 9999}
                                onClick={() => handleShowModal(item)}
                                style={{ cursor: "pointer" }}>
                                <td>{index + 1}</td>
                                <td>{item.userInfo.fullName}</td>
                                <td>{item.postMethod}</td>
                                <td>{item.userInfo.provience}</td>
                                <td>{item.userInfo.city}</td>
                                <td>
                                    {
                                        item.cart.reduce((accumulator: number, current: ICartProducts) => {
                                            return accumulator + (+current.price * current.count);
                                        }, 0)
                                    }تومان
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>لیست سفارش</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        modalItem?.cart.map((item) => (
                            <div className="w-100 d-flex justify-content-around" key={Math.random() * 9999}>
                                <div className="w-25">
                                    <img className="w-100" src={item.image} />
                                </div>
                                <div className="d-flex flex-column">
                                    <div>{item.model}</div>
                                    <div>تعداد:{item.count}</div>
                                    <div>قیمت واحد:{item.price}</div>
                                    <div>قیمت کل:{+item.count*(+item.price)}</div>
                                </div>
                            </div>
                        ))
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default OrderList