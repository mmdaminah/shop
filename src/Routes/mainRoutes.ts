import React from 'react'
const HomePage = React.lazy(()=>import("../Pages/HomePage/HomePage"))
const Login = React.lazy(()=>import("../Pages/Login/Login"))
const Dashboard = React.lazy(()=>import("../Pages/Dashboard/Dashboard"))
const Category = React.lazy(()=>import("../Pages/Category/Category"))
const ProductDetails = React.lazy(()=>import("../Pages/ProductDetails/ProductDetails"))
const CartPage = React.lazy(()=>import("../Pages/CartPage/CartPage"))
const routes = [
    {path:'/homepage',exact:true,Component:HomePage},
    {path:'/login',exact:true,Component:Login},
    {path:'/dashboard',exact:false,Component:Dashboard},
    {path:'/category:name',exact:false,Component:Category},
    {path:'/productdetails:id',exact:false,Component:ProductDetails},
    {path:'/cart',exact:true,Component:CartPage},
]
export default routes;