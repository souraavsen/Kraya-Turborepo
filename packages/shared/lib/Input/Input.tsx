import {
  EyeInvisibleOutlined,
  EyeOutlined
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

export const Input: React.FC<any> = ({ extraClassName, icon, ...props }) => {
  const [inputType, setInputType] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    setInputType(props.type ? props?.type : "text");
  }, []);

  const handleShowPassword = () => {
    const inputElement: any = document.getElementById(props?.id);

    if (inputElement) {
      if (inputElement.type === "password") {
        inputElement.type = "text";
        setInputType("text");
      } else {
        inputElement.type = "password";
        setInputType("password");
      }
    }
  };

  return (
    <div
      className={`w-auto flex items-center  ${
        props?.bordered ? "border" : null
      } 
      ${isFocused ? "ring-1 ring-blue-400" : null} 
      transition-all delay-200 duration-100 rounded-md font-Inter px-2 2xl:px-3 3xl:px-3.5`}
    >
      {icon ? <span className='pr-0 leading-[0]'>{icon}</span> : null}
      <input
        className={`${extraClassName} py-2 3xl:py-3 px-1 2xl:px-1.5 3xl:px-2 text-sm 3xl:text-base font-normal bg-inherit placeholder:text-inherit rounded-lg outline-none focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      {props?.type === "password" ? (
        <span
          className='ml-auto leading-[0] pl-2 cursor-pointer text-content-primary'
          onClick={handleShowPassword}
        >
          {inputType === "password" ? (
            <EyeOutlined />
          ) : (
            <EyeInvisibleOutlined />
          )}
        </span>
      ) : null}
    </div>
  );
};

