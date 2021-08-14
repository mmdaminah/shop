import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Button, Form } from 'react-bootstrap';

const PaymentMethod = (props: RouteComponentProps) => {
    const history = useHistory();
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    return (
        <div className={`bg-light mt-4 p-3 ${windowWidth < 500 ? "w-100" : "w-75"}`}>
            <h4>روشهای پرداخت</h4>
            <div className="row d-flex justify-content-between">
                <div className="col-5 bg-white p-4"
                    style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                >
                    <h5>انتخاب نوع پرداخت</h5>
                    <div>
                        <Form.Check name="payMethod" type="radio" id="default-radio" label="آنلاین" />
                        <Form.Check name="payMethod" type="radio" id="default-radio" label="نقدی" />
                    </div>
                </div>
                <div className="col-6 bg-white p-4"
                    style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                >
                    <h5>انتخاب درگاه پرداخت</h5>
                    <div>
                        <Form.Check name="payGate" type="radio" id="default-radio" label="درگاه بانک سامان" />
                        <Form.Check name="payGate" type="radio" id="default-radio" label="درگاه بانک ملت" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mt-3 bg-white w-100 p-4"
                style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}
                >
                        <label htmlFor="">کدپستی</label>
                        <div className="d-flex">
                            <Form.Control 
                            className="bg-light"
                            style={{ borderRadius: "22px", border: "none" }} 
                            type="text" placeholder="در صورت داشتن کد تخفیف آن را وارد کنید" />
                            <Button variant="outline-success" className="mx-4">اعمال</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentMethod;