import React from "react";
//import data
import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";
const NewItems = () => {
  //destructure new InStore
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:relative">
          {/*text*/}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">{title}</h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="hover:border-b border-primary lg:items-center font-medium transition-all "
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          {/*slider*/}
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
