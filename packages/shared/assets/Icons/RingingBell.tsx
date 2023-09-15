import React from "react";
import { IconT } from "./types";

const RingingBell: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 28 28'
      fill='none'
    >
      <path
        d='M14.0227 2.3335C9.72939 2.3335 6.25273 5.81016 6.25273 10.1035V12.5535C6.25273 13.3468 5.92606 14.5368 5.51773 15.2135L4.03606 17.6868C3.12606 19.2152 3.75606 20.9185 5.43606 21.4785C11.0127 23.3335 17.0444 23.3335 22.6211 21.4785C24.1961 20.9535 24.8727 19.1102 24.0211 17.6868L22.5394 15.2135C22.1311 14.5368 21.8044 13.3352 21.8044 12.5535V10.1035C21.7927 5.8335 18.2927 2.3335 14.0227 2.3335Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <path
        d='M17.8852 21.9565C17.8852 24.0915 16.1352 25.8415 14.0002 25.8415C12.9386 25.8415 11.9586 25.3982 11.2586 24.6982C10.5586 23.9982 10.1152 23.0182 10.1152 21.9565'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default RingingBell;
