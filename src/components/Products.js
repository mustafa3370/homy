import React from 'react';


//data 
//import components 
import ProductSlider from '../components/ProductSlider'
import { products } from '../data';


const Products = () => {
  //destructure products
  const {title,subtitle} = products;
  return <section className ='section text-center'>
    <div className="container mx-auto">
      <div>
        <h2 className='title'>{title}</h2>
        <p className='max-w-[639px] mx-auto mb-[50px] lg:mb[70px]'>{subtitle}</p>
      </div>
      {/*slider*/}
      <ProductSlider/>
    </div>
  </section>;
};

export default Products;
