import { StarFilled } from "@ant-design/icons";
import React from "react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftArrow from "../../../assets/Icons/LeftArrow";
import LocationPin from "../../../assets/Icons/LocationPin";
import {
  default as newProduct1,
  default as newProduct7,
} from "../../../assets/Images/newproduct1.png";
import {
  default as newProduct2,
  default as newProduct5,
} from "../../../assets/Images/newproduct2.png";
import {
  default as newProduct3,
  default as newProduct6,
} from "../../../assets/Images/newproduct3.png";
import newProduct8 from "../../../assets/Images/newproduct4.png";
import newProduct4 from "../../../assets/Images/newproduct5.png";

const TopVendors: React.FC = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className='bg-bkg-primary px-14 py-16 3xl:py-22'>
      <div className='text-content-primary text-[35px] mb-12 font-bold leading-normal'>
        Top rated vendors
      </div>
      <div className='relative flex items-center'>
        <div>
          <LeftArrow classes='carousel-prev text-content-primary w-[30px] h-[30px] -ml-8 cursor-pointer' />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{ prevEl: ".carousel-prev", nextEl: ".carousel-next" }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {new Array(8).fill(0).map((_, i) => (
            <SwiperSlide key={i} className='carousel-item'>
              <div className='max-w-[22rem]'>
                <div>
                  <img
                    className='w-auto rounded-[10px]'
                    src={newProducts[i]}
                    alt=''
                  />
                </div>
                <div className='p-4'>
                  <div>
                    <span className='text-content-primary text-lg font-semibold leading-7 mr-2.5'>
                      Tromp Crest Bridge
                    </span>
                    <span className='text-blue-500 text-lg font-semibold leading-7'>
                      $1,750.00
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm font-medium leading-tight mt-2.5'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className='flex items-center my-4'>
                    <div className='mr-4 flex items-center'>
                      <StarFilled className='text-[#FFAE43] mr-1' />
                      <div className='text-gray-500 text-sm font-medium leading-tight'>
                        4.5
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <LocationPin classes='w-[18px] h-[18px] text-content-primary mr-1' />
                      <span className='text-gray-500 text-sm font-medium leading-tight'>
                        3137 Denesik Loaf
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='text-gray-500 text-sm font-medium leading-tight'>
                      13 Hotel recently enquired
                    </div>
                    <button className='px-3 py-2 bg-blue-500 rounded-[5px] shadow justify-center items-center gap-1.5 inline-flex'>
                      <div className='text-white text-sm font-semibold leading-tight'>
                        Enquiry
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <LeftArrow classes='carousel-next text-content-primary w-[30px] h-[30px] rotate-180 -mr-10 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default TopVendors;

const newProducts = [
  newProduct1,
  newProduct2,
  newProduct3,
  newProduct4,
  newProduct5,
  newProduct6,
  newProduct7,
  newProduct8,
];
