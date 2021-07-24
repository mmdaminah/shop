import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import routes from './Routes/mainRoutes'
import { Suspense } from 'react';
import Fotoer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
import ProductSlider from './Components/ProductSlider/ProductSlider';
import ProductCard from './Components/ProductCard/ProductCard';
function App() {
  return (
    <Router>
      <div className="app">
        <MyNavbar />
        <Carousel />
        <ProductSlider />
        <ProductCard />
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
