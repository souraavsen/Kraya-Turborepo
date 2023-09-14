import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const PaginationPrevButton: React.FC = () => {
  return (
    <div className='flex items-center cursor-pointer text-gray-500 text-sm font-medium leading-tight font-Inter'>
      <ArrowRightOutlined className='mr-3 rotate-180' />
      <div>Prev</div>
    </div>
  );
};

export default PaginationPrevButton;
