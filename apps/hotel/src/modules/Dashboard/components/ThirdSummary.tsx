import { ArrowDownOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Table } from "antd";
import type {
  ColumnsType,
  SorterResult,
  TableRowSelection,
} from "antd/es/table/interface";
import React, { useState } from "react";
import DotMenu from "../../../assets/Icons/DotMenu";
// import ActivityLogs from "../../../components/ActivityLogs";
import {ActivityLogs} from "shared";
import { paginationConfig } from "../../../components/CustomAntd/conf";
import { recentRFQData } from "../constants";
import { RecentRFQDataT } from "../types";

const ThirdSummary = () => {
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [sortedRecentRFQ, setSortedRecentRFQ] = useState<
    SorterResult<RecentRFQDataT>
  >({});

  const handleRecentRFQChange: TableProps<RecentRFQDataT>["onChange"] = (
    pagination,
    filter,
    sorter
  ) => {
    console.log(pagination);
    console.log(filter);
    setSortedRecentRFQ(sorter as SorterResult<RecentRFQDataT>);
  };

  const recentRFQColumns: ColumnsType<RecentRFQDataT> = [
    {
      title: "Vendor",
      dataIndex: "Vendor_info",
      key: "Vendor_info",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortOrder:
        sortedRecentRFQ.columnKey === "Vendor_info"
          ? sortedRecentRFQ.order
          : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.Vendor_info.name.localeCompare(b.Vendor_info.name),
      ellipsis: true,
      render: (value) => {
        return (
          <div className='flex gap-2 3xl:gap-4'>
            <img className='w-8 h-8' src={value.avatar} alt='' />
            <div>
              <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
                {value.name}
              </div>
              <div className='text-gray-400 text-xs 3xl:text-sm font-medium leading-tight'>
                {value.email}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Vendor Contact",
      dataIndex: "Vendor_info",
      key: "Vendor_info",
      render: (value) => {
        return (
          <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
            {value.contact}
          </div>
        );
      },
    },

    {
      title: "RFQ ID",
      dataIndex: "RFQ_id",
      key: "RFQ_id",
    },

    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (value: any) => {
        return getStatus(value);
      },
    },
    {
      title: "View",
      render: (value: any) => {
        return (
          <button
            className='w-[55px] h-[26px] px-[13px] py-1 bg-gray-200 rounded-sm justify-start items-center gap-2.5 inline-flex'
            onClick={() => handleCheckActivityLog(value)}
          >
            <div className='text-gray-500 text-xs font-medium leading-[18px]'>
              View
            </div>
          </button>
        );
      },
    },
  ];

  const handleCheckActivityLog = (value: RecentRFQDataT) => {
    console.log(`${value.key}`);
    setShowActivityLog(true);
  };

  const recentRFQRowSelection: TableRowSelection<RecentRFQDataT> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <div className='mt-7'>
      <ActivityLogs open={showActivityLog} setOpen={setShowActivityLog} />
      <div className='rounded-md border py-3 3xl:py-4 px-4 3xl:px-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
            Recent RFQ
          </div>
          <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
        </div>
        <div className='overflow-x-auto'>
          <Table
            scroll={{ x: "max-content" }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
            columns={recentRFQColumns}
            dataSource={recentRFQData}
            onChange={handleRecentRFQChange}
            rowSelection={{ ...recentRFQRowSelection }}
            pagination={paginationConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSummary;

const CustomSortIcon: React.FC<any> = () => {
  return (
    <span style={{ opacity: 0.3 }}>
      <ArrowDownOutlined />
    </span>
  );
};

const getStatus = (value: number | boolean) => {
  if (value === 0) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-red-600 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-red-600 rounded-full`} />
        <div
          className={`text-red-600 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Rejected
        </div>
      </div>
    );
  } else if (value === 1) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-orange-400 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-orange-400 rounded-full`} />
        <div
          className={`text-orange-400 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          On Hold
        </div>
      </div>
    );
  } else if (value === 2) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-blue-500 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full`} />
        <div
          className={`text-blue-500 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Review
        </div>
      </div>
    );
  } else if (value === 3) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-green-700 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-green-700 rounded-full`} />
        <div
          className={`text-green-700 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Accepted
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-red-600 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-red-600 rounded-full`} />
        <div
          className={`text-red-600 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Overdue
        </div>
      </div>
    );
  }
};
