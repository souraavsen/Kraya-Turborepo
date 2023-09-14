import React, { useState } from "react";
import FilterSettings from "../../../assets/Icons/FilterSettings";
import SearchBox from "../../../components/CustomAntd/SearchBox";
import UserDetails from "../component/UserDetails";
import UserProfile from "../../../components/Navbar/UserProfile";
import UserDetailsForm from "../component/UserDetailsForm";
import DeleteUser from "../component/DeleteUser";
import Copyright from "../../../components/Footer/Copyright";

const UserManagement: React.FC = () => {
  //   const [userDetails, setUserDetails] = useState(initialUserDetails);
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
              Users
            </div>
            <div className='flex items-center gap-3'>
              <div
                className='px-3 3xl:px-4 py-1.5 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow justify-center items-center gap-1.5 inline-flex cursor-pointer'
                onClick={() => {
                  setIsAddUserOpen(true);
                }}
              >
                <div className='text-white font-semibold flex items-center'>
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
