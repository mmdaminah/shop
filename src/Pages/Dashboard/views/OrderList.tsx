import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ICartInformation from '../../../Interfaces/CartUserInterface'
import { Table } from 'react-bootstrap'
const OrderList = () => {
    const [orders,setOrders] = useState([])
    useEffect(() => {
        axios.get("/orders")
            .then((res) => {
                console.log(res.data)
                setOrders(res.data)
            })
    }, [])
    return (
        <div className="w-100">
            <h1>لیست سفارشات</h1>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>شماره</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((item,index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
        </div>
    )
}
export default OrderList