import React from "react";
import { IconT } from "./types";

const FilterSettings: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M2.66667 5.33325H10.6667M10.6667 5.33325C10.6667 6.43782 11.5621 7.33325 12.6667 7.33325C13.7712 7.33325 14.6667 6.43782 14.6667 5.33325C14.6667 4.22868 13.7712 3.33325 12.6667 3.33325C11.5621 3.33325 10.6667 4.22868 10.6667 5.33325ZM6 10.6666H13.3333M6 10.6666C6 11.7712 5.10457 12.6666 4 12.6666C2.89543 12.6666 2 11.7712 2 10.6666C2 9.56202 2.89543 8.66659 4 8.66659C5.10457 8.66659 6 9.56202 6 10.6666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default FilterSettings;
