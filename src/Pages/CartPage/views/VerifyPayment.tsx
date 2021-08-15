import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MdCheckCircle } from "react-icons/md";
const VerifyPayment = (props: RouteComponentProps) => {
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    return (
            <div className="bg-light mt-4 p-3 w-100">
                <div className={`text-center bg-white mx-auto p-5 ${windowWidth < 500 ? "w-100" : "w-50"}`}
                    style={{ boxShadow: "0 5px 8px -3px rgb(0 0 0 / 10%)", borderRadius: "8px" }}>
                    <MdCheckCircle
                        className="p-3"
                        style={{ width: "150px", height: "150px", backgroundColor: "#f3fff9", color: "#3cc9a7", borderRadius: "50%" }}
                    />
                    <div>
                        <h3>پرداخت موفق</h3>
                    </div>
                    <div className="mt-4">
                        <h5>باتشکر از خرید شما</h5>
                    </div>
                </div>
            </div>
    )
}
export default VerifyPayment;