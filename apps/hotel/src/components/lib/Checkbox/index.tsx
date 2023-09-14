import { Checkbox } from "antd";
import React from "react";
// import { CheckBoxPropsT } from "../types";

const CheckBox: React.FC<any> = ({
  id,
  className,
  handlerEvent,
  title,
  isChecked,
  props,
}) => {
  return (
    <Checkbox
      id={id}
      className={`text-content-primary ${className}`}
      onChange={handlerEvent}
      checked={isChecked}
      {...props}
    >
      <div className='text-content-primary text-sm 3xl:text-base font-normal'>
        {title}
      </div>
    </Checkbox>
  );
};

export default CheckBox;
