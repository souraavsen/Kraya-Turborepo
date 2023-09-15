import { Breadcrumb } from "antd";
import React from "react";
import { BreadcrumbPropsT } from "../types";


export const CustomBreadcrumb: React.FC<BreadcrumbPropsT> = ({ items }) => {
  return (
    <Breadcrumb
      className='font-Poppins text-sm xl:text-base cursor-pointer'
      separator={
        <span className='font-mono leading-[0] text-xl text-content-primary'>
          {">"}
        </span>
      }
      items={items}
    />
  );
};

