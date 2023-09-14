import React from "react";
import Avatar from "../../../../assets/Images/avatar.png"

const Vendor: React.FC = () => {
  return (
    <div className='flex gap-3 font-Inter'>
      <div>
        <img className='w-10 h-10 3xl:w-12 3xl:h-12 rounded-full' src={Avatar} alt='' />
      </div>
      <div>
        <div className='text-content-primary text-sm 3xl:text-base font-normal'>
          Liling Rongxiang Ceramic Co. Ltd.
        </div>
        <div className='text-neutral-500 text-sm 3xl:text-base font-normal'>
          Alice Guo
        </div>
      </div>
    </div>
  );
};

export default Vendor;
