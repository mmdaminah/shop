import React from 'react';
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import MyCarousel from './Components/Carousel/Carousel';
import ProductSlider from './Components/ProductSlider/ProductSlider';
import ProductCard from './Components/ProductCard/ProductCard';
function App() {
  return (
    <div className="app">
      <MyNavbar />
      <div className="w-100 container">
        <MyCarousel />
        <ProductSlider />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
