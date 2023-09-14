import React from "react";
import { IconT } from "./types";

const PaperPlane: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 25 25'
      fill='none'
    >
      <path
        d='M20.4991 4.11261L10.2056 13.6005C10.1029 13.6951 10.0445 13.8284 10.0445 13.9681V19.761C10.0445 20.2252 10.622 20.4388 10.9241 20.0864L14.9536 15.3853M4.65929 11.5325L20.7511 3.4866C21.0893 3.31749 21.4856 3.57053 21.4745 3.94851L21.1087 16.3831C21.0992 16.7077 20.7874 16.9373 20.4745 16.85L4.7485 12.4613C4.30783 12.3383 4.25008 11.7371 4.65929 11.5325Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default PaperPlane;
