import { StarFilled } from "@ant-design/icons";
import React, { useState } from "react";
import Wishicon from "../../../../../assets/Icons/Wishicon";
import { FeaturedVendorT, ProductPropsT } from "../../../types";
import { Link } from "react-router-dom";

const Product: React.FC<ProductPropsT> = ({ item }) => {
  const [inWish, setInWish] = useState<any>([]);

  const handleAddToWish = (object: FeaturedVendorT): void => {
    if (inWish.includes(object.id)) {
      setInWish(inWish.filter((wish: number) => wish !== object.id));
    } else {
      setInWish([...inWish, object.id]);
    }
  };

  return (
    <div className='p-4 border font-Inter bg-bkg-primary shadow-sm'>
      <div className='relative'>
        <Link to={`${item?.id}`}>
          <img
            className='w-full h-full 2xl:max-h-60 3xl:max-h-72'
            src={item?.image}
            alt='Product Image'
          />
        </Link>
        <div
          className='absolute top-3 right-3 cursor-pointer'
          onClick={() => handleAddToWish(item)}
        >
          <Wishicon
            classes={`${
              inWish.includes(item.id) ? "text-custom-rose" : "text-white"
            } transion-color delay-150 duration-200 w-8 h-8`}
          />
        </div>
      </div>
      <Link to={`${item?.id}`}>
        <div className=' text-content-primary text-sm font-medium leading-snug mb-1 mt-2 2xl:mb-2 2xl:mt-3 3xl:my-5'>
          {item?.description}
        </div>
        <div className=''>
          <span className='text-orange-500 text-base font-bold'>
            ₹{item?.min_price}-₹{item?.max_price}/
          </span>
          <span className='text-neutral-400 text-xs font-normal ml-1'>
            piece
          </span>
        </div>
        <div className=' '>
          <span className='text-content-primary text-sm font-normal'>
            {item?.quantity} pieces{" "}
          </span>
          <span className='text-neutral-400 text-xs font-normal'>(MOQ)</span>
        </div>

        <div className='flex items-center'>
          <StarFilled className='text-orange-500 mr-1.5' />
          <div>
            <span className='text-content-primary text-sm font-normal'>
              {item?.rating}({item?.rating_quanity}){" "}
            </span>
            <span className='text-content-primary text-sm font-semibold'>
              {item?.region}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
