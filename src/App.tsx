import React from 'react';
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import MyCarousel from './Components/Carousel/Carousel';
function App() {
  return (
    <div className="app">
      <MyNavbar />
      <div className="w-100 container">
        <MyCarousel />
      </div>
    </div>
  );
}

export default App;
