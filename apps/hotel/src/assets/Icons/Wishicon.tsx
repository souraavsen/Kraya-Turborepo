import React from "react";
import { IconT } from "./types";

const Wishicon: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='wishicon' clipPath='url(#clip0_961_18303)'>
        <circle
          id='Ellipse 272'
          cx='15'
          cy='15'
          r='14.5'
          fill='currentColor'
          stroke='#CCCCCC'
        />
        <g id='heart'>
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.9941 10.5678C13.3875 8.69545 10.7083 8.19179 8.69532 9.90629C6.68233 11.6208 6.39893 14.4874 7.97974 16.5151C9.29408 18.201 13.2717 21.7568 14.5754 22.9077C14.7212 23.0364 14.7942 23.1008 14.8792 23.1261C14.9535 23.1482 15.0347 23.1482 15.1089 23.1261C15.194 23.1008 15.2669 23.0364 15.4128 22.9077C16.7164 21.7568 20.6941 18.201 22.0084 16.5151C23.5892 14.4874 23.3404 11.6028 21.2928 9.90629C19.2452 8.20983 16.6007 8.69545 14.9941 10.5678Z'
            fill='#CCCCCC'
            opacity='0.8'
            stroke='#CCCCCC'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_961_18303'>
          <rect width='30' height='30' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Wishicon;
