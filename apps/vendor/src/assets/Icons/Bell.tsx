import React from "react";
import { IconT } from "./types";

const Bell: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M13.4249 18.3334C12.7786 18.9039 11.9295 19.25 10.9997 19.25C10.0698 19.25 9.22077 18.9039 8.57441 18.3334M16.4973 12.0825V9.16675C16.4973 6.12132 14.0451 3.66675 10.9997 3.66675C7.95425 3.66675 5.46884 6.01668 5.46884 9.16675V12.0627C5.46884 12.5056 5.39981 12.9456 5.26441 13.3658L4.58748 15.4664C4.56894 15.5239 4.61033 15.5833 4.66895 15.5833H17.2909C17.3529 15.5833 17.3969 15.5229 17.3779 15.4639L16.6964 13.3491C16.5645 12.9398 16.4973 12.5125 16.4973 12.0825Z'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Bell;
