import React from "react";
import { IconT } from "./types";

const Cross: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 21'
      fill='none'
    >
      <path
        d='M15 5.5L5 15.5M15 15.5L5 5.50001'
        stroke='currentColor'
        strokeWidth='1.67'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Cross;
