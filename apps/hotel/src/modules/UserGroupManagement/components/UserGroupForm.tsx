import { Form, Modal, Switch, message } from "antd";
import React, { useState } from "react";
import Cross from "../../../assets/Icons/Cross";
import avatar from "../../../assets/Images/user1.png";
import {Button, Input, Select} from "shared";
import { ModalContainerPropsT } from "../../../types";

const UserGroupForm: React.FC<ModalContainerPropsT> = ({
  action,
  open,
  handleCancel,
}) => {
  const [selectedUsers, setSelectedUsers] = useState<any>([]);

  const handleAddUserGroup = () => {
    if (action === "add") {
      message.success("New group of user added successfully");
    } else {
      message.success("Group updated successfully");
    }
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // const selectProps: SelectProps = {
  //   mode: "multiple",
  //   value: selectedUsers,
  //   bordered: true,
  //   options: users,
  //   onChange: (newValue: string[]) => {
  //     setSelectedUsers(newValue);
  //   },
  //   placeholder: "Select Item...",
  //   maxTagCount: "responsive",
  // };

  return (
    <>
      <Modal
        className='font-Inter'
        width={600}
        centered
        open={open}
        onCancel={handleCancel}
        footer={[
          <div className='flex justify-end items-center gap-4 py-4 px-8 rounded-bl-lg rounded-br-lg'>
            <Button
              title='Cancel'
              icon={null}
              extraClassName='bg-bkg-primary text-content-primary border border-zinc-200'
              handlerEvent={handleCancel}
            />

            <Button
              title='Submit'
              icon={null}
              extraClassName='w-26 bg-btn-blue text-white border border-zinc-200'
              handlerEvent={handleAddUserGroup}
            />
          </div>,
        ]}
      >
        <div className='text-content-primary text-xl font-semibold leading-[30px] py-4 px-8'>
          {action === "add" ? "Add" : "Edit"} User Group
        </div>
        <hr className='w-full mb-8' />

        <div className='px-8'>
          <div>
            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div>
                <div className='text-content-primary text-sm font-medium leading-tight mb-2'>
                  User Group Name
                </div>
                <Form.Item
                  name='group_name'
                  rules={[
                    { required: true, message: "Please insert a group name" },
                  ]}
                >
                  <Input
                    id='group_name'
                    name='group_name'
                    extraClassName='w-full text-content-primary placeholder:opacity-60'
                    bordered
                    placeholder='Enter User Group Name'
                  />
                </Form.Item>
              </div>
              <div className='mt-6'>
                <div className='text-content-primary text-sm font-medium leading-tight mb-2'>
                  Select Users
                </div>
                <Form.Item
                  name='select_user'
                  rules={[{ required: true, message: "Please select a user" }]}
                >
                  <Select
                    value={selectedUsers}
                    mode={"multiple"}
                    bordered={true}
                    options={users}
                    onChange={(newValue: string[]) => {
                      setSelectedUsers(newValue);
                    }}
                    placeholder={"Select User"}
                    maxTagCount={"responsive"}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>

          <div>
            <div className='text-content-primary text-sm font-medium leading-tight'>
              Selected Users
            </div>
            <div className='mt-4'>
              {new Array(6).fill(0).map((_, i) => (
                <div
                  className='flex gap-2 3xl:gap-4 my-3 3xl:my4 justify-between items-center'
                  key={i}
                >
                  <div className='flex items-center gap-3 3xl:gap-4'>
                    <img className='w-8 h-8' src={avatar} alt='Avatar' />
                    <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
                      Rakesh Behra
                    </div>
                  </div>
                  <div>
                    <Cross classes='w-5 h-[21px] text-[#5F6D7E] cursor-pointer' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {action === "edit" && (
            <div className='mt-6'>
              <div className='text-content-primary text-sm font-medium leading-tight mb-4'>
                Status
              </div>
              <div>
                <Switch defaultChecked />
                <span className='ml-3.5'>Active</span>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default UserGroupForm;

const users = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled", disabled: true },
];
