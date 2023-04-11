import React from 'react';
import img3 from './../../assets/clock.jpg';
import Calendar from './Calendar';

const BazarSchedule = () => {
  return (
    <>
    <div className='mb-[20px]'>
      <div className='my-[40px] flex flex-col items-center justify-center'>
          <h2 className='text-3xl  font-Robbi font-bold text-gray-800'>Bazar Schedule</h2>
           <h4 className=' text-lg font-abc text-gray-800 font-bold'>February 2023</h4>
       
      </div>
    <div className=" grid grid-cols-3  px-[40px] mx-auto gap-4">
     <div className=' grid col-span-2  '>
        <Calendar/>
     </div>
     <div className=' grid col-span-1'>
       <img src={img3} alt="" className='  rounded-md' />
     </div>
       
     </div>
    </div>
    </>
  );
};

export default BazarSchedule;