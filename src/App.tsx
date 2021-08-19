import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import routes from './Routes/mainRoutes'
import { Suspense } from 'react';
import Fotoer from './Components/Footer/Footer'
import { Spinner } from 'react-bootstrap';
import PrivateRotue from './Routes/PrivateRotue';
function App() {
  document.title = "فروشگاه آل دیجیتال"
  return (
    <Router>
      <div className="app bg-light">
        <MyNavbar /><Spinner animation="border" variant="primary" />
        <Suspense fallback={<Spinner animation="border" variant="primary" style={{ width: "300px", height: "300px", position: "absolute", top: "25%", right: "35%" }} />}>
          <Switch>
            {
              routes.map(({ path, exact, Component, loginRequired }, index) => {
                return (
                  <PrivateRotue
                    key={path + index}
                    path={path}
                    exact={exact}
                    loginRequired={loginRequired}
                    Component={Component}
                  />
                )
              })
            }
          </Switch>
          <Fotoer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
