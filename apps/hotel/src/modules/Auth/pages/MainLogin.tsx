import React from "react";
import Hotel from "../../../assets/Icons/Hotel";
import { Link } from "react-router-dom";
import UserIcon from "../../../assets/Icons/UserIcon";

const MainLogin: React.FC = () => {
  return (
    <div className='min-h-screen py-30 relative overflow-hidden bg-bkg-primary'>
      <div className='w-[54rem] h-[39rem] bg-bkg-secondary rounded-[84rem] absolute -right-[49%] -top-[62%] rotate-[50] ' />

      <div className='w-[80%] mt-8 z-50 relative'>
        <div className='ml-40 min-h-full '>
          <div className='text-3xl font-semibold font-BeVietnam mb-10 text-content-primary'>
            Login as
          </div>
          <div className='flex items-center'>
            <Link
              to={"hotel"}
              className='shadow-sm rounded bg-bkg-primary cursor-pointer px-12 py-10 font-Inter font-semibold  flex flex-col items-center mr-6 border'
            >
              <Hotel classes='w-20 text-content-primary' />
              <div className='text-base text-content-primary'>Hotel User</div>
            </Link>
            <Link
              to={"vendor"}
              className='shadow-sm rounded bg-bkg-primary cursor-pointer px-12 py-10 font-Inter font-semibold  flex flex-col items-center border'
            >
              <UserIcon classes='w-20 text-content-primary' />
              <div className='text-base text-content-primary'>Vendor</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
