import React from 'react'
import { Navbar, Nav, Form, FormControl, Dropdown} from 'react-bootstrap'
const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="w-100 d-flex flex-column">
            <div className="w-100 d-flex justify-content-between">
                <Navbar.Brand href="#">Navbar Brand</Navbar.Brand>
                <Form className="d-flex w-50">
                    <FormControl
                        type="search"
                        placeholder="جستجو..."
                        className="mr-2"
                        aria-label="Search"
                    />
                </Form>
                <div className="d-flex">
                    <Nav.Link href="#link">login</Nav.Link>
                    <Nav.Link href="#link">wishlist</Nav.Link>
                    <Nav.Link href="#link">cart</Nav.Link>
                </div>
            </div>
            <div className="w-100">
                <Nav
                    className="d-flex flex-row"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">important 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">important 2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    )
}
export default MyNavbar;