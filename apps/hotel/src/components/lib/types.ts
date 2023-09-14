import React from "react";

export type ButtonPropsT = {
  title: string;
  icon?: React.ReactNode;
  extraClassName: string;
  // className: string;
  handlerEvent: any;
};

export type CheckBoxPropsT = {
  id: string;
  title: string;
  className?: string;
  handlerEvent?: any;
  isChecked?: boolean;
};

export type TextAreaPropsT = {
  id?: string;
  name?: string;
  rows?: number;
  cols?: number;
  message?: string;
  placeholder?: string;
  extraClassName?: string;
  handlerEvent: any;
};

// export type InputPropsT = {
//   extraClassName?: string;
//   placeholder: string;
//   name: string;
//   id: string;
//   bordered?: boolean;
//   icon?: React.ReactNode;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };
