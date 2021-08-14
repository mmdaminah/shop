import React from "react";
const CartView = React.lazy(()=>import("../Pages/CartPage/views/CartView"))
const VerifyAddress = React.lazy(()=>import("../Pages/CartPage/views/VerifyAdress"))
const PaymentMethod = React.lazy(()=>import("../Pages/CartPage/views/PaymentMethod"))
const routes = [
    {path:"",exact:true,Component:CartView},
    {path:"/verifyaddress",exact:true,Component:VerifyAddress},
    {path:"/payment",exact:true,Component:PaymentMethod},
]
export default routes;