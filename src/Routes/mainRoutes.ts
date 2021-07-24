import React from 'react'
const HomePage = React.lazy(()=>import("../Pages/HomePage/HomePage"))
const Login = React.lazy(()=>import("../Pages/Login/Login"))
const Dashboard = React.lazy(()=>import("../Pages/Dashboard/Dashboard"))
const Category = React.lazy(()=>import("../Pages/Category/Category"))
const routes = [
    {path:'/homepage',exact:true,Component:HomePage},
    {path:'/login',exact:true,Component:Login},
    {path:'/dashboard',exact:true,Component:Dashboard},
    {path:'/category:name',exact:false,Component:Category},
]
export default routes;
//homepage
//login
//product details
//category products
//admin dashboard