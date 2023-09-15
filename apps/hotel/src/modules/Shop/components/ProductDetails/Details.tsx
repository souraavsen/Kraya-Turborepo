import {
  DownOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  StarFilled,
  UpOutlined,
} from "@ant-design/icons";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Chart from "../../../../assets/Icons/Chart";
import LocationPin from "../../../../assets/Icons/LocationPin";
import {Button} from "shared";

const Details: React.FC<any> = ({
  productDetails,
  productPreviewImage,
  setProductPreviewImage,
}) => {
  return (
    <div className='max_page_width mb-20 relative'>
      <div className='flex items-center xl:float-left min-h-full flex-col xl:sticky top-10 xl:w-6/12'>
        <div className='flex flex-col-reverse md:flex-row justify-center xl:justify-start'>
          <div className='flex md:block items-center'>
            <LeftOutlined className='text-content-primary md:hidden product-image-prev cursor-pointer text-sm' />
            <Swiper
              className='max-w-[80vw] md:h-[40vh] xl:h-[80vh] 2xl:h-[72vh] 3xl:h-[68vh]'
              slidesPerView={4}
              direction='horizontal'
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  direction: "vertical",

                  // spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  direction: "vertical",
                },
                1360: {
                  slidesPerView: 5,
                  direction: "vertical",

                  // spaceBetween: 15,
                },
                1440: {
                  slidesPerView: 6,
                  direction: "vertical",

                  // spaceBetween: 20,
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
                    className='h-20 w-20 md:h-20 md:w-20 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20 mx-1 md:mx-0 my-1.5 2xl:my-2 3xl:my-2.5 cursor-pointer'
                    onClick={() => setProductPreviewImage(i)}
                  >
                    <img className='w-full h-full ' src={img} alt='' />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <RightOutlined className='text-content-primary md:hidden product-image-next cursor-pointer text-sm' />

            <div>
              <div className='hidden my-1.5 2xl:my-2 3xl:my-2.5 md:flex items-center justify-between px-1'>
                <UpOutlined className='product-image-prev text-content-primary cursor-pointer text-sm' />
                <DownOutlined className='product-image-next text-content-primary cursor-pointer text-sm' />
              </div>
            </div>
          </div>

          <div className='w-full mx-auto'>
            <img
              className='w-full md:w-auto md:h-[40vh] xl:h-[80vh] 2xl:h-[70vh] 3xl:h-[68vh] md:ml-2 2xl:ml-3 3xl:ml-4 my-1.5 2xl:my-2 3xl:my-2.5'
              src={productDetails?.images?.[productPreviewImage]}
              alt='Product Preview'
            />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className='xl:w-[47%]  xl:ml-auto mt-6 xl:mt-0'>
        <div className='w-12 h-5 flex items-center justify-center bg-gray-100 rounded-md'>
          <div className='text-gray-800 text-xs 3xl:text-sm font-semibold leading-normal'>
            New!
          </div>
        </div>
        <div className='mt-2 3xl:mt-4 text-content-primary text-sm 3xl:text-base font-normal leading-snug'>
          {productDetails.description}
        </div>
        <div className='flex items-center mt-2'>
          <StarFilled className='text-orange-500 mr-1.5' />
          <div>
            <span className='text-content-primary text-sm font-normal'>
              {productDetails.rating}({productDetails.rating_quanity}){" "}
            </span>
            <span className='text-content-primary text-sm font-semibold'>
              {productDetails.region}
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-start mt-4 3xl:mt-8'>
          <div className='flex flex-wrap items-center gap-x-5 gap-y-3'>
            {productDetails?.price_range?.map((offer: any, i: number) => (
              <div key={i}>
                <div className='text-stone-500 text-xs lg:text-sm 3xl:text-base font-normal'>
                  {offer.quantity} pieces
                </div>
                <div className='text-orange-500 text-xs lg:text-sm 3xl:text-base font-bold'>
                  ₹{offer.price}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-5'>
            <div className='text-content-primary text-sm 3xl:text-base font-normal leading-snug'>
              Color
            </div>
            <div className='flex items-center gap-1 mt-2'>
              {productDetails?.colors?.map(
                (color: { img: string }, i: number) => (
                  <img key={i} src={color?.img} className='w-10 h-10' alt='' />
                )
              )}
            </div>
          </div>

          <div className='mt-5'>
            <div className='text-content-primary text-sm 3xl:text-base font-normal leading-snug'>
              Capacity
            </div>
            <div className='flex flex-wrap items-center gap-1.5 mt-2.5'>
              {productDetails?.Capacities?.map(
                (capacity: string, i: number) => (
                  <div
                    key={i}
                    className='px-2 py-[1px] rounded-[1px] border border-blue-500 justify-center items-center inline-flex'
                  >
                    <div className='text-blue-500 text-xs 3xl:text-sm font-normal leading-snug'>
                      {capacity}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className='mt-6 xl:mt-7 3xl:mt-10 flex items-center gap-2.5'>
            <Button
              title='Add to Wishlist'
              icon={
                <HeartOutlined className='w-3.5 h-3.5 xl:w-4 xl:h-4 3xl:w-5 3xl:h-5 text-content-accent' />
              }
              extraClassName='bg-btn-blue text-content-accent'
              handlerEvent={() => {}}
            />

            <Button
              title='Brochure'
              icon={<Chart classes='w-5 text-custom-rose' />}
              extraClassName='text-custom-rose'
              handlerEvent={() => {}}
            />
          </div>

          <div className='border p-3 lg:-4 2xl:p-5 3xl:p-6 mt-5'>
            <div className='text-content-primary text-xs lg:text-sm 3xl:text-base font-semibold mb-6'>
              {productDetails?.company_details?.name}
            </div>

            <div className='md:flex items-center gap-2 2xl:gap-3 3xl:gap-4'>
              <div className='flex gap-2 2xl:gap-3 3xl:gap-4'>
                <div className='w-20 h-20 border border-zinc-200 flex justify-center items-center'>
                  <img
                    className='w-18 h-11'
                    src={productDetails?.company_details?.avatar}
                  />
                </div>

                <div className='flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className='justify-start items-center gap-1.5 3xl:gap-2.5 inline-flex'>
                    <LocationPin classes='w-3 text-content-primary' />
                    <div className='text-content-primary text-xs lg:text-sm font-normal'>
                      {productDetails?.company_details?.location}
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-1.5 3xl:gap-2.5 '>
                      <StarFilled className='text-orange-600' />
                      <div>
                        <span className='text-content-primary text-xs lg:text-sm font-normal'>
                          {productDetails?.rating}(
                          {productDetails?.rating_quanity})
                        </span>
                        <span className='text-content-primary text-xs lg:text-sm font-semibold ml-1'>
                          {productDetails?.region}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-content-primary text-xs lg:text-sm 3xl:text-base font-normal'>
                    {productDetails?.company_details?.type}
                  </div>
                </div>
              </div>

              <div className='ml-1 flex gap-4 mt-4 md:mt-0 md:block'>
                <div>
                  <span className='text-content-primary text-sm font-normal'>
                    On-time delivery rate
                    <br />
                  </span>
                  <span className='text-content-primary text-sm font-semibold'>
                    {productDetails?.company_details?.on_time_delivery_rate}
                  </span>
                </div>

                <div>
                  <span className='text-content-primary text-sm font-normal'>
                    Response Rate
                    <br />
                  </span>
                  <span className='text-content-primary text-sm font-semibold'>
                    {productDetails?.company_details?.response_rate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
