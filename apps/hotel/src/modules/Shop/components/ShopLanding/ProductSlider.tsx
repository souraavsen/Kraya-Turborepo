import React, { useEffect } from "react";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowCircle from "../../../../assets/Icons/ArrowCircle";
import { shopSliderItems } from "../../constants";

const ProductSlider: React.FC = () => {
  SwiperCore.use([Navigation, EffectFade]);

  useEffect(() => {
    document.querySelectorAll(".shop_slider").forEach((element) => {
      if (element.id.toString() === `shop_slider_0`) {
        element.classList.add("shop_pagination_active");
      } else {
        element.classList.remove("shop_pagination_active");
        element.classList.add("shop_pagination");
      }
    });
  }, []);

  const handlePagination = (e: any) => {
    console.log(e.activeIndex);

    document.querySelectorAll(".shop_slider").forEach((element) => {
      if (element.id.toString() === `shop_slider_${e.activeIndex}`) {
        element.classList.add("shop_pagination_active");
      } else {
        element.classList.remove("shop_pagination_active");
        element.classList.add("shop_pagination");
      }
    });
  };

  return (
    <div className='mt-1'>
      <div className='relative flex items-center'>
        <div className='shop-slider-prev hidden md:block ml-5 absolute top-[42%] left-0 z-50'>
          <ArrowCircle classes='w-11 h-11 text-content-primary cursor-pointer' />
        </div>
        <div className='shop-slider-next hidden md:block mr-5 absolute top-[42%] right-0 z-50'>
          <ArrowCircle classes='w-11 h-11 text-content-primary cursor-pointer rotate-180' />
        </div>

        <div className='w-full flex items-center justify-center absolute -bottom-10 lg:bottom-0 z-10 mb-0 2xl:mb-1 3xl:mb-2.5'>
          <div className='flex items-center'>
            {shopSliderItems.map((_, i) => (
              <div key={i} className='flex items-center'>
                <div className='text-sm xl:text-lg 2xl:text-[22px] font-normal leading-13 font-Manrope'>
                  {i + 1 < 10 ? "0" + (i + 1) : i + 1}
                </div>
                <div id={`shop_slider_${i}`} className='shop_slider ml-1 mr-4'>
                  &nbsp;
                </div>
              </div>
            ))}
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          navigation={{
            prevEl: ".shop-slider-prev",
            nextEl: ".shop-slider-next",
          }}
          speed={400}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          onSlideChange={handlePagination}
        >
          {shopSliderItems.map((img, i) => (
            <SwiperSlide key={i} className='shop-slider-item'>
              <div className='relative w-full h-full bg-bkg-primary rounded-sm border-gray-200 mx-4 md:px-4 2xl:px-5 3xl:px-8'>
                <div>
                  <img
                    className='min-w-full cursor-pointer'
                    src={img}
                    alt='Banner'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
