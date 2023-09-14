import { DownOutlined, StarFilled, UpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import SwiperCore from "swiper/core";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Chart from "../../../../assets/Icons/Chart";
import Wishicon from "../../../../assets/Icons/Wishicon";
import { handleFetchProductDetails } from "../../services";
import { ProductPropsT } from "../../types";

const Product: React.FC<ProductPropsT> = ({ displayType }) => {
  SwiperCore.use([Navigation, Pagination]);
  const [productDetails, setProductDetails] = useState<any>({});
  const [productPreviewImage, setProductPreviewImage] = useState<number>(0);
  const [inWish, setInWish] = useState<boolean>(false);

  console.log(productPreviewImage);

  useEffect(() => {
    (async () => {
      const res = await handleFetchProductDetails(2);
      if (res?.status === 200) {
        setProductDetails(res.data);
      }
    })();
  }, []);

  return (
    <div className='p-2 border flex'>
      <div className={`${displayType === "row" ? "w-full" : "w-9/12"} `}>
        <div>
          <div
            className={`${
              displayType === "row" ? "flex" : null
            } gap-3 3xl:gap-5`}
          >
            {/* <div className='relative w-80 2xl:w-72  3xl:w-96 '> */}

            <div
              className={`relative hidden md:block ${
                displayType === "row" && "w-60 lg:w-80 2xl:w-72 3xl:w-96 "
              }`}
            >
              <div className='absolute top-1/2 left-1 product-big-image-prev text-3xl leading-[0] font-mono text-white z-50 cursor-pointer'>
                {"<"}
              </div>
              <div className={``}>
                <Swiper
                  className='z-0 w-full'
                  slidesPerView={1}
                  direction='horizontal'
                  slidesPerGroup={1}
                  speed={800}
                  navigation={{
                    prevEl: ".product-big-image-prev",
                    nextEl: ".product-big-image-next",
                  }}
                >
                  {productDetails?.images?.map((img: string, i: number) => (
                    <SwiperSlide key={i} className='relative bg-bkg-primary'>
                      <img
                        // className='mx-auto w-60 2xl:h-64 3xl:w-full 3xl:h-[24rem]'
                        className='mx-auto w-full 2xl:h-64 3xl:w-full 3xl:h-[24rem]'
                        src={img}
                        alt=''
                      />
                      {displayType === "grid" ? (
                        <div
                          className='absolute top-2 right-2'
                          onClick={() => {
                            setInWish(!inWish);
                          }}
                        >
                          <Wishicon
                            classes={`${
                              inWish ? "text-custom-rose" : "text-white"
                            } transion-color delay-150 duration-200 w-8 h-8 cursor-pointer`}
                          />
                        </div>
                      ) : null}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='absolute right-1 top-1/2 product-big-image-next text-3xl leading-[0] font-mono text-white z-50 cursor-pointer'>
                {">"}
              </div>
            </div>

            <div className='w-full font-Inter'>
              <div
                id='details_container'
                className={`${displayType === "grid" ? "mt-2" : "mt-0"}`}
              >
                <div className='mb-4 3xl:mb-6'>
                  <div className='flex items-center justify-between'>
                    <div className='text-content-primary text-xs lg:text-sm 3xl:text-base font-semibold mb-1 3xl:mb-2'>
                      Shanghai Karry Industrial Co. Ltd.
                    </div>

                    {displayType === "row" ? (
                      <div
                        onClick={() => {
                          setInWish(!inWish);
                        }}
                      >
                        <Wishicon
                          classes={`${
                            inWish ? "text-custom-rose" : "text-white"
                          } transion-color delay-150 duration-200 w-8 h-8 cursor-pointer`}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className='text-content-primary text-xs lg:text-sm'>
                    <span>Location :</span>
                    <span className='font-semibold'> India</span>
                  </div>
                </div>

                <div
                  className={`${
                    displayType === "grid" ? "my-2" : "mt-2 mb-4 3xl:mb-6"
                  }`}
                >
                  <div className='flex gap-12'>
                    <div className='text-content-primary text-xs xl:text-sm '>
                      <div className='mb-2 whitespace-nowrap'>
                        Rating & Review
                      </div>
                      <div className='flex items-center gap-[1px]'>
                        <StarFilled className='text-orange-500 p-0 m-0 leading-[0]' />
                        <span>
                          4.8(37)
                          <span className='font-semibold ml-1'>India</span>
                        </span>
                      </div>
                    </div>
                    <div className='text-content-primary text-xs xl:text-sm'>
                      <div className='mb-2 whitespace-nowrap'>
                        <span>Response time : </span>
                        <span>90%</span>
                      </div>
                      <div>
                        <button
                          className={`flex justify-center items-center transition-all duration-200`}
                          onClick={() => {}}
                        >
                          <Chart classes='w-5 text-custom-rose mr-1.5' />
                          <span className='text-sm 3xl:text-base font-medium leading-normal text-custom-rose'>
                            Brochure
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {displayType === "row" ? (
                <div className='relative hidden md:block'>
                  <div className='absolute top-1/2 left-1 product-image-prev text-3xl leading-[0] font-mono text-white z-50 cursor-pointer'>
                    {"< "}
                  </div>

                  <div className='absolute right-1 top-1/2 product-image-next text-3xl leading-[0] font-mono text-white z-50 cursor-pointer'>
                    {">"}
                  </div>

                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    speed={800}
                    navigation={{
                      prevEl: ".product-image-prev",
                      nextEl: ".product-image-next",
                    }}
                  >
                    {productDetails?.images?.map((img: string, i: number) => (
                      <SwiperSlide
                        key={i}
                        style={{ width: "auto" }}
                        className='bg-bkg-primary'
                      >
                        <div
                          className='mx-2 md:mx-0 my-1.5 2xl:my-2 3xl:my-2.5 cursor-pointer'
                          onClick={() => setProductPreviewImage(i)}
                        >
                          <img
                            className='w-20 md:w-22 2xl:w-24 3xl:w-42 h-20 md:h-22 2xl:h-24 3xl:h-42'
                            src={img}
                            alt=''
                          />
                          <div className='text-content-primary text-[10px] 3xl:text-xs leading-5 text-center font-normal'>
                            ₹111.13 - ₹188.06
                          </div>
                          <div className='text-content-primary text-[10px] 3xl:text-xs text-center font-normal'>
                            MOQ: 1000 pieces
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* <Swiper
                    className='z-0 '
                    slidesPerView={2}
                    slidesPerGroup={1}
                    direction='horizontal'
                    breakpoints={{
                      640: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1360: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1440: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                      1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                      },
                      2040: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                      },
                    }}
                    speed={800}
                    navigation={{
                      prevEl: ".product-image-prev",
                      nextEl: ".product-image-next",
                    }}
                  >
                    {productDetails?.images?.map((img: string, i: number) => (
                      <SwiperSlide key={i} className='bg-bkg-primary'>
                        <div
                          className='mx-2 md:mx-0 my-1.5 2xl:my-2 3xl:my-2.5 cursor-pointer'
                          onClick={() => setProductPreviewImage(i)}
                        >
                          <img
                            className='w-20 md:w-20 2xl:w-24 3xl:w-29'
                            src={img}
                            alt=''
                          />
                          <div className='text-content-primary text-[10px] 3xl:text-xs leading-5 text-center font-normal'>
                            ₹111.13 - ₹188.06
                          </div>
                          <div className='text-content-primary text-[10px] 3xl:text-xs font-normal'>
                            MOQ: 1000 pieces
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper> */}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        {displayType === "grid" ? (
          <div className='relative ml-2'>
            <div className='w-auto -mt-1'>
              <Swiper
                className='md:h-[10rem] xl:h-[14rem] 2xl:h-[16rem] 3xl:h-[27rem]'
                slidesPerView={2}
                direction='vertical'
                slidesPerGroup={1}
                speed={800}
                navigation={{
                  prevEl: ".product-image-prev",
                  nextEl: ".product-image-next",
                }}
              >
                {productDetails?.images?.map((img: string, i: number) => (
                  <SwiperSlide key={i} className='bg-bkg-primary'>
                    <div
                      className='mx-1 md:mx-0 cursor-pointer my-1'
                      onClick={() => setProductPreviewImage(i)}
                    >
                      <img
                        className='w-20 md:w-22 2xl:w-24 3xl:w-42 h-20 md:h-22 2xl:h-24 3xl:h-32'
                        src={img}
                        alt='Product Image'
                      />
                      <div className='text-content-primary text-[10px] 3xl:text-sm leading-5 whitespace-nowrap font-normal text-center mt-2'>
                        ₹111.13 - ₹188.06
                      </div>
                      <div className='text-content-primary whitespace-nowrap text-[10px] 3xl:text-sm font-normal text-center mb-2'>
                        MOQ: 1000 pieces
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='w-10/12 hidden my-1.5 2xl:my-1 3xl:my-2.5 md:flex items-center justify-between px-1'>
              <UpOutlined className='product-image-prev text-content-primary cursor-pointer text-sm' />
              <DownOutlined className='product-image-next text-content-primary cursor-pointer text-sm' />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Product;

{
  /* {displayType === "grid" ? (
              <div className='w-24 3xl:w-32 -mt-1'>
                <Swiper
                  className='md:h-[40vh] xl:h-[80vh] 2xl:h-[45vh] 3xl:h-[24rem]'
                  slidesPerView={4}
                  direction='horizontal'
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      direction: "vertical",
                    },
                    768: {
                      slidesPerView: 3,
                      direction: "vertical",
                    },
                    1360: {
                      slidesPerView: 2,
                      direction: "vertical",
                    },
                    1440: {
                      slidesPerView: 4,
                      direction: "vertical",
                    },
                  }}
                  slidesPerGroup={1}
                  speed={800}
                  navigation={{
                    prevEl: ".product-image-prev",
                    nextEl: ".product-image-next",
                  }}
                >
                  {productDetails?.images?.map((img: string, i: number) => (
                    <SwiperSlide key={i} className='bg-bkg-primary'>
                      <div
                        className='h-20 w-20 md:h-20 md:w-20 2xl:h-24 2xl:w-24 3xl:h-23 3xl:w-23 mx-1 md:mx-0 cursor-pointer my-1'
                        onClick={() => setProductPreviewImage(i)}
                      >
                        <img
                          className='w-11/12 mx-auto '
                          src={img}
                          alt='Product Image'
                        />
                        <div className='text-content-primary text-[10px] 3xl:text-xs leading-5 whitespace-nowrap font-normal text-center'>
                          ₹111.13 - ₹188.06
                        </div>
                        <div className='text-content-primary text-[10px] 3xl:text-xs font-normal text-center'>
                          MOQ: 1000 pieces
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : null} */
}
