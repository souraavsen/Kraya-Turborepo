import {
  PendingInvoicesDataT,
  RecentOrdersDataT,
  RecentUpdatesT,
} from "../types";
import File from "../../../assets/Images/Dashboard_Img.png";

export const filterType: string[] = ["Weekly", "Monthly", "Yearly"];

export const recentRFQData: RecentUpdatesT[] = [
  {
    key: "1",
    hotel_info: {
      name: "Grand Rapids",
      email: "grand.rapids@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "KYRFQ0001",
    file: File,
    apply_date: "15/03/2023",
    status: 0,
  },
  {
    key: "2",
    hotel_info: {
      name: "Bell Gardens",
      email: "bell.gardens@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "KYRFQ0002",
    file: File,
    apply_date: "10/03/2023",
    status: 1,
  },
  {
    key: "3",
    hotel_info: {
      name: "Broomfield",
      email: "broomfield@gmail.com",
      contact: "+91 891 734 4728",
    },
    rfq_id: "KYRFQ0003",
    file: File,
    apply_date: "03/03/2023",
    status: 5,
  },
  {
    key: "4",
    hotel_info: {
      name: "Grand Rapids",
      email: "grand.rapids@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "KYCFQ0004",
    file: File,
    apply_date: "02/03/2023",
    status: 4,
  },
  {
    key: "5",
    hotel_info: {
      name: "Bell Gardens",
      email: "bell.gardens@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "BYRFQ0005",
    file: File,
    apply_date: "04/03/2023",
    status: 2,
  },
  {
    key: "6",
    hotel_info: {
      name: "Broomfield",
      email: "broomfield@gmail.com",
      contact: "+91 891 734 4728",
    },
    rfq_id: "AYRFQ0006",
    file: File,
    apply_date: "06/03/2023",
    status: 3,
  },
  {
    key: "7",
    hotel_info: {
      name: "Grand Rapids",
      email: "grand.rapids@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "KYCFQ0004",
    file: File,
    apply_date: "03/03/2023",
    status: 4,
  },
  {
    key: "8",
    hotel_info: {
      name: "Bell Gardens",
      email: "bell.gardens@gmail.com",
      contact: "+91 700 838 1259",
    },
    rfq_id: "BYRFQ0005",
    file: File,
    apply_date: "03/03/2023",
    status: 2,
  },
  {
    key: "9",
    hotel_info: {
      name: "Broomfield",
      email: "broomfield@gmail.com",
      contact: "+91 891 734 4728",
    },
    rfq_id: "AYRFQ0006",
    file: File,
    apply_date: "03/03/2023",
    status: 3,
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
