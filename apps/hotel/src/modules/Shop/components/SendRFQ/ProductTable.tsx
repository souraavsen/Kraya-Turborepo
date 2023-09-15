import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import DeleteBin from "../../../../assets/Icons/DeleteBin";
import {Input} from "shared";

const ProductTable: React.FC = () => {
  const columns: ColumnsType<any> = [
    {
      title: "Product name",
      dataIndex: "product_name",
    },
    {
      title: "Quantity",
      render: () => (
        <div className='flex justify-start'>
          <div className='flex justify-center'>
            <Input
              id='product_quantity'
              name='product_quantity'
              extraClassName='w-12 text-center text-content-primary placeholder:opacity-60'
              placeholder='10'
              bordered
              onChange={() => {}}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Size",
      render: () => (
        <div className='flex justify-start'>
          <div className='flex justify-center'>
            <Input
              id='product_size'
              extraClassName='w-12 text-center text-content-primary placeholder:opacity-60'
              name='product_size'
              placeholder='10'
              bordered
              onChange={() => {}}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Color",
      dataIndex: "color",
      render: (color: string) => (
        <span className='whitespace-nowrap xl:whitespace-normal'>{color}</span>
      ),
    },

    {
      title: "Action",
      className: "text-content-primary",
      render: () => (
        <div>
          <div>
            <DeleteBin classes='w-4 h-4 text-content-primary cursor-pointer' />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product_name: "Product name",
      color: "Color 1, Color 2, Color 3",
    },
    {
      key: "2",
      product_name: "Product name",
      color: "Color 2, Color 4",
    },
    {
      key: "3",
      product_name: "Product name",
      color: "Color 1, Color 2, Color 5",
    },
    {
      key: "4",
      product_name: "Product name",
      color: "Color 1, Color 2, Color 4",
    },
    {
      key: "5",
      product_name: "Product name",
      color: "Color 1, Color 2, Color 3",
    },
  ];

  return (
    <div className='p-2 border rounded-lg font-Inter'>
      <Table
        className='cusstom'
        bordered={false}
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{
          x: true,
        }}
      />
    </div>
  );
};

export default ProductTable;
