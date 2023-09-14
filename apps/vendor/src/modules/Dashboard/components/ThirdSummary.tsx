import { ArrowDownOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Table } from "antd";
import type {
  ColumnsType,
  SorterResult
} from "antd/es/table/interface";
import React, { useState } from "react";
import DotMenu from "../../../assets/Icons/DotMenu";
import File from "../../../assets/Icons/File";
import ActivityLogs from "../../../components/ActivityLogs";
import { paginationConfig } from "../../../components/CustomAntd/conf";
import { recentRFQData } from "../constants";
import { RecentUpdatesT } from "../types";

const ThirdSummary = () => {
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [sortedRecentUpdates, setSortedRecentUpdates] = useState<
    SorterResult<RecentUpdatesT>
  >({});

  const handleRecentRFQChange: TableProps<RecentUpdatesT>["onChange"] = (
    pagination,
    filter,
    sorter
  ) => {
    console.log(pagination);
    console.log(filter);
    setSortedRecentUpdates(sorter as SorterResult<RecentUpdatesT>);
  };

  const recentRFQColumns: ColumnsType<RecentUpdatesT> = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      defaultSortOrder: "ascend",
      sortDirections: ["descend"],
      sortOrder:
        sortedRecentUpdates.columnKey === "key" ? sortedRecentUpdates.order : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
    },
    {
      title: "RFQ ID",
      dataIndex: "rfq_id",
      key: "rfq_id",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortOrder:
        sortedRecentUpdates.columnKey === "rfq_id" ? sortedRecentUpdates.order : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.rfq_id.localeCompare(b.rfq_id),
      ellipsis: true,
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      // defaultSortOrder: "ascend",
      // sortDirections: ["ascend"],
      // sortOrder:
      //   sortedRecentUpdates.columnKey === "rfq_id" ? sortedRecentUpdates.order : null,
      // sortIcon: () => <CustomSortIcon />,
      // sorter: (a, b) => a.rfq_id.localeCompare(b.rfq_id),
      ellipsis: true,
      render: (value) => {
        return (
          <span>
            <a
              className='hover:text-content-primary'
              href={`${window.location.origin}/${value}`}
              download
            >
              <File classes='w-5 h-5' />
            </a>
          </span>
        );
      },
    },

    {
      title: "Vendor",
      dataIndex: "hotel_info",
      key: "hotel_info",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortOrder:
        sortedRecentUpdates.columnKey === "hotel_info"
          ? sortedRecentUpdates.order
          : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.hotel_info.name.localeCompare(b.hotel_info.name),
      ellipsis: true,
      render: (value) => {
        return (
          <div>
            <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
              {value.name}
            </div>
            <div className='text-gray-400 text-xs 3xl:text-sm font-medium leading-tight'>
              {value.email}
            </div>
          </div>
        );
      },
    },

    {
      title: "Contact Number",
      dataIndex: "hotel_info",
      key: "hotel_info",
      render: (value) => {
        return (
          <div className='text-content-primary text-xs 3xl:text-sm font-medium leading-tight'>
            {value.contact}
          </div>
        );
      },
    },

    {
      title: "Apply Date",
      dataIndex: "apply_date",
      key: "apply_date",
      sortDirections: ["ascend"],
      sortOrder:
        sortedRecentUpdates.columnKey === "apply_date"
          ? sortedRecentUpdates.order
          : null,
      sortIcon: (sortOrder) => <CustomSortIcon sortOrder={sortOrder} />,
      sorter: (a, b) => {
        const dateA = new Date(a.apply_date) as any;
        const dateB = new Date(b.apply_date) as any;
        return dateA - dateB;
      },
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortOrder:
        sortedRecentUpdates.columnKey === "status" ? sortedRecentUpdates.order : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.status - b.status,
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

  const handleCheckActivityLog = (value: RecentUpdatesT) => {
    console.log(`${value.key}`);
    setShowActivityLog(true);
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
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
            scroll={{ x: "max-content" }}
            columns={recentRFQColumns}
            dataSource={recentRFQData}
            onChange={handleRecentRFQChange}
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
        <div className={`w-1.5 h-1.5 bg-orange-500 rounded-full`} />
        <div
          className={`text-orange-500 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Queries
        </div>
      </div>
    );
  } else if (value === 2) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-orange-400 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-orange-400 rounded-full`} />
        <div
          className={`text-orange-400 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Acknowledgement
        </div>
      </div>
    );
  } else if (value === 3) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-yellow-500 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-yellow-500 rounded-full`} />
        <div
          className={`text-yellow-500 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          Negotiation
        </div>
      </div>
    );
  } else if (value === 4) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-blue-500 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full`} />
        <div
          className={`text-blue-500 text-xs 3xl:text-sm font-medium leading-[18px]`}
        >
          PO send
        </div>
      </div>
    );
  } else if (value === 5) {
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
  }
};
