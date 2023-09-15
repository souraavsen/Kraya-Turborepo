import { useState } from "react";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import FirstSummary from "../components/FirstSummary";
import Overview from "../components/Overview";
import SecondSummary from "../components/SecondSummary";
import ThirdSummary from "../components/ThirdSummary";
import { filterType } from "../constants";
// import Button from "../../../components/lib/Button";
import {Button} from "shared";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Weekly");

  return (
    <div className='w-auto h-screen overflow-y-auto bg-bkg-primary text-content-primary flex flex-col justify-between'>
      <AdminNavbar title='' search={false} ActionButton={null} />

      {/* <div className='max-w-[120rem] mx-auto px-4 xl:px-6 3xl:px-14 py-8'> */}
      <div className='px-4 xl:px-6 3xl:px-14 py-8'>
        <div className='w-full xl:flex items-center justify-between'>
          <div className='text-content-secondary text-xl font-normal leading-[38px]'>
            Good Morning, James Richards!
          </div>
          <div className='flex gap-1 mt-3 xl:mt-0'>
            {filterType.map((filter: string, i: number) => (
              <Button
                key={i}
                title={filter}
                extraClassName={`${
                  activeFilter === filter
                    ? "bg-btn-blue text-white"
                    : "bg-transparent text-content-primary"
                }`}
                handlerEvent={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>

        <Overview />

        {/* Summary of RFQ vs Quotation, Top 5 Demand Products & Quotation Vs
        Approval */}
        <FirstSummary />
        <SecondSummary />
        <ThirdSummary />
      </div>

      {/* Copyright Footer */}
      <Copyright />
    </div>
  );
};

export default Dashboard;
