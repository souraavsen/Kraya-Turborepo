import { DatePickerProps, Form, FormInstance } from "antd";
import React, { useRef, useState } from "react";
import { initialExpiryDate } from "../../constants";
import ProductTable from "./ProductTable";
import RFQInfoFrom from "./RFQInfoFrom";

const RFQDetails: React.FC = () => {
  const rfqFormRef = useRef<FormInstance>(null);
  const [expiryDate, setExpiryDate] = useState<string>(initialExpiryDate);

  const onFinish = () => {};

  const handleChangeDate: DatePickerProps["onChange"] = (_, dateString) => {
    setExpiryDate(dateString);
  };

  return (
    <Form
      ref={rfqFormRef}
      name='control-ref'
      onFinish={onFinish}
      validateTrigger={["onChange", "onBlur"]}
    >
      <div>
        <div className='text-content-primary text-lg 2xl:text-xl 3xl:text-[1.375rem] font-medium leading-tight mb-5 font-Inter'>
          RFQ id: KYRFQ0001
        </div>
        <div className='text-content-primary text-lg 2xl:text-xl 3xl:text-[1.375rem] font-medium leading-normal font-Inter'>
          Product
        </div>
      </div>
      <div className='mt-7'>
        <ProductTable />
      </div>

      <div>
        <RFQInfoFrom
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          handleChangeDate={handleChangeDate}
        />
      </div>
    </Form>
  );
};

export default RFQDetails;
