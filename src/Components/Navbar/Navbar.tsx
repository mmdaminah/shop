import React, { useState, useEffect, useCallback } from 'react'
import { MdShoppingCart, MdAccountCircle, MdFavorite, MdSearch } from "react-icons/md";
import { Navbar, Nav, Form, FormControl, Dropdown, Badge } from 'react-bootstrap'
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
    const mbileBrands = ['samsung', 'apple'];
    const tabletBrands = ['samsung', 'apple', "microsoft"];
    const laptopBrands = ['acer', 'asus', 'msi'];
    const [brand, setBrand] = useState(mbileBrands)
    const [cartIconStyle, setCartIconStyle] = useState("#b8e3e6")
    const [userIconStyle, setUserIconStyle] = useState("#b8e3e6")
    return (
        <Navbar fixed="top" bg="white" expand="lg" className="w-100 d-flex flex-column">
            <div className="w-100 d-flex justify-content-between container">
                <Navbar.Brand className="" onClick={() => history.push("/homepage")} href="#">ممدشاپ</Navbar.Brand>
                <Form className="d-flex mx-auto" style={{width:"35%"}}>
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
                                style={{ position: "absolute", bottom: "11px", left: "8px" }} />
                        </div>
                        <div className="bg-light w-75" style={{ borderRadius: "10px", height: `${searchItems ? searchItems.length * 100 > 500 ? 400 : searchItems.length * 100 : 0}px`, position: "absolute", right: "12%", overflowY: "scroll" }}>
                            {
                                searchItems?.map((item) => {
                                    return (
                                        <div
                                            onClick={() => handleSearchClick(item.id, item.category)}
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
                </Form>
                <div className="d-flex flex-row-reverse" style={{width:"22%"}}>
                    <Nav.Link style={{ width:"50px",height:"50px",position: "relative" }}>
                        <div style={{ position: "relative" }}
                            onClick={() => setCartShow(!cartShow)}
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
                        </div>
                        {cartShow && <div className="bg-light" style={{ position: "absolute",left:"10%", height: `${cartItems ? cartItems.length * 100 > 500 ? 400 : cartItems.length * 100 : 0}px`, overflowY: "scroll" }}>
                            {
                                cartItems.map((item) => {
                                    return (
                                        <div className="d-flex w-100 p-3">
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
                        </div>}
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
                </div>
            </div>
            <div className="w-100 container">
                {navbarShow && window.innerWidth > 500 && <Nav
                    className={`d-flex flex-row w-100`}
                    activeKey="/home"
                >
                    <Nav.Item className="">
                        <Nav.Link className="" eventKey="link-1"
                            onMouseEnter={() => setCategoryShow(true)}
                        >دسته بندی
                            {
                                categoryShow && <div className="bg-light w-50"
                                    style={{ position: "absolute", border: "4px solid black" }}
                                >
                                    <div className="container"
                                        onMouseLeave={() => setCategoryShow(false)}
                                    >
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
                                                    brand.map((item) => {
                                                        return (
                                                            <div key={Math.random() * 1000}>
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