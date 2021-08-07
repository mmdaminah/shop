import React from 'react'
const HomePage = React.lazy(()=>import("../Pages/HomePage/HomePage"))
const Login = React.lazy(()=>import("../Pages/Login/Login"))
const Dashboard = React.lazy(()=>import("../Pages/Dashboard/Dashboard"))
const Category = React.lazy(()=>import("../Pages/Category/Category"))
const ProductDetails = React.lazy(()=>import("../Pages/ProductDetails/ProductDetails"))
const CartPage = React.lazy(()=>import("../Pages/CartPage/CartPage"))
const Register = React.lazy(()=>import("../Pages/Register/Register"))
const routes = [
    {path:'/homepage',exact:true,Component:HomePage,loginRequired:false},
    {path:'/login',exact:true,Component:Login,loginRequired:true},
    {path:'/register',exact:true,Component:Register,loginRequired:true},
    {path:'/dashboard',exact:false,Component:Dashboard,loginRequired:true},
    {path:'/category:name',exact:false,Component:Category,loginRequired:false},
    {path:'/productdetails:id',exact:false,Component:ProductDetails,loginRequired:false},
    {path:'/cart',exact:true,Component:CartPage,loginRequired:true},
]
export default routes;