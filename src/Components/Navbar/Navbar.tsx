import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="w-100 d-flex justify-content-between">
            <Navbar.Brand href="#">Navbar Brand</Navbar.Brand>
            <Form className="d-flex w-50">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
            </Form>
            <div className="d-flex">
                <Nav.Link href="#link">login</Nav.Link>
                <Nav.Link href="#link">wishlist</Nav.Link>
                <Nav.Link href="#link">cart</Nav.Link>
            </div>
        </Navbar>
    )
}
export default MyNavbar;