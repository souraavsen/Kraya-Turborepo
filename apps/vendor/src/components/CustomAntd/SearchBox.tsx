import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { SearchBoxPropsT } from "../../modules/UserManagement/types";

const SearchBox: React.FC<SearchBoxPropsT> = ({
  id,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className='xl:w-[20rem] 3xl:w-[28rem] flex items-center my-2 3xl:ml-4 px-2 xl:px-4 xl:border rounded-md font-Inter'>
      <SearchOutlined />
      <input
        className='w-0 xl:w-auto focus:w-72 focus:xl:w-64 py-2 3xl:py-3 pl-2 pr-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-lg border-none focus:border-none outline-none focus:outline-none text-sm 3xl:text-base font-normal'
        placeholder={placeholder}
        onChange={onChange}
        type='text'
        name={name}
        id={id}
      />
    </div>
  );
};

export default SearchBox;
