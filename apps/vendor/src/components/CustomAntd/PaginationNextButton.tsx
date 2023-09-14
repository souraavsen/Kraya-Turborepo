import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const PaginationNextButton: React.FC = () => {
  return (
    <div className='flex items-center cursor-pointer text-gray-500 text-sm font-medium leading-tight font-Inter'>
      <div>Next</div>
      <ArrowRightOutlined className='ml-3' />
    </div>
  );
};

export default PaginationNextButton;
