import React from "react";
import { IconT } from "./types";

const BurgerMenu: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M3 3H21M3 12H12M3 21H21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default BurgerMenu;
