import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import DeleteModule from "../components/DeleteModule";
import RoleBasedUsers from "../components/RoleBasedUsers";
import RoleManagementForm from "../components/RoleManagementForm";
import {Button} from "shared";

const UserRoleManagement: React.FC = () => {
  const [isAddUserRoleOpen, setIsAddUserRoleOpen] = useState<boolean>(false);
  const [isEditUserRoleOpen, setIsEditUserRoleOpen] = useState<boolean>(false);
  const [isDeleteModuleOpen, setIsDeleteModuleOpen] = useState<boolean>(false);

  const handleCloseUserForm = (): void => {
    setIsAddUserRoleOpen(false);
    setIsEditUserRoleOpen(false);
    setIsDeleteModuleOpen(false);
  };

  return (
    <div className='w-auto h-screen overflow-y-auto bg-bkg-primary text-content-primary font-Inter flex flex-col justify-between'>
      <div>
        <AdminNavbar
          title=''
          search={false}
          handleSearch={() => {}}
          ActionButton={null}
        />

        <div className='px-6 3xl:px-14 py-4 3xl:py-8'>
          <div className='flex items-center justify-between'>
            <div className='text-content-primary text-xl 3xl:text-2xl font-semibold 3xl:leading-[38px]'>
              Roles
            </div>
            <div className='flex items-center gap-3'>
              <Button
                title='Add User'
                icon={<div className='text-xl leading-[0px]'>+</div>}
                extraClassName='bg-btn-blue text-content-accent'
                handlerEvent={() => {
                  setIsAddUserRoleOpen(true);
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

          <div>
            <RoleBasedUsers
              setIsEditUserRoleOpen={setIsEditUserRoleOpen}
              setIsDeleteModuleOpen={setIsDeleteModuleOpen}
            />
          </div>
        </div>
      </div>

      {/* Footer Copyright  */}
      <Copyright />

      <RoleManagementForm
        action='add'
        open={isAddUserRoleOpen}
        handleCancel={handleCloseUserForm}
      />
      <RoleManagementForm
        action='edit'
        open={isEditUserRoleOpen}
        handleCancel={handleCloseUserForm}
      />
      <DeleteModule
        open={isDeleteModuleOpen}
        handleCancel={handleCloseUserForm}
      />
    </div>
  );
};

export default UserRoleManagement;
