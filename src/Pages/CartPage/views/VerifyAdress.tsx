import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import ICartProducts from '../../../Interfaces/CartProduct'
import ICart from '../../../Interfaces/CartInterface'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import Proviences from '../../../Assets/provinces.json'
import Cities from '../../../Assets/cities.json'
interface ICities {
    id: number;
    name: string;
    slug: string;
    province_id: number;
}
const VerifyAdress = (props: RouteComponentProps) => {
    const cartItems = useSelector<ICart, ICartProducts[]>(state => state.cart.cartProducts)
    const history = useHistory();
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const [cities, setCities] = useState<ICities[]>([Cities[0]])
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    const handleProvienceChange = (event: React.FormEvent) => {
        const data = event.target as HTMLInputElement
        setCities(Cities.filter(item => +item.province_id === +data.value))
    }
    return (
        <div className={`bg-light mt-4 p-3 ${windowWidth < 500 ? "w-100" : "w-75"}`} >
            <div className="container w-100">
                <div className="row">
                    <div className="col-8 row">
                        <h4>نشانی</h4>
                        <div className="col-6">
                            <label htmlFor="">کدپستی</label>
                            <Form.Control style={{ borderRadius: "22px", border: "none" }} type="text" placeholder="کدپستی خود را وارد کنید" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="">نام تحویل گیرنده</label>
                            <Form.Control type="text" placeholder="نام گیرنده را وارد کنید" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="">استان</label>
                            <Form.Select onChange={handleProvienceChange} aria-label="Default select example" style={{ fontSize: "smaller" }}>
                                <option>یک مورد را انتخاب نمایید</option>
                                {
                                    Proviences.map((provience) => (
                                        <option key={provience.id+provience.name} value={provience.id}>{provience.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="">شهر</label>
                            <Form.Select aria-label="Default select example" style={{ fontSize: "smaller" }}>
                                <option>یک مورد را انتخاب نمایید</option>
                                {
                                    cities.map((city)=>(
                                        <option key={city.id+city.name} value={city.id}>{city.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="">آدرس دقیق</label>
                            <Form.Control as="textarea" placeholder="آدرس دقیق محل تحویل کالا را وارد نمایید" />
                        </div>
                    </div>
                    <div className="col-4">
                        <h4>روش ارسال</h4>
                        <div>
                            <Form.Check name="postOption" type="radio" id="default-radio" label="پست پیشتاز" />
                            <Form.Check name="postOption" type="radio" id="default-radio" label="تیپاکس" />
                            <Form.Check name="postOption" type="radio" id="default-radio" label="باربری" />
                            <Form.Check name="postOption" type="radio" id="default-radio" label="اتوبوس" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyAdress;