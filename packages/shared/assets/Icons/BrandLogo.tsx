import React from "react";
import { IconT } from "./types";


export const BrandLogo: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      // width={width}
      // height={height}
      viewBox='0 0 41 41'
      fill='none'
    >
      <path
        d='M26.2022 8.41964L7.1806 19.4018V12.8125L20.5 5.125L26.2022 8.41964Z'
        fill='currentColor'
      />
      <path
        d='M33.8193 12.8125V16.614L10.4752 30.0883L7.1806 28.1875V24.6113L30.7077 11.0244L33.8193 12.8125Z'
        fill='currentColor'
      />
      <path
        d='M14.9807 32.693L33.8193 21.8235V28.1875L20.5 35.875L14.9807 32.693Z'
        fill='currentColor'
      />
    </svg>
  );
};
