import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string
}
const UserList = () => {
    const [users, setUsers] = useState<IUser[]>()
    useEffect(() => {
        axios.get("/userlist")
            .then((res) => {
                setUsers(res.data)
            })
    }, [])
    return (
        <div className="w-100">
            <div className="container">
                <h1>this is user list</h1>
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
                            users?.map((item,index) => (
                                <tr key={Math.random()*1000}>
                                    <td>{index+1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    )
}
export default UserList