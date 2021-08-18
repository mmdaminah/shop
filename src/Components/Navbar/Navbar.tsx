import React, { useState, useEffect, useCallback } from 'react'
import { MdShoppingCart, MdAccountCircle, MdHome, MdList, MdSearch, MdDelete } from "react-icons/md";
import { Navbar, Nav, Form, FormControl, Badge, Offcanvas, Button } from 'react-bootstrap'
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
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    const allProducts = useSelector<IAllProducts, IProduct[]>(state => state.allProducts.allProducts)
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
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
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    const handleSearchClick = (id: string, category: string) => {
        setInputSearch("")
        setSearchItems([])
        history.push(`/productdetails${id}?category=${category}`)
    }
    //navbar scrollong
    const [scroll, setScroll] = useState(window.scrollY);
    const [navbarShow, setNavbarShow] = useState(true)
    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (scroll > window.scrollY) {
                setNavbarShow(true)
            } else if (scroll < window.scrollY) {
                setNavbarShow(false)
            }
            setScroll(window.scrollY);
        }, [scroll]
    );
    useEffect(() => {
        setScroll(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    //navbar scrollong
    const [categoryShow, setCategoryShow] = useState(false)
    const [searchShow, setSearchShow] = useState(false)
    const mbileBrands = ["categorymobile", 'samsung', 'apple'];
    const tabletBrands = ["categorytablet", 'samsung', 'apple', "microsoft"];
    const laptopBrands = ["categorylaptop", 'Acer', 'Asus', 'MSI'];
    const [brand, setBrand] = useState(mbileBrands)
    const [cartIconStyle, setCartIconStyle] = useState("#b8e3e6")
    const [userIconStyle, setUserIconStyle] = useState("#b8e3e6")

    const [showCategory, setshowCategory] = useState(false);
    const handleClose = () => setshowCategory(false);
    const handleShow = () => setshowCategory(true);
    const handleCloseSearch = () => setSearchShow(false);
    const handleShowSearch = () => setSearchShow(true);
    return (
        <Navbar fixed="top" bg="white" expand="lg" className="w-100 d-flex flex-column">
            <div className="w-100 d-flex justify-content-between container">
                <Navbar.Brand className="" onClick={() => history.push("/homepage")} href="#">آل دیجیتال</Navbar.Brand>
                {windowWidth < 500 && <div><div>با ما تماس بگیرید</div><div style={{ direction: "ltr" }}>09371522920</div></div>}
                {windowWidth > 500 &&
                    <Form className="d-flex mx-auto" style={{ width: "35%" }}>
                        <div className="w-100" style={{ position: "relative" }}>
                            <div className="w-100 mx-auto" style={{ position: "relative" }}>
                                <FormControl
                                    type=""
                                    placeholder="به دنبال چه چیزی می گردید؟"
                                    className="mr-2"
                                    aria-label="Search"
                                    onChange={handleSearch}
                                    value={inputSearch}
                                    style={{ borderRadius: "35px", backgroundColor: "#fbfbfb", fontSize: "0.8rem" }}
                                />
                                <MdSearch
                                    style={{ position: "absolute", bottom: "9px", left: "8px" }} />
                            </div>
                            <div className="bg-light w-100" 
                            style={{ height: `${searchItems ? searchItems.length * 100 > 500 ? 400 : searchItems.length * 100 : 0}px`, 
                            position: "absolute", left:"0", overflowY: "scroll" }}>
                                {
                                    searchItems?.map((item) => {
                                        return (
                                            <div
                                                onClick={() => handleSearchClick(item.id, item.category)}
                                                className="d-flex w-100">
                                                <div><img style={{ width: "80px", height: "80px" }} src={item.image} alt="" /></div>
                                                <div className="p-3">
                                                    <div>{item.model}</div>
                                                    <div>{item.category}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Form>}
                {windowWidth > 500 &&
                    <div className="d-flex flex-row-reverse" style={{ width: "22%" }}>
                        <Nav.Link style={{ position: "relative" }}>
                            <div style={{ position: "relative" }}
                                onMouseEnter={() => setCartShow(!cartShow)}
                            onMouseLeave={() => setCartShow(!cartShow)}
                            >
                                <Badge pill bg="warning"
                                    style={{ position: "absolute" }}
                                >
                                    {cartItems.length}
                                </Badge>
                                <MdShoppingCart
                                    onMouseEnter={() => setCartIconStyle("#06a0a7")}
                                    onMouseLeave={() => setCartIconStyle("#b8e3e6")}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        padding: "5px",
                                        backgroundColor: `${cartIconStyle}`,
                                        borderRadius: "50%"
                                    }} />
                                {
                                    cartShow &&
                                    <div style={{
                                        position: "absolute", left: "0",
                                        height: "300px"
                                    }}>
                                        <div className="bg-light"
                                            style={{
                                                width: "320px", overflowY: "scroll",
                                                height: `${cartItems ? cartItems.length * 100 > 500 ? 400 : cartItems.length * 120 : 0}px`
                                            }}>
                                            <div>
                                                {
                                                    cartItems.map((item) => {
                                                        return (
                                                            <div className="d-flex p-3">
                                                                <div className="w-100 text-center">
                                                                    <img style={{ width: "100px", height: "100px" }} src={item.image} alt="" />
                                                                </div>
                                                                <div className="w-50 d-flex">
                                                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                                                        <div>{item.model}</div>
                                                                        <div>{(+item.price)*(+item.count)}تومان</div>
                                                                        <div className="d-flex align-items-center">
                                                                            <Button
                                                                                onClick={() => dispatch({ type: "addProduct", payload: { id: item.id, model: item.model, action: "increase" } })}
                                                                                variant="success" size="sm">+</Button>
                                                                            <div className="mx-2">{item.count}</div>
                                                                            <Button
                                                                                onClick={() => dispatch({ type: "addProduct", payload: { id: item.id, model: item.model, action: "decrease" } })}
                                                                                variant="danger" size="sm">-
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-end">
                                                                        <MdDelete
                                                                            onClick={() => dispatch({ type: "delteProduct", payload: { id: item.id, model: item.model } })}
                                                                            style={{ width: "40px", height: "40px", color: "#E05C5C" }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="bg-danger" style={{ width: "320px" }}>
                                            {
                                                cartItems.length === 0 ?
                                                    <div>سبد خرید خالی است</div> :
                                                    <div className="text-center">
                                                        <button
                                                            onClick={() => history.push("/cart")}
                                                            className="btn btn-danger w-100">ثبت سفارش</button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#link" >
                            <MdAccountCircle
                                onMouseEnter={() => setUserIconStyle("#06a0a7")}
                                onMouseLeave={() => setUserIconStyle("#b8e3e6")}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    padding: "5px",
                                    backgroundColor: `${userIconStyle}`,
                                    borderRadius: "50%"
                                }}
                            />
                        </Nav.Link>
                    </div>}
            </div>
            <div className="w-100 container">
                {
                    windowWidth < 500 &&
                    <div
                        className="w-100 bg-white p-2 d-flex justify-content-around"
                        style={{ position: "fixed", left: "0", bottom: "0" }}>
                        <div className="d-flex flex-column text-center">
                            <MdHome
                                onClick={() => history.push("/homepage")}
                                style={{ width: "40px", height: "40px", color: "#019ca7" }}
                            />
                            <span style={{ fontSize: "smaller" }}>خانه</span>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <MdList
                                onClick={handleShow}
                                style={{ width: "40px", height: "40px", color: "#019ca7" }}
                            />
                            <span style={{ fontSize: "smaller" }}>دسته بندی</span>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <MdShoppingCart
                                onClick={() => history.push("/cart")}
                                style={{ width: "40px", height: "40px", color: "#019ca7" }}
                            />
                            <span style={{ fontSize: "smaller" }}>سبد خرید</span>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <MdSearch
                                onClick={handleShowSearch}
                                style={{ width: "40px", height: "40px", color: "#019ca7" }}
                            />
                            <span style={{ fontSize: "smaller" }}>جستجو</span>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <MdAccountCircle
                                style={{ width: "40px", height: "40px", color: "#019ca7" }}
                            />
                            <span style={{ fontSize: "smaller" }}>حساب</span>
                        </div>
                    </div>
                }
                <Offcanvas className="w-100" show={showCategory} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>دسته بندی</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div style={{ textDecoration: "none" }} >
                            <div
                                onClick={() => { history.push("/categorymobile"); handleClose() }}
                                className="my-2 p-1">گوشی</div>
                            <ul>
                                {
                                    mbileBrands.map((item, index) => {
                                        if (index > 0)
                                            return (
                                                <li
                                                    onClick={() => { history.push(`/${mbileBrands[0]}?brand=${item}`); handleClose() }} key={Math.random() * 1000}>
                                                    {item}
                                                </li>
                                            )
                                    })
                                }
                            </ul>
                        </div>
                        <div style={{ textDecoration: "none" }} >
                            <div
                                onClick={() => { history.push("/categorytablet"); handleClose() }}
                                className="my-2 p-1">تبلت</div>
                            <ul>
                                {
                                    tabletBrands.map((item, index) => {
                                        if (index > 0)
                                            return (
                                                <li
                                                    onClick={() => { history.push(`/${tabletBrands[0]}?brand=${item}`); handleClose() }} key={Math.random() * 1000}>
                                                    {item}
                                                </li>
                                            )
                                    })
                                }
                            </ul>
                        </div>
                        <div style={{ textDecoration: "none" }} >
                            <div
                                onClick={() => { history.push("/categorylaptop"); handleClose() }}
                                className="my-2 p-1">لپ تاپ</div>
                            <ul>
                                {
                                    laptopBrands.map((item, index) => {
                                        if (index > 0)
                                            return (
                                                <li
                                                    onClick={() => { history.push(`/${laptopBrands[0]}?brand=${item}`); handleClose() }} key={Math.random() * 1000}>
                                                    {item}
                                                </li>
                                            )
                                    })
                                }
                            </ul>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <Offcanvas className="w-100" show={searchShow} onHide={handleCloseSearch} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>جستجو</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form.Control onChange={handleSearch}
                            style={{ borderRadius: "24px" }}
                            className="w-100" type="text" placeholder="به دنبال چه چیزی میگردید..." />
                        {
                            searchItems?.map((item) => {
                                return (
                                    <div
                                        onClick={() => { handleSearchClick(item.id, item.category); handleCloseSearch() }}
                                        className="d-flex w-100">
                                        <div className="w-50"><img className="w-100" src={item.image} alt="" /></div>
                                        <div className="w-50 p-4">
                                            <div>{item.model}</div>
                                            <div>{item.category}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Offcanvas.Body>
                </Offcanvas>
                {navbarShow && windowWidth > 500 && <Nav
                    className={`d-flex flex-row w-100`}
                    activeKey="/home"
                >   <div
                    onMouseEnter={() => setCategoryShow(true)}
                    onMouseLeave={() => setCategoryShow(false)}
                >
                        <Nav.Item className="">
                            <Nav.Link className="" eventKey="link-1"
                            >دسته بندی
                                {
                                    categoryShow && <div className="bg-light w-50"
                                        style={{ position: "absolute", border: "1px solid #aecacc" }}
                                    >
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-4" style={{ backgroundColor: "#edfbfc" }}>
                                                    <Link style={{ textDecoration: "none" }} to="/categorymobile">
                                                        <div className="my-2 p-1"
                                                            onMouseEnter={() => setBrand(mbileBrands)}
                                                        >گوشی</div>
                                                    </Link>
                                                    <Link style={{ textDecoration: "none" }} to="/categorytablet">
                                                        <div className="my-2 p-1"
                                                            onMouseEnter={() => setBrand(tabletBrands)}
                                                        >تبلت</div>
                                                    </Link>
                                                    <Link style={{ textDecoration: "none" }} to="/categorylaptop">
                                                        <div className="my-2 p-1"
                                                            onMouseEnter={() => setBrand(laptopBrands)}
                                                        >لپ تاپ</div>
                                                    </Link>
                                                </div>
                                                <div className="col-8">
                                                    {
                                                        brand.map((item, index) => {
                                                            if (index > 0)
                                                                return (
                                                                    <div onClick={() => history.push(`/${brand[0]}?brand=${item}`)} key={Math.random() * 1000}>
                                                                        {item}
                                                                    </div>
                                                                )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </Nav.Link>
                        </Nav.Item></div>
                    <Nav.Item>
                        <Nav.Link onClick={() => history.push("/categorymobile")}>گوشی</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => history.push("/categorytablet")}>تبلت</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => history.push("/categorylaptop")}>لپ تاپ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"
                            onClick={() => dispatch({ type: "logout" })}
                        >logout</Nav.Link>
                    </Nav.Item>
                </Nav>}
            </div>
        </Navbar>
    )
}
export default MyNavbar;