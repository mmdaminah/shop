import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import MyCarousel from './Components/Carousel/Carousel';
import ProductSlider from './Components/ProductSlider/ProductSlider';
import ProductCard from './Components/ProductCard/ProductCard';
import routes from './Routes/mainRoutes'
function App() {
  return (
    <Router>
      <div className="app">
        <MyNavbar />
        <div className="w-100 container">
          <MyCarousel />
          <ProductSlider />
          <ProductCard />
        </div>
      </div>
      <Switch>
        {
          routes.map(({ path, exact, component }) => {
            return (
              <Route
                path={path}
                exact={exact}
                render={(props) => <component {...props} />}
              />)
          }
        }
      </Switch>
    </Router>
  );
}

export default App;
