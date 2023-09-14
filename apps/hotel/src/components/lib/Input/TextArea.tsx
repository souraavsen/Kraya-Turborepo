import { Form, Input } from "antd";
import React from "react";
import { TextAreaPropsT } from "../types";

const { TextArea } = Input;

const CustomTextArea: React.FC<TextAreaPropsT> = ({
  id,
  name,
  rows,
  cols,
  message,
  extraClassName,
  placeholder,
  handlerEvent,
}) => {
  return (
    <Form.Item
      id={id}
      name={name}
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ required: true, message: message }]}
    >
      <TextArea
        id={id}
        name={name}
        className={`${extraClassName} p-8 text-content-primary`}
        rows={rows}
        cols={cols}
        onChange={(e: any) => handlerEvent(e)}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default CustomTextArea;
