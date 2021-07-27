import React from 'react'
const AddProduct = React.lazy(()=>import("../Pages/Dashboard/views/AddProduct"))
const routes = [
    {path:"/addproduct", exact:true, Component:AddProduct}
]
export default routes;