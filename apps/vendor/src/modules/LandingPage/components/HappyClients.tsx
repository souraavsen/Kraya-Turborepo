import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../../assets/Images/star.png";

import ArrowCircle from "../../../assets/Icons/ArrowCircle";

const HappyClients: React.FC = () => {
  SwiperCore.use([Navigation]);

  const contentList = [
    {
      title: "Briana Patton",
      description: "This is the content of Slide 1.",
    },
    {
      title: "Imelda Cowen",
      description: "This is the content of Slide 1.",
    },
    {
      title: "Alfred Walton",
      description: "This is the content of Slide 2.",
    },
    {
      title: "Barak Obama",
      description: "This is the content of Slide 2.",
    },
  ];

  return (
    <div className='mt-24 mb-36'>
      <div className='flex justify-between items-center mb-16'>
        <div className='text-content-secondary text-[40px] font-bold leading-[81px] tracking-tight'>
          GroundDesk is loved by users
        </div>
        <div className='flex items-center gap-5'>
          <div className='carousel-prev'>
            <ArrowCircle classes='w-16 h-16 text-gray-600 hover:text-gray-800 cursor-pointer' />
          </div>
          <div className='carousel-next'>
            <ArrowCircle classes='w-16 h-16 text-gray-600 hover:text-gray-800 cursor-pointer rotate-180' />
          </div>
        </div>
      </div>

      <div className='carousel-container'>
        <Swiper
          slidesPerView={3}
          // spaceBetween={30}
          navigation={{ prevEl: ".carousel-prev", nextEl: ".carousel-next" }}
        >
          {contentList.map((content, index) => (
            <SwiperSlide key={index} className='carousel-item'>
              <div className='w-auto h-auto relative bg-bkg-primary rounded-[20px] border border-gray-200 mx-3 p-8'>
                <div className='flex items-center'>
                  <div className='mr-5'>
                    <img
                      className='w-[72px] h-[72px] rounded-full'
                      src='https://via.placeholder.com/72x72'
                    />
                  </div>
                  <div>
                    <div className='text-content-primary text-lg font-semibold leading-7'>
                      {content.title}
                    </div>
                    <div className='text-content-primary text-sm font-normal leading-snug'>
                      Manager
                    </div>
                  </div>
                </div>

                <div className='w-auto text-content-primary text-opacity-60 text-sm font-normal leading-normal mt-6'>
                  Sed mattis est eget penatibus mauris, sed condimentum vitae
                  viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget
                  nisl pellentesque non, porttitor. Vitae et vestibulum ac id.
                  Dui aliquet porttitor libero consequat volutpat eget sed
                  turpis. Feugiat maecenas commodo et morbi morbi gravida.
                </div>

                <div className='flex items-center gap-[1px] mt-6'>
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyClients;
