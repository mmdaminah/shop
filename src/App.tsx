import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import routes from './Routes/mainRoutes'
import { Suspense } from 'react';
import Fotoer from './Components/Footer/Footer'
function App() {
  document.title="Mamad Shop"
  return (
    <Router>
      <div className="app">
        <MyNavbar />
        
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {
              routes.map(({ path, exact, Component },index) => {
                return (
                  <Route
                    key={path+index}
                    path={path}
                    exact={exact}
                    render={(props) => <Component {...props} />}
                  />)
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
