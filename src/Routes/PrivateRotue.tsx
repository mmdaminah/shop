import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRotue = ({ path, exact, loginRequired, Component }: any) => {
    const isLogin = useSelector<any, any>(state => state.User.isLogin)
    return (
        <Route
            path = {path}
            exact = {exact}
            render= {({location}) => 
                    (!loginRequired) || (loginRequired && isLogin) ? (
                        <Component />
                    ): (
                        <Redirect
                            to={{
                                pathname:"/login",
                                state: {from:location}
                            }}
                        />
                    )
                }
        />
    )
}
export default PrivateRotue;