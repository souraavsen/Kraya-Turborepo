import { useState } from "react";
import { BrandLogo } from "../../../assets/Icons/BrandLogo";
import { Form, Input } from "antd";

const LoginFrom = () => {
  const [ifRememberMe, setIfRememberMe] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='xl:w-40p py-16 flex items-center justify-center bg-bkg-primary'>
      <div className='w-9/12 3xl:w-7/12 mx-auto'>
        <div className='flex items-center'>
          <span className='-ml-2'>
            <BrandLogo classes='w-10 h-10 3xl:w-20 3xl:h-20 text-content-primary' />
          </span>
          <span className='font-Poppins lg:text-3xl 3xl:text-5xl font-semibold leading-5 text-content-primary'>
            Kraya
          </span>
        </div>
        <div className='mt-5 3xl:mt-14'>
          <h1 className='font-Roboto text-content-primary text-2xl 3xl:text-4xl leading-normal font-extrabold'>
            Login
          </h1>
          <div className='text-zinc-400 text-sm 3xl:text-lg font-semibold mt-3 3xl:mt-4'>
            Please Sign-in to your account
          </div>
          <div className='mt-4 3xl:mt-12'>
            <Form
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div>
                <div className='text-content-primary text-sm 3xl:text-base font-bold mb-2'>
                  Username
                </div>
                <Form.Item
                  name='username'
                  rules={[
                    { required: true, message: "Please insert your username" },
                  ]}
                >
                  <Input className='w-full py-2 3xl:py-3 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-lg border border-gray-200 outline-none text-sm 3xl:text-base focus:border-gray-200' />
                </Form.Item>
              </div>

              <div className='mt-6'>
                <div className='text-content-primary text-sm 3xl:text-base font-bold mb-2'>
                  Password
                </div>
                <Form.Item
                  name='password'
                  rules={[
                    { required: true, message: "Please insert your password" },
                  ]}
                >
                  <Input.Password className='w-full py-2 3xl:py-3 px-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-lg border border-gray-200 outline-none text-sm 3xl:text-base focus:outline-none focus:border-gray-200' />
                </Form.Item>
              </div>

              <div className='mt-6 flex justify-between items-center'>
                <div className='flex items-center'>
                  <div
                    className='w-3.5 3xl:w-5 h-3.5 3xl:h-5 bg-bkg-primary text-content-primary border border-gray-200 mr-1.5 3xl:mr-2.5 flex justify-center items-center cursor-pointer'
                    onClick={() => setIfRememberMe(!ifRememberMe)}
                  >
                    {ifRememberMe ? (
                      <svg
                        className='transition-all delay-200 duration-200 cursor-pointer text-content-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        onClick={() => setIfRememberMe(!ifRememberMe)}
                      >
                        <path
                          d='M14 8.33337L8.93397 13.1582C8.74176 13.3412 8.43012 13.3412 8.23791 13.1582L6.125 11.1459'
                          stroke='currentColor'
                          strokeLinecap='round'
                        />
                      </svg>
                    ) : null}
                  </div>
                  <span
                    className='text-content-primary text-xs 3xl:text-base font-bold cursor-pointer'
                    onClick={() => setIfRememberMe(!ifRememberMe)}
                  >
                    Remember me
                  </span>
                </div>
                <div className='cursor-pointer text-content-primary text-xs 3xl:text-base font-bold'>
                  Forgot password ?
                </div>
              </div>

              <button className='w-full h-12 3xl:h-14 btn_primary relative mt-5 rounded-lg'>
                <div className='text-bkg-primary text-base font-bold'>
                  Login
                </div>
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
