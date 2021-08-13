import React from "react";
const CartView = React.lazy(()=>import("../Pages/CartPage/views/CartView"))
const VerifyAddress = React.lazy(()=>import("../Pages/CartPage/views/VerifyAdress"))
const routes = [
    {path:"",exact:true,Component:CartView},
    {path:"/verifyaddress",exact:true,Component:VerifyAddress},
]
export default routes;