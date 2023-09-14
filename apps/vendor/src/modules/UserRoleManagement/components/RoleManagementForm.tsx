import { Form, Input, Modal, Switch, message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";
import PermissionDetails from "./PermissionDetails";

const RoleManagementForm: React.FC<ModalContainerPropsT> = ({
  action,
  open,
  handleCancel,
}) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    message.success("New user added successfully");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        className='font-Inter'
        width={600}
        open={open}
        onCancel={handleCancel}
        footer={[,]}
      >
        <div className='text-content-primary text-xl font-semibold leading-[30px] py-4 px-8'>
          {action === "add" ? "Add" : "Edit"} Role
        </div>
        <hr className='w-full mb-8' />

        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className='px-8'>
            <div className='grid grid-cols-2 gap-4 items-center'>
              <div>
                <div className='text-content-primary text-sm font-medium leading-tight'>
                  Role Name
                </div>
                <Form.Item name='role_name'>
                  <Input
                    className='w-56 py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                    placeholder='Enter Role Name'
                  />
                </Form.Item>
              </div>
            </div>

            <div className='mt-2 mb-4 3xl:mt-6 3xl:mb-8'>
              <Form.Item name='permissions'>
                <PermissionDetails />
              </Form.Item>
            </div>

            {action === "edit" && (
              <div>
                <div className='text-content-primary text-sm font-medium leading-tight'>
                  Status
                </div>
                <Form.Item name='status' initialValue={true}>
                  <div>
                    <Switch defaultChecked />
                    <span className='ml-3.5'>Active</span>
                  </div>
                </Form.Item>
              </div>
            )}
          </div>

          <div className='flex justify-end items-center gap-4 py-4 px-8 bg-gray-50 rounded-bl-lg rounded-br-lg'>
            <div
              onClick={handleCancel}
              className='px-6 py-2 3xl:px-8 3xl:py-2.5 bg-bkg-primary rounded-[5px] shadow border border-zinc-200 cursor-pointer'
            >
              <div className='text-content-primary text-sm font-normal leading-snug'>
                Cancel
              </div>
            </div>
            <button
              className='px-6 py-2 3xl:px-8 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow text-white text-sm font-semibold leading-tight cursor-pointer'
              // onClick={handleAddUser}
              type='submit'
            >
              Submit
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RoleManagementForm;
