import { Checkbox, TableProps } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import { modulePersmisisonData } from "../constants";
import { ModulePermissionsDataT } from "../types";

const PermissionDetails: React.FC = () => {
  const handlePermissionChange: TableProps<ModulePermissionsDataT>["onChange"] =
    (pagination) => {
      console.log(pagination);
    };

  const permissionsDetailsColumns: ColumnsType<ModulePermissionsDataT> = [
    {
      title: "Modules Permission",
      dataIndex: "module_name",
      key: "module_name",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "Create",
      dataIndex: "create",
      key: "create",
      render: (value: number | boolean) => {
        return <Checkbox defaultChecked={value ? true : false} />;
      },
    },
    {
      title: "Read",
      dataIndex: "read",
      key: "read",
      render: (value: number | boolean) => {
        return <Checkbox defaultChecked={value ? true : false} />;
      },
    },
    {
      title: "Update",
      dataIndex: "update",
      key: "update",
      render: (value: number | boolean) => {
        return <Checkbox defaultChecked={value ? true : false} />;
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      render: (value: number | boolean) => {
        return <Checkbox defaultChecked={value ? true : false} />;
      },
    },
  ];

  return (
    <Table
      style={{
        fontFamily: "Inter, sans-serif",
      }}
      scroll={{ x: "max-content" }}
      columns={permissionsDetailsColumns}
      dataSource={modulePersmisisonData}
      onChange={handlePermissionChange}
      pagination={false}
    />
  );
};

export default PermissionDetails;
