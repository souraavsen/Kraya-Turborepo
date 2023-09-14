import { Form, Input, Modal, Switch, message } from "antd";
import React from "react";
import avatar from "../../../assets/Images/user1.png";
import Cross from "../../../assets/Icons/Cross";
import { ModalContainerPropsT } from "../../../types";

const UserGroupForm: React.FC<ModalContainerPropsT> = ({
  action,
  open,
  handleCancel,
}) => {
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
              Submit
            </div>
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
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div>
                <div className='text-content-primary text-sm font-medium leading-tight'>
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
                    className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                    placeholder='Enter User Group Name'
                  />
                </Form.Item>
              </div>
              <div className='mt-6'>
                <div className='text-content-primary text-sm font-medium leading-tight'>
                  Select Users
                </div>
                <Form.Item
                  name='select_user'
                  rules={[{ required: true, message: "Please select a user" }]}
                >
                  <Input
                    id='select_user'
                    name='select_user'
                    className='w-full py-1.5 3xl:py-2 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-[5px] border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200 mt-1.5'
                    placeholder='Select Users'
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
                      Rakesh Behra {i}
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
