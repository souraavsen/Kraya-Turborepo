import React from "react";
import { IconT } from "./types";

const HeartOutlined: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.9923 7.39519C12.743 4.77392 8.99221 4.0688 6.17403 6.4691C3.35585 8.8694 2.95909 12.8826 5.17222 15.7214C7.01229 18.0817 12.581 23.0598 14.4061 24.671C14.6103 24.8513 14.7124 24.9414 14.8315 24.9768C14.9354 25.0077 15.0492 25.0077 15.1531 24.9768C15.2722 24.9414 15.3743 24.8513 15.5785 24.671C17.4036 23.0598 22.9723 18.0817 24.8124 15.7214C27.0255 12.8826 26.6772 8.84415 23.8106 6.4691C20.9439 4.09405 17.2416 4.77392 14.9923 7.39519Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HeartOutlined;
