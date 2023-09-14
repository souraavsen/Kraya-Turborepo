import { CalendarOutlined, PaperClipOutlined } from "@ant-design/icons";
import { DatePicker, Form, Upload } from "antd";
import React from "react";
import Cross from "../../../../assets/Icons/Cross";
import CustomTextArea from "../../../../components/lib/Input/TextArea";
import { initialExpiryDate } from "../../constants";
import { RFQInfoFromPropsT } from "../../types";
import PaperPlane from "../../../../assets/Icons/PaperPlane";
import { Link } from "react-router-dom";

const RFQInfoFrom: React.FC<RFQInfoFromPropsT> = ({
  expiryDate,
  setExpiryDate,
  handleChangeDate,
}) => {
  return (
    <div className='mt-5 font-Inter'>
      <div className='text-content-primary text-base 2xl:text-lg 3xl:text-xl font-medium leading-tight mb-2.5'>
        Detailed requirements:
      </div>
      <div className='text-content-primary text-sm 2xl:text-sm 3xl:text-lg font-normal leading-normal mb-5'>
        Enter product details such as color, size, materials etc. and other
        specification requirements to receive an accurate quote.
      </div>

      <CustomTextArea
        id='message'
        name='message'
        message={"Please enter message"}
        rows={6}
        placeholder='Type Something . . .'
        handlerEvent={() => {}}
      />

      <div className='font-Inter flex items-center gap-4'>
        <Form.Item
          id='attachment'
          name='attachment'
          rules={[
            {
              required: true,
              message: "Please select a file",
            },
          ]}
        >
          <Upload id='attachment' name='attachment' fileList={[]}>
            <div className='flex items-center text-content-primary'>
              <span>
                <PaperClipOutlined className='mr-2 py-0 my-0 leading-[0]' />
              </span>
              <span>Add attachment</span>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item id='expiry-date' name='expiry-date'>
          <div className='text-content-primary'>
            <DatePicker
              id='expiry-date'
              className='w-0 absolute cursor-pointer m-0 border-none p-0'
              format={"DD MMM, YYYY"}
              allowClear
              suffixIcon
              onChange={handleChangeDate}
            />
            <label
              htmlFor='expiry-date'
              className='flex items-center cursor-pointer'
            >
              <span className='leading-[0]'>
                <CalendarOutlined className='my-auto py-0 leading-[0] mr-2' />
              </span>
              <span>{expiryDate}</span>
              {expiryDate !== initialExpiryDate ? (
                <span className='ml-1'>
                  <div
                    onClick={() => {
                      setExpiryDate(initialExpiryDate);
                    }}
                  >
                    <Cross classes='w-3 text-white bg-gray-500 rounded-full p-[1px]' />
                  </div>
                </span>
              ) : null}
            </label>
          </div>
        </Form.Item>
      </div>

      <Link to={"../shop/rfq-success"}>
        <button
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
          }}
          className={`px-2 lg:px-3 3xl:px-5 py-1.5 3xl:py-2.5 bg-[#EF7420] rounded-[5px] flex justify-center items-center hover:opacity-80 transition-all duration-200 text-white`}
        >
          <span className='text-sm 3xl:text-base font-medium font-Inter leading-normal mr-2'>
            Send
          </span>
          <span>
            <PaperPlane classes='w-5 h-5' />
          </span>
        </button>
      </Link>

      <div className='mt-5'>
        <span className='text-content-primary text-sm font-normal mr-1'>
          Recommend matching suppliers if this supplier doesn't contact me
          within 24 hours.
        </span>
        <span className='text-orange-500 text-sm font-bold'>RFQ</span>
      </div>

      <div className='text-content-primary text-sm font-normal mt-5'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </div>
  );
};

export default RFQInfoFrom;
