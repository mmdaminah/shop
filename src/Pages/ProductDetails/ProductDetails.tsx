import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useParams, useLocation } from 'react-router'
import IProduct from '../../Interfaces/ProductInterface'
import PhotoViewr from '../../Components/PhotoViewer/PhotoViewr'
import { Form, Nav, Table } from 'react-bootstrap'
const ProductDetails = (props: RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const location = useLocation()
    const { id } = useParams<{ id: string }>();
    const product = items.find(item => item.id === id)
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category")
    const request = (url: string, name: string) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result.products)
                setItems(result.products)
            })
    }
    useEffect(() => {
        request(`/${category}`, "" + category)
    }, [])

    return (
        <div className="w-100" style={{ marginTop: "10rem" }}>
            <div className="container w-100">
                <div className="w-100 d-flex">
                    <div className="row w-100">
                        <div className="col-5">
                            <PhotoViewr />
                        </div>
                        <div className="col-3">
                            <div>
                                <h1>{product?.model}</h1>
                                <h4>مشخصات</h4>
                                <div>پردازنده:{product?.specifications?.cpu}</div>
                                <div>مقدار رم:{product?.specifications?.ram}</div>
                                <div>حافظه داخلی:{product?.specifications?.rom}</div>
                                <div>صفحه نمایش:{product?.specifications?.display}</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-light text-center rounded">
                                <h4 className="py-4">فروشنده:ممدکامپیوتر</h4>
                                <hr />
                                <select className="my-2" name="" id="">
                                    <option value="">انتخاب گارانتی</option>
                                    <option value="">گارانتی 18 ماهه ممدکامپیوتر</option>
                                </select>
                                <hr />
                                <h5>موجود در انبار</h5>
                                <hr />
                                <h4 className="my-2">{product?.price} تومان</h4>
                                <button className="btn btn-danger my-3 ">افزودن به سبد خرید</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="#specs">مشخصات</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#comments">دیدگاه کاربران</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#addComments">افزودن نظر</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="w-100" id="specs">
                        <h3>مشخصات</h3>
                        <Table className="w-50 mx-auto text-center" striped bordered hover>
                            <tbody>
                                <tr>
                                    <td className="w-50">پردازنده</td>
                                    <td className="w-50">{product?.specifications?.cpu}</td>
                                </tr>
                                <tr>
                                    <td>حافظه داخلی</td>
                                    <td>{product?.specifications?.rom}</td>
                                </tr>
                                <tr>
                                    <td>رم</td>
                                    <td>{product?.specifications?.ram}</td>
                                </tr>
                                <tr>
                                    <td>صفحه نمایش</td>
                                    <td>{product?.specifications?.display}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                    </div>
                    <div id="comments">
                        <h3>دیدگاه کاربران</h3>
                        <hr />
                        <div className="bg-light">
                            <h6>ممد زامبی</h6>
                            <p>
                            آقا مفتش گرونه نخرید که رفته تو پاچتون.از ما گفتن بود از شما نشنیدن 
                            </p>
                        </div>
                        <div className="bg-light">
                            <h6>علی راستگو</h6>
                            <p>
                            بهترین گوشی دنیاس رو دستش نیومده و دیگه هم نمیاد تامام
                            </p>
                        </div>
                    </div>
                    <div id="addComments w-100">
                        <h3>افزودن دیدگاه</h3>

                        <hr />
                        <Form className="w-50">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>آدرس ایمیل</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>دیدگاه شما</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button className="btn btn-primary">ثبت نظر</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;