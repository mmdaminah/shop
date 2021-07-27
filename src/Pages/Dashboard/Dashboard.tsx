import React from 'react'
import { RouteComponentProps } from 'react-router'
import Sidebar from '../../Components/Sidebar/Sidebar'
import routes from '../../Routes/dashboardRoutes'
import { Route } from 'react-router-dom'
export const Dashboard = (props: RouteComponentProps) => {
    return (
        <div className="h-100 w-100 d-flex" style={{ marginTop: "6rem" }}>
            <div className="w-25">
                <Sidebar />
            </div>
            {
                routes.map((item,index) => {
                    return (
                        <Route
                            key={index}
                            path={"/dashboard" + item.path}
                            exact={item.exact}
                            render={(props) => <item.Component {...props} />}
                        />
                    )
                })
            }
        </div>
    )
}
export default Dashboard;