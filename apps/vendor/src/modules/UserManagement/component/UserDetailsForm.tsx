import { Form, Input, Modal, Select, Switch, message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";
import { UserRoles } from "../../UserGroupManagement/constants";

const UserDetailsForm: React.FC<ModalContainerPropsT> = ({
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
        centered
        open={open}
        onCancel={handleCancel}
        footer={[,]}
      >
        <div className='text-content-primary text-xl font-semibold leading-[30px] py-4 px-8'>
          {action === "add" ? "Add" : "Edit"} User
        </div>
        <hr className='w-full mb-8' />

        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className='px-8 grid grid-cols-2 gap-4 items-center'>
            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                First Name
              </div>
              <Form.Item name='first_name'>
                <Input
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter First Name'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Last Name
              </div>
              <Form.Item name='last_name'>
                <Input
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter Last Name'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Username*
              </div>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: "Please insert a username" },
                ]}
              >
                <Input
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter Username'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Email ID*
              </div>
              <Form.Item
                name='email'
                rules={[{ required: true, message: "Please insert an email" }]}
              >
                <Input
                  type='email'
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter Email ID'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Password*
              </div>
              <Form.Item
                name='retype_password'
                rules={[
                  { required: true, message: "Please insert a password" },
                ]}
              >
                <Input.Password
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter Password'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Confirm Password*
              </div>
              <Form.Item
                name='confirm_password'
                rules={[
                  { required: true, message: "Please re-type the password" },
                ]}
              >
                <Input.Password
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Confirm Password'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Mobile Number*
              </div>
              <Form.Item
                name='mobile_no'
                rules={[
                  {
                    required: true,
                    message: "Please insert the mobile number",
                  },
                ]}
              >
                <Input
                  className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  placeholder='Enter Mobile Number'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                Role
              </div>
              <Form.Item
                name='role'
                className='text-content-primary'
                initialValue={UserRoles[0].label}
              >
                <Select
                  id='role'
                  className='py-0.5 3xl:py-1 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  bordered={false}
                  defaultValue={UserRoles[0].label}
                  style={{ width: "100%" }}
                  options={UserRoles}
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm font-medium leading-tight'>
                User Group
              </div>
              <Form.Item name='user_group' initialValue={UserRoles[0].label}>
                <Select
                  id='user_group'
                  className='py-0.5 3xl:py-1 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                  bordered={false}
                  defaultValue={UserRoles[0].label}
                  style={{ width: "100%" }}
                  options={UserRoles}
                />
              </Form.Item>
            </div>

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

export default UserDetailsForm;
