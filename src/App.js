import React from 'react';

// import components
import Hero from "./components/Hero";
import  Features  from './components/Features';
import NewItems from './components/NewItems';
import FeaturesSecond from './components/FeaturesSecond';
import Products from './components/Products';


const App = () => {
  return <div className="w-full max-w-[1540px] mx-auto bg-bg">
    <Hero/>
    <Features/>
    <NewItems/>
    <FeaturesSecond/>
    <Products/>
  </div>;
};

export default App;
