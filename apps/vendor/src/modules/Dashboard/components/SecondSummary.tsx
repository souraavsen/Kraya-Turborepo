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
import { pendingInvoicesData, recentOrdersData } from "../constants";
import { PendingInvoicesDataT, RecentOrdersDataT } from "../types";

const SecondSummary = () => {
  const [sortedPendingInvoices, setSortedPendingInvoices] = useState<
    SorterResult<PendingInvoicesDataT>
  >({});

  const [sortedReceivedOrders, setSortedReceivedOrders] = useState<
    SorterResult<RecentOrdersDataT>
  >({});

  const handlePendingInvoicesChange: TableProps<PendingInvoicesDataT>["onChange"] =
    // (pagination, filters, sorter) => {
    (pagination, filters, sorter) => {
      console.log(pagination);
      console.log(filters);
      setSortedPendingInvoices(sorter as SorterResult<PendingInvoicesDataT>);
    };

  const handleReceivedOrdersChange: TableProps<RecentOrdersDataT>["onChange"] =
    (pagination, filter, sorter) => {
      console.log(pagination);
      console.log(filter);
      setSortedReceivedOrders(sorter as SorterResult<RecentOrdersDataT>);
    };

  const pendingInvoicesColumns: ColumnsType<PendingInvoicesDataT> = [
    {
      title: "Vendor",
      dataIndex: "Vendor",
      key: "Vendor",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.Vendor.localeCompare(b.Vendor),
      sortOrder:
        sortedPendingInvoices.columnKey === "Vendor"
          ? sortedPendingInvoices.order
          : null,
      ellipsis: true,
    },
    {
      title: "Due Date",
      dataIndex: "Due_date",
      key: "Due_date",
      sortDirections: ["ascend"],
      sortOrder:
        sortedPendingInvoices.columnKey === "Due_date"
          ? sortedPendingInvoices.order
          : null,
      sortIcon: (sortOrder) => <CustomSortIcon sortOrder={sortOrder} />,
      sorter: (a, b) => {
        const dateA = new Date(a.Due_date) as any;
        const dateB = new Date(b.Due_date) as any;
        return dateA - dateB;
      },
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sortDirections: ["ascend", "descend"],
      defaultSortOrder: "ascend",
      sortIcon: (sortOrder) => <CustomSortIcon sortOrder={sortOrder} />,
      sorter: (a, b) => a.Status - b.Status,
      sortOrder:
        sortedPendingInvoices.columnKey === "Status"
          ? sortedPendingInvoices.order
          : null,
      // ellipsis: true,
      render: (value: any) => {
        return getStatus(value);
      },
    },

    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (value) => {
        return <span className='text-indigo-600 font-medium'>${value}</span>;
      },
    },
  ];

  const RecentOrdersColumns: ColumnsType<RecentOrdersDataT> = [
    {
      title: "Vendor",
      dataIndex: "Vendor",
      key: "Vendor",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend"],
      sortOrder:
        sortedReceivedOrders.columnKey === "Vendor"
          ? sortedReceivedOrders.order
          : null,
      sortIcon: () => <CustomSortIcon />,
      sorter: (a, b) => a.Vendor.localeCompare(b.Vendor),
      ellipsis: true,
    },
    {
      title: "Delivery Date",
      dataIndex: "Delivery_date",
      key: "Delivery_date",
      sortDirections: ["ascend"],
      sortIcon: (sortOrder) => <CustomSortIcon sortOrder={sortOrder} />,
      sorter: (a, b) => {
        const dateA = new Date(a.Delivery_date) as any;
        const dateB = new Date(b.Delivery_date) as any;
        return dateA - dateB;
      },
      sortOrder:
        sortedReceivedOrders.columnKey === "Delivery_date"
          ? sortedReceivedOrders.order
          : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sortDirections: ["ascend"],
      sortIcon: (sortOrder) => <CustomSortIcon sortOrder={sortOrder} />,
      sorter: (a, b) => a.Status - b.Status,
      sortOrder:
        sortedReceivedOrders.columnKey === "Status"
          ? sortedReceivedOrders.order
          : null,
      ellipsis: true,
      render: (value: any) => {
        return getStatus(value);
      },
    },

    {
      title: "Invoice No",
      dataIndex: "Invoice_no",
      key: "Invoice_no",
      render: (value: string) => {
        return <span className='text-indigo-600 font-medium'>{value}</span>;
      },
    },
  ];

  // rowSelection objects indicates the need for row selection
  const pendingInvoicesRowSelection: TableRowSelection<PendingInvoicesDataT> = {
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

  const receivedOrdersRowSelection: TableRowSelection<RecentOrdersDataT> = {
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
      <div className='xl:flex items-center gap-2 3xl:gap-6'>
        <div className='rounded-md border py-3 3xl:py-4 px-4 3xl:px-6'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
              Pending Invoices
            </div>
            <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
          </div>
          <div className='overflow-x-auto'>
            <Table
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
              className='hidden xl:block'
              columns={pendingInvoicesColumns}
              dataSource={pendingInvoicesData}
              onChange={handlePendingInvoicesChange}
              rowSelection={{ ...pendingInvoicesRowSelection }}
              pagination={false}
            />
            <Table
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
              className='block xl:hidden'
              scroll={{ x: "max-content" }}
              rowClassName={"bg-transparent"}
              columns={pendingInvoicesColumns}
              dataSource={pendingInvoicesData}
              onChange={handlePendingInvoicesChange}
              rowSelection={{ ...pendingInvoicesRowSelection }}
              pagination={false}
            />
          </div>
        </div>
        <div className='rounded-md border py-3 3xl:py-4 px-4 3xl:px-6'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
              Recent Orders
            </div>
            <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
          </div>
          <div className='overflow-x-auto'>
            <Table
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
              className='hidden xl:block'
              columns={RecentOrdersColumns}
              dataSource={recentOrdersData}
              onChange={handleReceivedOrdersChange}
              rowSelection={{ ...receivedOrdersRowSelection }}
              pagination={false}
            />
            <Table
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
              className='block xl:hidden'
              scroll={{ x: "max-content" }}
              columns={RecentOrdersColumns}
              dataSource={recentOrdersData}
              onChange={handleReceivedOrdersChange}
              rowSelection={{ ...receivedOrdersRowSelection }}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSummary;

const CustomSortIcon: React.FC<any> = () => {
  return (
    <span style={{ opacity: 0.3 }}>
      <ArrowDownOutlined />
    </span>
  );
};

const getStatus = (value: number | boolean) => {
  if (value) {
    return (
      <div
        className={`max-w-max h-5 px-2 py-0.5 bg-green-700 bg-opacity-5 rounded-md flex justify-start items-center gap-1`}
      >
        <div className={`w-1.5 h-1.5 bg-green-700 rounded-full`} />
        <div
          className={`text-green-700 text-xs 3xl:text-sm font-medium leading-[18px] whitespace-nowrap`}
        >
          {/* Payment Done */}
          Paid
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
          className={`text-red-600 text-xs 3xl:text-sm font-medium leading-[18px] whitespace-nowrap`}
        >
          On track
        </div>
      </div>
    );
  }
};
