import React, { useState, useEffect } from 'react'
import { MdAddCircleOutline, MdList } from "react-icons/md";
import { useHistory } from 'react-router';
const Sidebar = () => {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    useEffect(() => {
        if (show)
            setWidth("w-100")
        else
            setWidth("")
    }, [show])
    return (
        <div className={`d-flex h-100 ${width}`}>
            <div
                onMouseLeave={handleClose}
                onMouseEnter={handleShow}
                className={`bg-primary h-100 ${width}`}
            >
                <div onClick={()=>history.push("/dashboard/addproduct")} style={{cursor:"pointer"}}>
                    <MdAddCircleOutline style={{width:"50px",height:"50px"}}/>
                    {show && <span>اضافه کردن کالا</span>}
                </div>
                <div onClick={()=>history.push("/dashboard/productlist")} style={{cursor:"pointer"}}>
                    <MdList style={{width:"50px",height:"50px"}}/>
                    {show && <span>لیست کالاها</span>}
                </div>
            </div>
        </div>
    );
}
export default Sidebar;