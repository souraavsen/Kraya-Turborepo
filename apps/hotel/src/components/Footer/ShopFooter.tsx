import {
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined
} from "@ant-design/icons";
import React from "react";
import { BrandLogo } from "../../assets/Icons/BrandLogo";
import FacebookFilledCircel from "../../assets/Icons/FacebookFilledCircel";

const ShopFooter: React.FC = () => {
  return (
    <div className='pt-28 pb-36 bg-blue-600 font-Poppins'>
      <div className='grid grid-cols-4 px-16'>
        <div>
          <div className='flex items-center gap-1 mr-12'>
            <BrandLogo classes='w-6 h-7 text-white' />
            <div className='text-white text-2xl font-semibold leading-snug font-Poppins'>
              Kraya
            </div>
          </div>
          <div className='text-white text-lg 3xl:text-2xl font-medium mt-6'>
            Streamline and Elevate <br />
            Your Hospitality Business with Ease!
          </div>
        </div>

        <div>
          <div className='text-white text-2xl font-semibold leading-snug'>
            Quick Links
          </div>
          <div className='mt-6'>
            <div className='text-white text-lg font-normal'>About us</div>
            <div className='text-white text-lg font-normal'>Careers</div>
            <div className='text-white text-lg font-normal'>Contact us</div>
            <div className='text-white text-lg font-normal'>Feedback</div>
          </div>
        </div>

        <div>
          <div className='text-white text-2xl font-semibold leading-snug'>
            Quick Links
          </div>
          <div className='mt-6'>
            <div className='text-white text-lg font-normal'>About us</div>
            <div className='text-white text-lg font-normal'>Careers</div>
            <div className='text-white text-lg font-normal'>Contact us</div>
            <div className='text-white text-lg font-normal'>Feedback</div>
          </div>
        </div>

        <div>
          <div>
            <div className='text-white text-2xl font-semibold leading-snug'>
              Social
            </div>
            <div className='flex items-center gap-2.5 mt-6'>
              <div>
                <FacebookFilledCircel />
              </div>
              <div>
                <LinkedinFilled className='text-2xl text-white' />
              </div>
              <div>
                <TwitterOutlined className='text-2xl text-white' />
              </div>
              <div>
                <InstagramOutlined className='text-2xl text-white' />
              </div>
            </div>
          </div>
          <div className='mt-4 3xl:mt-8'>
            <div className='text-white text-xl font-semibold leading-snug'>
              Contact Us
            </div>
            <div className='text-white text-lg font-normal leading-none mt-1'>
              support@Kraya.me
              <br />
              <br />
              sales@Kraya.me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFooter;
