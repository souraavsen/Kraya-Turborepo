import { SearchOutlined } from "@ant-design/icons";
import { message } from "antd";
import React from "react";
import File from "../../../assets/Icons/File";

const SearchProduct: React.FC = () => {
  return (
    <div className='font-Inter relative'>
      <div>
        <div className='search_container h-[29rem] min-w-full' />
        <div className='absolute top-0 min-w-full min-h-[556px] search_container_overlay' />
      </div>

      <div className='min-w-full absolute top-0 pt-40 pb-44 pl-40'>
        <div className='text-white text-4xl font-bold leading-normal mb-7'>
          Search across 500 + Products & Services
        </div>
        <div className='flex items-center'>
          <div className='w-max bg-white flex items-center p-3 rounded-md'>
            <SearchOutlined className='text-xl' />
            <input
              type="text"
              className='w-96 border-none outline-none bg-white focus:ring-0 text-gray-800 text-[15px] font-medium leading-snug placeholder:text-gray-800 pl-2'
              placeholder='Search vender'
            />
          </div>
          <button
            className='bg-blue-600 px-4 py-3 flex items-center -ml-1 rounded-tr-md rounded-br-md'
            onClick={() => {
              message.success("AAA");
            }}
          >
            <File classes='w-5 h-5 text-white mr-1.5' />
            <div className='text-white text-[15px] font-semibold leading-snug'>
              Upload
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
