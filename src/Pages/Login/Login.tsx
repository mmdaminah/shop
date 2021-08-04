import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router'
export const Login = (props: RouteComponentProps) => {
    return (
        <div className="w-100 h-100" style={{ marginTop: "6rem" }}>
            <div className="container w-100 h-75 d-flex justify-content-center align-items-center">
                <Form className="bg-light p-5 rounded">
                    <div className="text-center"><h1>حساب کاربری</h1></div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control type="email" placeholder="examle@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>رمز عبور</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div><a style={{textDecoration:"none"}} href="">فراموشی رمز عبور</a></div>
                    <Button variant="primary" type="submit">
                        ورود
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default Login;