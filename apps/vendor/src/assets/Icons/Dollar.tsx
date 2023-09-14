import React from "react";
import { IconT } from "./types";

const Dollar: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M15.5837 7.33337C15.5837 5.30833 13.942 3.66671 11.917 3.66671H10.0837C8.05861 3.66671 6.41699 5.30833 6.41699 7.33337C6.41699 9.35842 8.05861 11 10.0837 11H11.917C13.942 11 15.5837 12.6417 15.5837 14.6667C15.5837 16.6918 13.942 18.3334 11.917 18.3334H10.0837C8.05861 18.3334 6.41699 16.6918 6.41699 14.6667M11.0003 1.83337L11.0003 20.1667'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Dollar;
