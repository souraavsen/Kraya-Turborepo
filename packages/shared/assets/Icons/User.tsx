import { IconT } from "./types";

const User: React.FC<IconT> = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M11.0003 12.8333C13.5316 12.8333 15.5837 10.7813 15.5837 8.25001C15.5837 5.7187 13.5316 3.66667 11.0003 3.66667C8.46902 3.66667 6.41699 5.7187 6.41699 8.25001C6.41699 10.7813 8.46902 12.8333 11.0003 12.8333ZM11.0003 12.8333C6.95024 12.8333 3.66699 15.2958 3.66699 18.3333M11.0003 12.8333C15.0504 12.8333 18.3337 15.2958 18.3337 18.3333'
        stroke='currentColor'
        strokeWidth='1.83'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default User;
