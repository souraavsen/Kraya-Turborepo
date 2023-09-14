import Table, { ColumnsType, TableProps } from "antd/es/table";
import React from "react";
import EditPen from "../../../assets/Icons/EditPen";
import DeleteBin from "../../../assets/Icons/DeleteBin";
import { RoleBasedUserDetailsT, RoleBasedUsersPropsT } from "../types";
import { RoleBasedUserData } from "../constants";
import { paginationConfig } from "../../../components/CustomAntd/conf";

const RoleBasedUsers: React.FC<RoleBasedUsersPropsT> = ({
  setIsEditUserRoleOpen,
  setIsDeleteModuleOpen,
}) => {
  const roleBasedUserDetailsColumns: ColumnsType<RoleBasedUserDetailsT> = [
    {
      title: "Role Name",
      render: (value) => {
        return (
          <div className='w-20 3xl:w-24 text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
            {value.role_name}
          </div>
        );
      },
    },
    {
      title: "Modules Permission",
      dataIndex: "permissions",
      key: "permissions",
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
      render: (value: RoleBasedUserDetailsT) => {
        console.log(value);
        return (
          <div className='flex items-center gap-2'>
            <div
              onClick={() => {
                setIsEditUserRoleOpen(true);
              }}
            >
              <EditPen classes='w-5 h-5 text-content-primary cursor-pointer' />
            </div>
            <div
              onClick={() => {
                setIsDeleteModuleOpen(true);
              }}
            >
              <DeleteBin classes='w-5 h-5 text-content-primary cursor-pointer' />
            </div>
          </div>
        );
      },
    },
  ];

  const handleUserDetailsChange: TableProps<RoleBasedUserDetailsT>["onChange"] =
    (pagination) => {
      console.log(pagination);
    };

  return (
    <Table
      style={{
        fontFamily: "Inter, sans-serif",
        marginTop: "2rem",
      }}
      scroll={{ x: "max-content" }}
      columns={roleBasedUserDetailsColumns}
      dataSource={RoleBasedUserData}
      onChange={handleUserDetailsChange}
      pagination={paginationConfig}
    />
  );
};

export default RoleBasedUsers;
