import { Dropdown, MenuProps } from "antd";
import React from "react";
import DeleteBin from "../../../assets/Icons/DeleteBin";
import DotMenu from "../../../assets/Icons/DotMenu";
import EditPen from "../../../assets/Icons/EditPen";
import user1 from "../../../assets/Images/user1.png";
import user2 from "../../../assets/Images/user2.png";
import user3 from "../../../assets/Images/user3.png";
import user4 from "../../../assets/Images/user4.png";
import { UserGroupPropsT } from "../types";

const Group: React.FC<UserGroupPropsT> = ({
  name,
  active,
  setIsEditOpen,
  setIsDeleteOpen,
}) => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className='flex items-center gap-2'
          onClick={() => {
            setIsEditOpen(true);
          }}
        >
          <span>
            <EditPen classes='text-content-primary w-4 h-4' />
          </span>
          <span>Edit</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className='flex items-center gap-2'
          onClick={() => setIsDeleteOpen(true)}
        >
          <span>
            <DeleteBin classes='text-content-primary w-4 h-4' />
          </span>
          <span>Delete</span>
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <div className='p-5 border rounded-md bg-bkg-primary'>
      <div className='flex items-center justify-between'>
        <div className='text-content-primary text-base font-bold'>{name}</div>
        {active ? (
          <div className='h-5 px-2 py-0.5 bg-green-50 rounded-[5px] justify-start items-center gap-1 inline-flex'>
            <div className='w-1.5 h-1.5 relative'>
              <div className='w-1.5 h-1.5 left-0 top-0 absolute bg-green-700 rounded-[5px]' />
            </div>
            <div className='text-green-700 text-[13px] font-medium leading-[18px]'>
              Active
            </div>
          </div>
        ) : (
          <div className='w-[75px] h-[22px] px-2 py-0.5 bg-zinc-200 rounded-[5px] justify-start items-center gap-1 inline-flex'>
            <div className='w-1.5 h-1.5 relative'>
              <div className='w-1.5 h-1.5 left-0 top-0 absolute bg-white rounded-[5px]' />
            </div>
            <div className='text-white text-[13px] font-medium leading-[18px]'>
              Inactive
            </div>
          </div>
        )}
      </div>
      <div className='mt-4 mb-2 3xl:my-5'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user1}
              alt='User Avatar'
            />
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user2}
              alt='User Avatar'
            />
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user3}
              alt='User Avatar'
            />
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user4}
              alt='User Avatar'
            />
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user3}
              alt='User Avatar'
            />
            <img
              className='w-6 h-6 3xl:w-8 3xl:h-8 -mx-0.5'
              src={user4}
              alt='User Avatar'
            />

            <div className='w-5 h-5 3xl:w-7 3xl:h-7 py-1 bg-sky-100 rounded-full flex justify-center items-center'>
              <div className='text-blue-500 text-[10px] font-bold leading-tight'>
                +4
              </div>
            </div>
          </div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement={"bottomRight"}
          >
            <a onClick={(e) => e.preventDefault()}>
              <DotMenu classes='w-5 text-gray-600 rotate-90 cursor-pointer' />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Group;
