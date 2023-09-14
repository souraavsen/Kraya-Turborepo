import { PlusCircleOutlined, SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const AddActivity: React.FC = () => {
  return (
    <div>
      <div className='fixed bottom-0 py-5 w-[80%] md:w-[65%] lg:w-[45%] xl:w-[34%] 2xl:w-[25%] h-15 flex items-center gap-2 bg-white z-40'>
        <PlusCircleOutlined className='text-[#12A805] text-xl' />
        <Input
          className=' text-neutral-400 text-sm font-normal border-none outline-none focus:outline-none focus:ring-0'
          placeholder='Type your message ......'
        />
        <SendOutlined className='text-[#12A805] text-2xl' />
      </div>
    </div>
  );
};

export default AddActivity;
