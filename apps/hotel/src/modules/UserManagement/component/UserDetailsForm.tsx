import { Form, Modal, Switch, message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";
import { UserRoles } from "../../UserGroupManagement/constants";
import {Button, Input, Select} from "shared";


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
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                First Name
              </div>
              <Form.Item name='first_name'>
                <Input
                  id='first_name'
                  name='first_name'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter First Name'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Last Name
              </div>
              <Form.Item name='last_name'>
                <Input
                  id='last_name'
                  name='last_name'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter Last Name'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Username*
              </div>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: "Please insert a username" },
                ]}
              >
                <Input
                  id='username'
                  name='username'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter Username'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Email ID*
              </div>
              <Form.Item
                name='email'
                rules={[{ required: true, message: "Please insert an email" }]}
              >
                <Input
                  type='email'
                  id='email'
                  name='email'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter Email ID'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Password*
              </div>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: "Please insert a password" },
                ]}
              >
                <Input
                  id='password'
                  name='password'
                  type='password'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter Password'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Confirm Password*
              </div>
              <Form.Item
                name='confirm_password'
                rules={[
                  { required: true, message: "Please re-type the password" },
                ]}
              >
                <Input
                  id='confirm_password'
                  name='confirm_password'
                  type='password'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Confirm Password'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
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
                  id='mobile_no'
                  name='mobile_no'
                  extraClassName='w-full text-content-primary placeholder:opacity-60'
                  bordered
                  placeholder='Enter Mobile Number'
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Role
              </div>
              <Form.Item
                name='role'
                className='text-content-primary text-sm 3xl:text-base'
                initialValue={UserRoles[0].label}
              >
                <Select
                  extraClassName='w-full'
                  defaultValue={UserRoles?.[0].label}
                  bordered={true}
                  options={UserRoles}
                  placeholder={"Select Role"}
                  maxTagCount={"responsive"}
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                User Group
              </div>
              <Form.Item name='user_group' initialValue={UserRoles[0].label}>
                <Select
                  extraClassName='w-full text-sm 3xl:text-base'
                  defaultValue={UserRoles?.[0].label}
                  bordered={true}
                  options={UserRoles}
                  placeholder={"Select Role"}
                  maxTagCount={"responsive"}
                />
              </Form.Item>
            </div>

            <div>
              <div className='text-content-primary text-sm 3xl:text-base font-medium leading-tight mb-2'>
                Status
              </div>
              <Form.Item name='status' initialValue={true}>
                <div>
                  <Switch className='' defaultChecked />
                  <span className='ml-3.5 text-content-primary text-sm 3xl:text-base font-medium leading-tight'>
                    Active
                  </span>
                </div>
              </Form.Item>
            </div>
          </div>
          <div className='flex justify-end items-center gap-4 py-4 px-8 bg-bkg-primary rounded-bl-lg rounded-br-lg'>
            <Button
              title='Cancel'
              icon={null}
              extraClassName='bg-bkg-primary font-Inter text-content-primary border border-bkg-primary'
              handlerEvent={handleCancel}
            />

            <Button
              title='Submit'
              icon={null}
              extraClassName='w-26 bg-btn-blue font-Inter text-white border border-zinc-200'
              handlerEvent={handleCancel}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default UserDetailsForm;
