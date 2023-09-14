import React from "react";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import RFQDetails from "../components/SendRFQ/RFQDetails";
import Copyright from "../../../components/Footer/Copyright";
import SelectedVendors from "../components/SendRFQ/SelectedVendors";

const SendRFQ: React.FC = () => {
  return (
    <div className='max_page_width h-screen overflow-y-auto bg-bkg-primary'>
      <div>
        <AdminNavbar title='' search={false} ActionButton={<></>} />

        <div className='mx-6 xl:flex'>
          <div className='xl:pr-6 w-full xl:w-8/12 pt-5 pb-8 xl:pb-28'>
            <RFQDetails />
          </div>
          <div className='w-full xl:w-4/12 pt-5 pb-16 xl:pb-28 px-6 xl:min-h-screen xl:border-l'>
            <SelectedVendors />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default SendRFQ;
