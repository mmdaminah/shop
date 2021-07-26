import React from 'react'
import { MdShoppingCart, MdAccountCircle, MdFavorite } from "react-icons/md";
import { Navbar, Nav, Form, FormControl, Dropdown} from 'react-bootstrap'
const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="w-100 d-flex flex-column">
            <div className="w-100 d-flex justify-content-between container">
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
                    <Nav.Link href="#link"><MdAccountCircle/></Nav.Link>
                    <Nav.Link href="#link"><MdFavorite /></Nav.Link>
                    <Nav.Link href="#link"><MdShoppingCart /></Nav.Link>
                </div>
            </div>
            <div className="w-100 container">
                <Nav
                    className="d-flex flex-row"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                dfdgfdg
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">گوشی</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">تبلت</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">لپ تاپ</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    )
}
export default MyNavbar;