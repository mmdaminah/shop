import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router'
import { useHistory } from 'react-router'
interface IUser {
    email: string;
    password: string;
}
export const Register = (props: RouteComponentProps) => {
    const history = useHistory()
    const [user, setUser] = useState<IUser>({email:"",password:""})
    const handleChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement
        setUser({ ...user, [data.name]: data.value })
    }
    const handleRegister = (event:any)=>{
        event.preventDefault()
        axios.post('/register',{
            email:user.email,
            password:user.password
        })
        .then(()=>history.push("/login"))
        .catch(err => console.log(err))
    }
    return (
        <div className="w-100 h-100" style={{ marginTop: "6rem" }}>
            <div className="container w-100 h-75 d-flex justify-content-center align-items-center">
                <Form className="bg-light p-5 rounded">
                    <div className="text-center"><h1>Register</h1></div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control onChange={handleChange} name="email" type="email" placeholder="examle@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>رمز عبور</Form.Label>
                        <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <div><a style={{ textDecoration: "none" }} href="">فراموشی رمز عبور</a></div>
                    <Button onClick={handleRegister} variant="primary" type="submit">
                        ورود
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default Register;