import React, { useState, useEffect} from 'react'
import { RouteComponentProps } from 'react-router-dom'
const VerifyAdress = (props: RouteComponentProps) => {
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
    }, [])
    return (
        <div className="w-100" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            <h1>this is address page</h1>
        </div>
    )
}
export default VerifyAdress;