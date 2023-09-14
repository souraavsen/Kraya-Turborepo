import React from 'react'
import { IconT } from './types';

const Receipt:React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M7.33366 5.50004H14.667M7.33366 9.16671H14.667M7.33366 12.8334H14.667M5.50033 1.83337H16.5003C17.5128 1.83337 18.3337 2.65419 18.3337 3.66671V17.2003C18.3337 18.5632 16.8994 19.4496 15.6804 18.8401L15.4869 18.7433C14.9708 18.4853 14.3632 18.4853 13.8471 18.7433L11.8202 19.7568C11.3041 20.0148 10.6966 20.0148 10.1804 19.7568L8.15355 18.7433C7.63742 18.4853 7.0299 18.4853 6.51377 18.7433L6.32022 18.8401C5.10123 19.4496 3.66699 18.5632 3.66699 17.2003V3.66671C3.66699 2.65419 4.4878 1.83337 5.50033 1.83337Z'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Receipt