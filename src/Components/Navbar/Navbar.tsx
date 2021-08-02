import React, { useState, useEffect } from 'react'
import { MdShoppingCart, MdAccountCircle, MdFavorite } from "react-icons/md";
import { Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import IProduct from '../../Interfaces/ProductInterface';
import ICart from '../../Interfaces/CartInterface';
import ICartProducts from '../../Interfaces/CartProduct';
import IAllProducts from '../../Interfaces/AllProducts';
const MyNavbar = () => {
    const history = useHistory()
    const [cartShow, setCartShow] = useState(false)
    const [inputSearch, setInputSearch] = useState("")
    const [searchItems, setSearchItems] = useState<IProduct[]>()
    const cartItems = useSelector<ICart,ICartProducts[]>(state => state.cart.cartProducts)
    const allProducts = useSelector<IAllProducts, IProduct[]>(state => state.allProducts.allProducts)
    const handleSearch = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        console.log(data.value)
        setInputSearch(data.value)
        if (data.value === "")
            setSearchItems([])
        else
            setSearchItems(allProducts.filter((item) => {
                return item.model.toLowerCase().startsWith(data.value.toLowerCase())
            }))
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "search", payload: "" })
    }, [])
    const handleSearchClick = (id:string, category:string)=>{
        setInputSearch("")
        setSearchItems([])
        history.push(`/productdetails${id}?category=${category}`)
    }
    return (
        <Navbar fixed="top" bg="light" expand="lg" className="w-100 d-flex flex-column">
            <div className="w-100 d-flex justify-content-between container">
                <Navbar.Brand className="w-25" onClick={() => history.push("/homepage")} href="#">ممدشاپ</Navbar.Brand>
                <Form className="d-flex w-50">
                    <div className="w-100" style={{ position: "relative" }}>
                        <FormControl
                            type="search"
                            placeholder="جستجو..."
                            className="mr-2"
                            aria-label="Search"
                            onChange={handleSearch}
                            value={inputSearch}
                        />
                        <div className="bg-light w-100" style={{ height: `${searchItems ? searchItems.length * 100 > 500 ? 400 : searchItems.length * 100 : 0}px`, position: "absolute", overflowY: "scroll" }}>
                            {
                                searchItems?.map((item) => {
                                    return (
                                            <div 
                                            onClick={()=>handleSearchClick(item.id,item.category)}
                                            className="d-flex w-100">
                                                <div><img style={{ width: "80px", height: "80px" }} src={item.image} alt="" /></div>
                                                <div>
                                                    <div>{item.model}</div>
                                                    <div>{item.category}</div>
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Form>{console.log(searchItems)}
                <div className="d-flex flex-row-reverse w-25">
                    <Nav.Link className="" href="#link">
                        <Dropdown show={cartShow} drop={window.innerWidth < 500 ? "start" : "end"}>
                            <MdShoppingCart
                                onMouseEnter={() => setCartShow(true)}
                                // onMouseLeave={() => setCartShow(false)}
                                style={{ width: "30px", height: "30px" }} />
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    {
                                        cartItems.map((item) => {
                                            return (
                                                <div className="d-flex">
                                                    <div className="w-100 text-center">
                                                        <img style={{ width: "100px", height: "100px" }} src={item.image} alt="" />
                                                    </div>
                                                    <div>
                                                        <div>{item.model}</div>
                                                        <div>{item.price}</div>
                                                        <div>{item.count}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        cartItems.length === 0 ?
                                            <div>سبد خرید خالی است</div> :
                                            <button
                                                onClick={() => history.push("/cart")}
                                                className="btn btn-danger">ثبت سفارش</button>
                                    }
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <MdAccountCircle style={{ width: "30px", height: "30px" }} />
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <MdFavorite style={{ width: "30px", height: "30px" }} />
                    </Nav.Link>
                </div>
            </div>
            <div className="w-100 container">
                <Nav
                    className="d-flex flex-row w-100"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Dropdown drop="start">
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                دسته بندی
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="bg-light">
                                <div className="d-flex flex-lg-row flex-column p-lg-4">
                                    <div className="text-end">
                                        <Link style={{ textDecoration: "none" }} to="/categorymobile">گوشی</Link>
                                        <ul style={{ listStyle: "none" }}>
                                            <li>Apple</li>
                                            <li>Samsung</li>
                                        </ul>
                                    </div>
                                    <div className="text-end">
                                        <Link style={{ textDecoration: "none" }} to="/categorytablet">تبلت</Link>
                                        <ul style={{ listStyle: "none" }}>
                                            <li>Apple</li>
                                            <li>Samsung</li>
                                            <li>Microsoft</li>
                                        </ul>
                                    </div>
                                    <div className="text-end">
                                        <Link style={{ textDecoration: "none" }} to="/categorylaptop">لپ تاپ</Link>
                                        <ul style={{ listStyle: "none" }}>
                                            <li>Apple</li>
                                            <li>Samsung</li>
                                            <li>Microsoft</li>
                                        </ul>
                                    </div>
                                </div>
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