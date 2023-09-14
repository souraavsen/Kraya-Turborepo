import React from "react";
import { IconT } from "./types";

const LocationPin: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18 18'
      fill='none'
    >
      <path
        d='M12 7.5C12 9.15685 10.6569 10.5 9 10.5C7.34315 10.5 6 9.15685 6 7.5C6 5.84314 7.34315 4.5 9 4.5C10.6569 4.5 12 5.84314 12 7.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M15 7.5C15 10.8137 10.5 16.5 9 16.5C7.5 16.5 3 10.8137 3 7.5C3 4.18629 5.68629 1.5 9 1.5C12.3137 1.5 15 4.18629 15 7.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default LocationPin;
