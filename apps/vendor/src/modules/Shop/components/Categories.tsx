import React from "react";
import Category1 from "../../../assets/Images/category1.png";

const Categories: React.FC = () => {
  return (
    <div className='px-14 mt-16 3xl:mt-24 mb-28 font-Inter'>
      <div className='text-content-primary text-[35px] font-bold leading-normal'>
        Category
      </div>
      <div className='grid grid-cols-4 3xl:grid-cols-8 gap-x-5 gap-y-8 mt-10 3xl:mt-14'>
        {new Array(8).fill(0).map((_, i) => (
          <div key={i} className='w-full cursor-pointer hover:b'>
            <img className='w-12 h-12 mx-auto' src={Category1} alt='' />
            <div className='text-center text-content-primary text-[22px] font-normal leading-normal'>
              Dining appliances
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
