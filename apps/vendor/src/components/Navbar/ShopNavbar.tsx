import React from "react";
import { BrandLogo } from "../../assets/Icons/BrandLogo";
import { Link } from "react-router-dom";
import Avatar from "../../assets/Images/avatar.png";
import RingingBell from "../../assets/Icons/RingingBell";
import { HeartOutlined } from "@ant-design/icons";

const ShopNavbar: React.FC = () => {
  return (
    <div className='bg-blue-600 flex items-center justify-between py-4 3xl:py-5 px-10'>
      <div className='flex items-center'>
        <div className='flex items-center gap-1 mr-12'>
          <BrandLogo classes='w-6 h-7 text-white' />
          <div className='text-white text-2xl font-semibold leading-snug font-Poppins'>
            Kraya
          </div>
        </div>
        <div className='flex items-center font-Inter'>
          <Link
            to={"category"}
            className='text-white text-[15px] font-semibold leading-snug mr-10'
          >
            Category
          </Link>
          <Link
            to={"brand"}
            className='text-white text-[15px] font-semibold leading-snug'
          >
            Brand
          </Link>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <HeartOutlined className='text-white text-[1.5rem] cursor-pointer' />
        </div>
        <div>
          <RingingBell classes='text-white h-7 w-7 cursor-pointer mx-8' />
        </div>

        <div className='rounded-full overflow-hidden'>
          <img className='w-8 h-8 3xl:w-9 3xl:h-9' src={Avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default ShopNavbar;
