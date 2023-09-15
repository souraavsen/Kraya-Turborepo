import React from "react";
import { IconT } from "./types";

const Home: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M2.75 10.1041V15.9559C2.75 18.2815 4.59683 20.1667 6.875 20.1667H15.125C17.4032 20.1667 19.25 18.2815 19.25 15.956V10.1041C19.25 8.84114 18.6947 7.6449 17.7371 6.84516L12.3061 2.30923C11.5463 1.6747 10.4537 1.6747 9.69395 2.30923L4.26289 6.84516C3.30534 7.6449 2.75 8.84114 2.75 10.1041Z'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Home;
