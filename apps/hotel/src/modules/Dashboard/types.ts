export type PendingInvoicesDataT = {
  key: string;
  Vendor: string;
  Due_date: string;
  Status: number;
  Amount: number;
};

export type RecentOrdersDataT = {
  key: string;
  Vendor: string;
  Delivery_date: string;
  Status: number;
  Invoice_no: string;
};

export type RecentRFQDataT = {
  key: string;
  Vendor_info: {
    name: string;
    email: string;
    avatar: string;
    contact: string;
  };
  RFQ_id: string;
  Apply_date: string;
  Status: number;
};

// export type StatusDataT = {
//   title: string;
//   color: string;
//   code: number;
// };
