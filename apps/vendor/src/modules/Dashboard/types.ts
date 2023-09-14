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

export type RecentUpdatesT = {
  key: string;
  hotel_info: {
    name: string;
    email: string;
    contact: string;
  };
  file:string;
  rfq_id: string;
  apply_date: string;
  status: number;
};

// export type StatusDataT = {
//   title: string;
//   color: string;
//   code: number;
// };
