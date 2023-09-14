import React from "react";
import { IconT } from "./types";

const Flag: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M4 19V13M4 13V1.75826C4 1.3993 4.36703 1.15729 4.69696 1.29869L16.9277 6.54042C17.3317 6.71358 17.3317 7.2864 16.9277 7.45956L4 13Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Flag;
