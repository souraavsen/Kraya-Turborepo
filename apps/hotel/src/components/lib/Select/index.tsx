import React, { useState } from "react";
import { Select as AntdSelect } from "antd";

const Select: React.FC<any> = ({
  bordered,
  extraClassName,
  mode,
  options,
  defaultValue,
  props,
}) => {
  const [isSelectFocused, setIsSelectFocused] = useState<boolean>(false);

  return (
    <div
      className={`w-auto transition-all delay-200 duration-100 rounded-md font-Inter ${
        bordered ? "border" : ""
      } ${isSelectFocused ? "ring-1 ring-blue-400" : ""}`}
    >
      <AntdSelect
        className={`${extraClassName} w-full font-Inter text-sm 3xl:text-base text-content-primary bg-bkg-primary rounded-md`}
        style={{
          width: "100%",
          padding: "4px 6px",
          fontFamily: "Inter, sans-serif",
        }}
        mode={mode}
        options={options}
        bordered={false}
        defaultValue={defaultValue}
        onFocus={() => setIsSelectFocused(true)}
        onBlur={() => setIsSelectFocused(false)}
        {...props}
      />
    </div>
  );
};

export default Select;
