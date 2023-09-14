import { Rate } from "antd";
import React from "react";
import Correct from "../../../../assets/Icons/Correct";
import { ReviewPropsT } from "../../types";

const Reviews: React.FC<ReviewPropsT> = ({ productReviews }) => {
  console.log("Reviews", productReviews);

  return (
    <div className='font-Inter'>
      <div className='flex items-center mb-2 2xl:mb-5 3xl:mb-8'>
        <div className='text-content-primary text-2xl font-bold'>
          All Reviews
        </div>
        <div className='text-content-primary text-opacity-60 text-sm xl:text-base font-normal leading-snug ml-2'>
          ({productReviews?.length ? productReviews?.length : 0})
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-5'>
        {productReviews?.map((review: any, i: number) => (
          <div
            key={i}
            className='border py-3 px-4 2xl:py-4 2xl:px-5 3xl:py-7 3xl:px-8 rounded-[20px]'
          >
            <div className='mb-2'>
              <Rate allowHalf disabled value={review.rating} />
            </div>
            <div className='flex items-center text-content-primary text-base xl:text-lg 3xl:text-xl font-bold leading-snug mb-2 3xl:mb-4'>
              <span>{review.user_full_name}</span>
              <span>
                <Correct classes='w-5 text-[#01AB31] ml-1' />
              </span>
            </div>
            <div className='text-content-primary text-opacity-60 text-sm 3xl:text-base font-normal leading-snug'>
              "{review.commnet}"
            </div>
            <div className='text-content-primary text-opacity-60 text-sm 3xl:text-base font-normal leading-snug mt-2 2xl:mt-3 3xl:mt-6'>
              Posted on {new Date("August 14, 2023").toDateString().slice(4)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
