import React from 'react'
const AddProduct = React.lazy(()=>import("../Pages/Dashboard/views/AddProduct"))
const ProductList = React.lazy(()=>import("../Pages/Dashboard/views/ProductList"))
const routes = [
    {path:"/addproduct", exact:true, Component:AddProduct,loginRequired:true},
    {path:"/productlist", exact:true, Component:ProductList,loginRequired:true}
]
export default routes;