import React from "react";
import { IconT } from "./types";

const ArrowCircle: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='arrow-left-circle' opacity='0.5'>
        <path
          id='Vector'
          d='M32 58.6666C46.7276 58.6666 58.6667 46.7275 58.6667 31.9999C58.6667 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33337 17.2723 5.33337 31.9999C5.33337 46.7275 17.2724 58.6666 32 58.6666Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M32 21.3333L21.3334 31.9999L32 42.6666'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_3'
          d='M42.6667 32H21.3334'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ArrowCircle;
