import React from "react";
import { IconT } from "./types";

const LeftArrow: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
      fill='none'
    >
      <path
        d='M17.4998 7.5L10.8837 14.1161C10.3955 14.6043 10.3955 15.3957 10.8837 15.8839L17.4998 22.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default LeftArrow;
