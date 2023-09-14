import React from "react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftArrow from "../../../../assets/Icons/LeftArrow";
import Kitchen from "../../../../assets/Images/kitchen.png";

const FeaturedCategories: React.FC = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className='mx-3'>
      <div>
        <div className='my-12'>
          <div className='font-Hind text-center text-custom-rose text-sm lg:text-base xl:text-lg 3xl:text-[22px] font-semibold uppercase'>
            TOP COLLECTIONS 2022
          </div>
          <div className='font-Manrope text-center text-content-primary text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold 3xl:leading-[50px] mt-4'>
            Featured Categories
          </div>
          <div className='font-Manrope max-w-[50rem] mx-auto text-center text-content-primary lg:text-lg 3xl:text-[22px] font-normal mt-4'>
            Elit rhoncus dui ullamcorper tristique aenean nascetur accumsan ac
            himenaeos adipiscing quam potenti ac senectus consequat.
          </div>
        </div>

        <div className='relative flex items-center'>
          <div className='categories-slider-prev absolute top-[42%] left-0 z-50'>
            <LeftArrow classes='w-10 h-10 text-content-primary cursor-pointer' />
          </div>
          <div className='categories-slider-next absolute top-[42%] right-0 z-50'>
            <LeftArrow classes='w-10 h-10 text-content-primary cursor-pointer rotate-180' />
          </div>

          <Swiper
            className='mx-10'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            loop
            effect='flip'
            flipEffect={{
              slideShadows: true,
            }}
            speed={800}
            navigation={{
              prevEl: ".categories-slider-prev",
              nextEl: ".categories-slider-next",
            }}
          >
            {new Array(15).fill(0).map((_, i) => (
              <SwiperSlide key={i} className='categories-slider-item '>
                <div>
                  <img src={Kitchen} className='w-full' alt='Category' />
                  <div className='text-center text-black 2xl:text-lg 3xl:text-2xl font-medium font-Hind mt-5 mb-2'>
                    Kitchen
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='xl:flex items-stretch my-12'>
        <div
          className='xl:w-4/12 grid grid-cols-2 gap-3 p-6 mr-2 2xl:mr-3 3xl:mr-5'
          style={{
            boxShadow: "0px 0px 12px 0px rgba(194, 194, 194, 0.25)",
          }}
        >
          <div>
            <img
              className='w-full'
              src='https://i.ibb.co/pjJhz6C/2f50755aa85f0b32575bd74dbfc9a88f.jpg'
              alt=''
            />
            <div className='text-black text-center text-sm 3xl:text-lg font-medium leading-snug font-Hind mt-2'>
              Best sellers
            </div>
          </div>
          <div>
            <img
              className='w-full'
              src='https://i.ibb.co/177KdTF/d95c25dcb78f2c1b69b6bc2c0778d108.png'
              alt=''
            />
            <div className='text-black text-center text-sm 3xl:text-lg font-medium leading-snug font-Hind mt-2'>
              Quick response
            </div>
          </div>
          <div>
            <img
              src='https://i.ibb.co/pjJhz6C/2f50755aa85f0b32575bd74dbfc9a88f.jpg'
              className='w-full'
              alt=''
            />
            <div className='text-black text-center text-sm 3xl:text-lg font-medium leading-snug font-Hind mt-2'>
              Most popular
            </div>
          </div>
          <div>
            <img
              src='https://i.ibb.co/177KdTF/d95c25dcb78f2c1b69b6bc2c0778d108.png'
              className='w-full'
              alt=''
            />
            <div className='text-black text-center text-sm 3xl:text-lg font-medium leading-snug font-Hind mt-2'>
              On-time Delivery
            </div>
          </div>
        </div>

        <div className='xl:w-8/12 mt-6 xl:mt-0'>
          <img
            className='min-h-full'
            src='https://i.ibb.co/b74rNBF/image-27.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
