import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import DeleteUserGroup from "../components/DeleteUserGroup";
import Group from "../components/Group";
import UserGroupForm from "../components/UserGroupForm";
import {Button} from "shared";

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
        <AdminNavbar
          title=''
          search={true}
          handleSearch={() => {}}
          ActionButton={null}
        />

        <div className='px-6 3xl:px-14 py-2 3xl:py-5 font-Inter'>
          <div className='py-4 3xl:py-8'>
            <div className='flex items-center justify-between'>
              <div className='text-content-primary text-xl 3xl:text-2xl font-semibold 3xl:leading-[38px]'>
                Users
              </div>
              <div className='flex items-center gap-3'>
                <Button
                  title='Add User Group'
                  icon={<div className='text-xl leading-[0px] mr-0'>+</div>}
                  extraClassName='bg-btn-blue text-content-accent'
                  handlerEvent={() => {
                    setAddUserGroupOpen(!addUserGroupOpen);
                  }}
                />

                <Button
                  title='Filter'
                  icon={
                    <FilterSettings classes='w-4 h-4 3xl:w-6 3xl:h-6 text-[#5F6D7E]' />
                  }
                  extraClassName='bg-white text-gray-500 border border-zinc-200'
                  handlerEvent={() => {}}
                />
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
