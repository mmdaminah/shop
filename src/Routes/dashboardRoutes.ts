import React from 'react'
const AddProduct = React.lazy(()=>import("../Pages/Dashboard/views/AddProduct"))
const ProductList = React.lazy(()=>import("../Pages/Dashboard/views/ProductList"))
const UserList = React.lazy(()=>import("../Pages/Dashboard/views/UserList"))
const OrderList = React.lazy(()=>import("../Pages/Dashboard/views/OrderList"))
const routes = [
    {path:"/", exact:true, Component:ProductList,loginRequired:true},
    {path:"/addproduct", exact:true, Component:AddProduct,loginRequired:true},
    {path:"/userlist", exact:true, Component:UserList,loginRequired:true},
    {path:"/orderlist", exact:true, Component:OrderList,loginRequired:true},
]
export default routes;