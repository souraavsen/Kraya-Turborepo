import React from "react";
import { Link } from "react-router-dom";

const Copyright: React.FC = () => {
  return (
    <div className='w-full h-18 px-6 3xl:px-14 py-6 bg-bkg-primary border-t border-gray-200 justify-between items-center gap-8 inline-flex font-Inter'>
      <div className='rounded-[5px] justify-center items-center gap-1.5 flex'>
        <div className='text-content-primary text-[10px] xl:text-sm 3xl:text-base'>
          <span className='font-normal'>© Copyright </span>
          <span className='font-bold'>Kraya</span>
          <span className='font-normal'>. All Rights Reserved</span>
        </div>
      </div>
      <div className='rounded-[5px] justify-center items-center gap-1.5 flex'>
        <Link
          to={"/contact-us"}
          className='text-content-primary text-xs xl:text-sm 3xl:text-base font-semibold leading-snug'
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
