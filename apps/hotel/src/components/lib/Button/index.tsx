import React from "react";
import { ButtonPropsT } from "../types";

const Button: React.FC<ButtonPropsT> = ({
  title,
  extraClassName,
  icon,
  handlerEvent,
  ...props
}) => {
  return (
    <button
      style={{
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
      }}
      className={`px-2 lg:px-3 3xl:px-5 py-1.5 3xl:py-2.5 rounded-[5px] flex justify-center items-center hover:opacity-80 transition-all duration-200 ${extraClassName}`}
      onClick={handlerEvent}
      {...props}
    >
      {icon ? <span className='mr-1.5 py-0 leading-[0px]'>{icon}</span> : null}
      <span className='text-sm 3xl:text-base font-medium font-Inter leading-normal'>
        {title}
      </span>
    </button>
  );
};

export default Button;
