import Avatar1 from "../../../assets/Images/rrfq_avatar.png";
import Avatar2 from "../../../assets/Images/rrfq_avatar1.png";
import Avatar3 from "../../../assets/Images/rrfq_avatar2.png";
import {
  PendingInvoicesDataT,
  RecentOrdersDataT,
  RecentRFQDataT,
} from "../types";

export const filterType: string[] = ["Weekly", "Monthly", "Yearly"];

export const recentRFQData: RecentRFQDataT[] = [
  {
    key: "1",
    Vendor_info: {
      name: "Grand Rapids",
      email: "grand.rapids@gmail.com",
      avatar: Avatar1,
      contact: "+91 700 838 1259",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 0,
  },
  {
    key: "2",
    Vendor_info: {
      name: "Bell Gardens",
      email: "bell.gardens@gmail.com",
      avatar: Avatar2,
      contact: "+91 700 838 1259",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 1,
  },
  {
    key: "3",
    Vendor_info: {
      name: "Broomfield",
      email: "broomfield@gmail.com",
      avatar: Avatar3,
      contact: "+91 891 734 4728",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 3,
  },
  {
    key: "4",
    Vendor_info: {
      name: "Grand Rapids",
      email: "grand.rapids@gmail.com",
      avatar: Avatar1,
      contact: "+91 700 838 1259",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 3,
  },
  {
    key: "5",
    Vendor_info: {
      name: "Bell Gardens",
      email: "bell.gardens@gmail.com",
      avatar: Avatar2,
      contact: "+91 700 838 1259",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 2,
  },
  {
    key: "6",
    Vendor_info: {
      name: "Broomfield",
      email: "broomfield@gmail.com",
      avatar: Avatar3,
      contact: "+91 891 734 4728",
    },
    RFQ_id: "KYRFQ0001",
    Apply_date: "03/03/2023",
    Status: 1,
  },
];

export const pendingInvoicesData: PendingInvoicesDataT[] = [
  {
    key: "1",
    Vendor: "John Brown",
    Due_date: "03/03/2023",
    Status: 1,
    Amount: 390.99,
  },
  {
    key: "2",
    Vendor: "Jim Green",
    Due_date: "04/03/2023",
    Status: 0,
    Amount: 120,
  },
  {
    key: "3",
    Vendor: "Clark Brown",
    Due_date: "09/03/2023",
    Status: 0,
    Amount: 190.99,
  },
  {
    key: "4",
    Vendor: "Alex Brown",
    Due_date: "01/03/2023",
    Status: 1,
    Amount: 39.99,
  },
];

export const recentOrdersData: RecentOrdersDataT[] = [
  {
    key: "1",
    Vendor: "John Brown",
    Delivery_date: "08/03/2023",
    Status: 1,
    Invoice_no: "#84519",
  },
  {
    key: "2",
    Vendor: "Jim Green",
    Delivery_date: "03/03/2023",
    Status: 0,
    Invoice_no: "#75519",
  },
  {
    key: "3",
    Vendor: "Clark Brown",
    Delivery_date: "01/03/2023",
    Status: 0,
    Invoice_no: "#24896",
  },
  {
    key: "4",
    Vendor: "Alex Brown",
    Delivery_date: "30/03/2023",
    Status: 1,
    Invoice_no: "#241519",
  },
];
