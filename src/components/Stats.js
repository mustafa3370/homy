import React from 'react';
import {stats} from '../data';

const Stats = () => {
  return <div className =' rounded-[20px] p-[0.5rem] shadow-2xl bg-stats'>
    <div className="flex flex-wrap gap-y-8">
      {stats.map((item,index)=>{
        return <div key={index} className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r
        lg:even:border-r lg:even:last:border-none'>
          <div className='text-white text-2xl font-semibold lg:text-4xl'>{item.value}</div>
          <div className='text-white text-base font-light max-w-[110px] mx-auto lg:text-xl'>{item.text}</div>

        </div>
      })}
    </div>
  </div>;
};

export default Stats;
