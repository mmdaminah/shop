import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router'
import { useDispatch } from 'react-redux'
interface IUser {
    email: string;
    password: string;
}
export const Login = (props: RouteComponentProps) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState<IUser>({ email: "", password: "" })
    const handleChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement
        setUser({ ...user, [data.name]: data.value })
    }
    const handleLogin = (event: any) => {
        event.preventDefault()
        axios.post('/login', {
            email: user.email,
            password: user.password
        })
            .then((res) => {
                dispatch({
                    type: "userLogin", payload: {
                        isLogin: true,
                        accessToken: res.data.accessToken,
                        refreshToken: res.data.refreshToken,
                        role: ""
                    }
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="w-100 h-100" style={{ marginTop: "6rem" }}>
            <div className="container w-100 h-75 d-flex justify-content-center align-items-center">
                <Form className="bg-light p-5 rounded">
                    <div className="text-center"><h1>Login</h1></div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control onChange={handleChange} name="email" type="email" placeholder="examle@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>رمز عبور</Form.Label>
                        <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <div><a style={{ textDecoration: "none" }} href="">فراموشی رمز عبور</a></div>
                    <Button onClick={handleLogin} variant="primary" type="submit">
                        ورود
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default Login;