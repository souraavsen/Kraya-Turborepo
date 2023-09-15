import { Form, Modal,  message } from "antd";
import React from "react";
import { ModalContainerPropsT } from "../../../types";
import PermissionDetails from "./PermissionDetails";
// import Input from "../../../components/lib/Input/Input";
import {Input,CheckBox,Button} from "shared";

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
                <div className='text-content-primary text-sm font-medium leading-tight mb-2'>
                  Role Name
                </div>
                <Form.Item name='role_name'>
                  <Input
                    id='role_name'
                    name='role_name'
                    extraClassName='w-full text-content-primary placeholder:opacity-60'
                    bordered
                    placeholder='Role Name'
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
                    <CheckBox id={"status"} title={"Status"} />
                    {/* <Switch defaultChecked /> */}
                    <span className='ml-3.5'>Active</span>
                  </div>
                </Form.Item>
              </div>
            )}
          </div>

          <div className='flex justify-end items-center gap-4 py-4 px-8 bg-gray-50 rounded-bl-lg rounded-br-lg'>
            <Button
              title='Cancel'
              icon={null}
              extraClassName='bg-bkg-primary font-Inter text-content-primary border border-zinc-200'
              handlerEvent={handleCancel}
            />

            <Button
              title='Submit'
              icon={null}
              extraClassName='w-26 bg-btn-blue font-Inter text-white border border-zinc-200'
              handlerEvent={() => {}}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RoleManagementForm;
