import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table/interface";
import React from "react";
import DeleteBin from "../../../assets/Icons/DeleteBin";
import EditPen from "../../../assets/Icons/EditPen";
import { paginationConfig } from "../../../components/CustomAntd/conf";
import { userTableData } from "../constants";
import { UserDetailsPropsT, UserDetailsT } from "../types";

const UserDetails: React.FC<UserDetailsPropsT> = ({
  setIsEditUserOpen,
  setIsDeleteUserOpen,
}) => {
  const handleRecentRFQChange: TableProps<UserDetailsT>["onChange"] = (
    pagination
  ) => {
    console.log(pagination);
  };

  const userDetailsColumns: ColumnsType<UserDetailsT> = [
    {
      title: "Name",
      render: (value) => {
        return (
          <div className='flex items-center gap-2 3xl:gap-4 font-Inter'>
            <img className='w-8 h-8' src={value.avatar} alt='' />
            <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
              {value.name}
            </div>
          </div>
        );
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "Email ID",
      dataIndex: "email",
      key: "email",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone_no",
      key: "phone_no",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "User Group",
      dataIndex: "user_group",
      key: "user_group",
      render: (value: string) => {
        return <span className='font-Inter'>{value}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: any) => {
        if (value) {
          return (
            <div className='w-fit h-[22px] px-2 py-0.5 bg-green-50 rounded-[5px] justify-start items-center gap-1 inline-flex font-Inter'>
              <div className='w-1.5 h-1.5 relative'>
                <div className='w-1.5 h-1.5 left-0 top-0 absolute bg-green-700 rounded-[5px]' />
              </div>
              <div className='text-green-700 text-[13px] font-medium leading-[18px]'>
                Active
              </div>
            </div>
          );
        } else {
          return (
            <div className='w-fit h-[22px] px-2 py-0.5 bg-zinc-200 rounded-[5px] justify-start items-center gap-1 inline-flex font-Inter'>
              <div className='w-1.5 h-1.5 relative'>
                <div className='w-1.5 h-1.5 left-0 top-0 absolute bg-white rounded-[5px]' />
              </div>
              <div className='text-white text-[13px] font-medium leading-[18px]'>
                Inactive
              </div>
            </div>
          );
        }
      },
    },
    {
      title: "Action",
      render: (value: UserDetailsT) => {
        console.log(value);
        return (
          <div className='flex items-center gap-2'>
            <div
              onClick={() => {
                setIsEditUserOpen(true);
              }}
            >
              <EditPen classes='w-5 h-5 text-content-primary cursor-pointer' />
            </div>
            <div
              onClick={() => {
                setIsDeleteUserOpen(true);
              }}
            >
              <DeleteBin classes='w-5 h-5 text-content-primary cursor-pointer' />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      style={{
        fontFamily: "Inter, sans-serif",
      }}
      scroll={{ x: "max-content" }}
      columns={userDetailsColumns}
      dataSource={userTableData}
      onChange={handleRecentRFQChange}
      pagination={paginationConfig}
    />
  );
};

export default UserDetails;
