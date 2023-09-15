import React from "react";
import UserProfile from "./UserProfile";
import { AdminNavabrPropsT } from "./types";
import Search from "../../assets/Icons/Search";
import {Input} from "shared";

const AdminNavbar: React.FC<AdminNavabrPropsT> = ({
  title,
  search,
  handleSearch,
  ActionButton,
}) => {
  return (
    <div className='max_page_width min-w-full flex justify-between items-center pr-8 py-4 border-b'>
      <div className='ml-11 flex items-center'>
        {title ? (
          <div className='text-content-primary text-sm whitespace-nowrap xl:text-xl font-medium px-6 3xl:px-14 py-3'>
            {title}
          </div>
        ) : null}
        {search && (
          <>
            <span className='hidden lg:block'>
              <Input
                id='search'
                name='search'
                bordered={true}
                extraClassName='hidden lg:block text-content-primary'
                icon={<Search classes='w-5 h-5 text-content-primary' />}
                placeholder='Search'
                onKeyUp={(e: any) => handleSearch(e)}
              />
            </span>
            <span className='block lg:hidden'>
              <Input
                id='search'
                name='search'
                extraClassName='w-0 xl:w-auto focus:w-72 focus:xl:w-64 text-content-primary'
                bordered={true}
                icon={<Search classes='w-5 h-5 text-content-primary' />}
                placeholder='Search'
                onKeyUp={(e: any) => handleSearch(e)}
              />
            </span>
          </>
        )}
        <div className='ml-1.5 lg:ml-2 2xl:ml-3 3xl:ml-4'>{ActionButton}</div>
      </div>

      <UserProfile />
    </div>
  );
};

export default AdminNavbar;
