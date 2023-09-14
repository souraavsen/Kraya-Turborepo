import { Modal, message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";
import Button from "../../../components/lib/Button";

const DeleteUserGroup: React.FC<ModalContainerPropsT> = ({
  open,
  handleCancel,
}) => {
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
            <Button
              title='Cancel'
              icon={null}
              extraClassName='bg-bkg-primary font-Inter text-content-primary border border-zinc-200'
              handlerEvent={handleCancel}
            />

            <Button
              title='Confim'
              icon={null}
              extraClassName='w-26 bg-btn-blue font-Inter text-white border border-zinc-200'
              handlerEvent={handleAddUserGroup}
            />
          </div>,
        ]}
      >
        <div className='text-content-primary text-xl font-semibold leading-[30px] py-4 px-8'>
          Delete User Group
        </div>
        <hr className='w-full mb-8' />

        <div className='px-8'>
          <div className='text-center text-gray-500 text-[15px] font-normal leading-tight'>
            Confirm to delete user group
          </div>
          <div className='text-center'>
            <span className='text-content-primary text-[15px] font-medium leading-tight'>
              Group 1{" "}
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

export default DeleteUserGroup;
