import React from 'react';
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import MyCarousel from './Components/Carousel/Carousel';
import ProductSlider from './Components/ProductSlider/ProductSlider';
function App() {
  return (
    <div className="app">
      <MyNavbar />
      <div className="w-100 container">
        <MyCarousel />
        <ProductSlider />
      </div>
    </div>
  );
}

export default App;
