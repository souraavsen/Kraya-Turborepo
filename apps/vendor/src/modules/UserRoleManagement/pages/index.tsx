import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import SearchBox from "../../../components/CustomAntd/SearchBox";
import UserProfile from "../../../components/Navbar/UserProfile";
import RoleBasedUsers from "../components/RoleBasedUsers";
import Copyright from "../../../components/Footer/Copyright";
import RoleManagementForm from "../components/RoleManagementForm";
import DeleteModule from "../components/DeleteModule";

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
        <div className='flex justify-between items-center pr-8 border-b'>
          <div className='text-content-primary text-xl font-medium px-6 3xl:px-14 py-2 3xl:py-4'>
            <SearchBox
              id='user_search'
              name='user_search'
              placeholder='Search'
              onChange={() => {}}
            />
          </div>
          <UserProfile />
        </div>
        <div className='px-6 3xl:px-14 py-4 3xl:py-8'>
          <div className='flex items-center justify-between'>
            <div className='text-content-primary text-xl 3xl:text-2xl font-semibold 3xl:leading-[38px]'>
              Roles
            </div>
            <div className='flex items-center gap-3'>
              <div
                className='px-3 3xl:px-4 py-1.5 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow justify-center items-center gap-1.5 inline-flex cursor-pointer'
                onClick={() => {
                  setIsAddUserRoleOpen(true);
                }}
              >
                <div
                  className='text-white font-semibold flex items-center'
                  onClick={() => setIsAddUserRoleOpen(true)}
                >
                  <div className='text-xl leading-0 mr-1.5'>+</div>{" "}
                  <div className='text-xs 3xl:text-sm'>Add User</div>
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
