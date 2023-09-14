import React from "react";
import { IconT } from "./types";

const ShoppingBagCheck: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M13.7505 6.41671H15.7102C16.672 6.41671 17.4703 7.16003 17.5388 8.11942L18.1936 17.2861C18.2694 18.3473 17.4289 19.25 16.3649 19.25H5.63616C4.5722 19.25 3.73168 18.3473 3.80749 17.2861L4.46225 8.11942C4.53078 7.16003 5.32909 6.41671 6.29092 6.41671H8.25054M13.7505 6.41671H8.25054M13.7505 6.41671V4.58337C13.7505 3.06459 12.5193 1.83337 11.0005 1.83337C9.48176 1.83337 8.25054 3.06459 8.25054 4.58337V6.41671M13.7504 11L10.2123 14.5653C10.078 14.7005 9.86037 14.7005 9.72613 14.5653L8.25045 13.0783'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ShoppingBagCheck;
