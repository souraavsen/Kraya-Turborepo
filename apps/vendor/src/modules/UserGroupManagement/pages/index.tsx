import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import SearchBox from "../../../components/CustomAntd/SearchBox";
import Copyright from "../../../components/Footer/Copyright";
import UserProfile from "../../../components/Navbar/UserProfile";
import DeleteUserGroup from "../components/DeleteUserGroup";
import Group from "../components/Group";
import UserGroupForm from "../components/UserGroupForm";

const UserGroupManagement: React.FC = () => {
  const [addUserGroupOpen, setAddUserGroupOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const handleCloseAddUserGroup = (): void => {
    setAddUserGroupOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
  };

  return (
    <div className='w-auto h-screen overflow-y-auto bg-bkg-primary text-content-primary flex flex-col justify-between font-Inter overflow-x-hidden xl:overflow-x-auto'>
      <div>
        <div className='border-b'>
          <div className='flex justify-between items-center px-6 3xl:px-14 py-2 3xl:py-4'>
            <div className='text-content-primary text-xl font-medium'>
              <SearchBox
                id='user_search'
                name='user_search'
                placeholder='Search'
                onChange={() => {}}
              />
            </div>
            <UserProfile />
          </div>
        </div>

        <div className='px-6 3xl:px-14 py-2 3xl:py-5 font-Inter'>
          <div className='py-4 3xl:py-8'>
            <div className='flex items-center justify-between'>
              <div className='text-content-primary text-xl 3xl:text-2xl font-semibold 3xl:leading-[38px]'>
                Users
              </div>
              <div className='flex items-center gap-3'>
                <div
                  className='px-3 3xl:px-4 py-1.5 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow justify-center items-center gap-1.5 inline-flex cursor-pointer'
                  onClick={() => {
                    setAddUserGroupOpen(!addUserGroupOpen);
                  }}
                >
                  <div className='text-white font-semibold flex items-center'>
                    <div className='text-xl leading-0 mr-1.5'>+</div>{" "}
                    <div className='text-xs 3xl:text-sm'>Add User Group</div>
                  </div>
                </div>

                <div className='w-20 h-10 px-2 3xl:px-3 py-1.5 3xl:py-2.5 bg-white rounded-[5px] shadow border border-zinc-200 justify-center items-center gap-1.5 inline-flex cursor-pointer'>
                  <div className='flex items-center'>
                    <FilterSettings classes='w-4 h-4 3xl:w-6 3xl:h-6 text-[#5F6D7E] mr-1.5' />
                    <div className='text-gray-500 text-xs 3xl:text-sm font-semibold leading-tight'>
                      Filter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
            {new Array(8).fill(0).map((_, i) => (
              <Group
                key={i}
                name={`Group ${i + 1}`}
                active={i % 3 === 0 ? false : true}
                setIsEditOpen={setIsEditOpen}
                setIsDeleteOpen={setIsDeleteOpen}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <Copyright />

      <UserGroupForm
        action='add'
        open={addUserGroupOpen}
        handleCancel={handleCloseAddUserGroup}
      />

      <UserGroupForm
        action='edit'
        open={isEditOpen}
        handleCancel={handleCloseAddUserGroup}
      />

      <DeleteUserGroup
        open={isDeleteOpen}
        handleCancel={handleCloseAddUserGroup}
      />
    </div>
  );
};

export default UserGroupManagement;
