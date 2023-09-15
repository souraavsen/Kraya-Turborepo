import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import DeleteUser from "../component/DeleteUser";
import UserDetails from "../component/UserDetails";
import UserDetailsForm from "../component/UserDetailsForm";
import {Button} from "shared";

const UserManagement: React.FC = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState<boolean>(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState<boolean>(false);
  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState<boolean>(false);

  const handleCloseUserActions = (): void => {
    setIsAddUserOpen(false);
    setIsEditUserOpen(false);
    setIsDeleteUserOpen(false);
  };

  return (
    <div className='w-auto h-screen overflow-y-auto bg-bkg-primary text-content-primary font-Inter flex flex-col justify-between overflow-x-hidden xl:overflow-x-auto'>
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
              Users
            </div>
            <div className='flex items-center gap-3'>
              <Button
                title='Add User'
                icon={<div className='text-xl leading-[0px]'>+</div>}
                extraClassName='bg-btn-blue text-content-accent'
                handlerEvent={() => {
                  setIsAddUserOpen(true);
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
          <div className='mt-4 3xl:mt-8'>
            <UserDetails
              setIsEditUserOpen={setIsEditUserOpen}
              setIsDeleteUserOpen={setIsDeleteUserOpen}
            />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <Copyright />

      <UserDetailsForm
        action='add'
        open={isAddUserOpen}
        handleCancel={handleCloseUserActions}
      />
      <UserDetailsForm
        action='edit'
        open={isEditUserOpen}
        handleCancel={handleCloseUserActions}
      />
      <DeleteUser
        open={isDeleteUserOpen}
        handleCancel={handleCloseUserActions}
      />
    </div>
  );
};

export default UserManagement;

// const initialUserDetails = {
//   id: null,
//   first_name: "",
//   last_name: "",
//   username: "",
//   email: "",
//   password: "",
//   mobile_no: "",
//   role: "",
//   user_group: "",
// };
