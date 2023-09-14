import { Modal, message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";

const DeleteUser: React.FC<ModalContainerPropsT> = ({ open, handleCancel }) => {
  const handleAddUserGroup = () => {
    message.success("Group deleted successfully");
  };

  return (
    <>
      <Modal
        className='font-Inter'
        width={600}
        centered
        open={open}
        onCancel={handleCancel}
        footer={[
          <div className='flex justify-end items-center gap-4 py-4 px-8 bg-gray-50 rounded-bl-lg rounded-br-lg'>
            <div
              onClick={handleCancel}
              className='px-6 py-2 3xl:px-8 3xl:py-2.5 bg-bkg-primary rounded-[5px] shadow border border-zinc-200 cursor-pointer'
            >
              <div className='text-content-primary text-sm font-normal leading-snug'>
                Cancel
              </div>
            </div>
            <div
              className='px-6 py-2 3xl:px-8 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow text-white text-sm font-semibold leading-tight cursor-pointer'
              onClick={handleAddUserGroup}
            >
              Confirm
            </div>
          </div>,
        ]}
      >
        <div className='text-content-primary text-xl font-semibold leading-[30px] py-4 px-8'>
          Delete User
        </div>
        <hr className='w-full mb-8' />

        <div className='px-8'>
          <div className='text-center text-gray-500 text-[15px] font-normal leading-tight'>
            Confirm to delete this user
          </div>
          <div className='text-center'>
            <span className='text-content-primary text-[15px] font-medium leading-tight'>
              Ajloren{" "}
            </span>
            <span className='text-gray-500 text-[15px] font-medium leading-tight'>
              ?
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteUser;
