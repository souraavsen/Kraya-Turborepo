import React from "react";
import { IconT } from "./types";

const Role: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M4.52866 6.79478L10.0287 3.35728C10.6232 2.98572 11.3775 2.98572 11.972 3.35728L17.472 6.79478C18.008 7.1298 18.3337 7.71733 18.3337 8.34945V13.6505C18.3337 14.2827 18.008 14.8702 17.472 15.2052L11.972 18.6427C11.3775 19.0143 10.6232 19.0143 10.0287 18.6427L4.52866 15.2052C3.99263 14.8702 3.66699 14.2827 3.66699 13.6505V8.34945C3.66699 7.71733 3.99263 7.1298 4.52866 6.79478Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Role;
