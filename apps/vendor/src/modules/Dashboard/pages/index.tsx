import { useState } from "react";
import Copyright from "../../../components/Footer/Copyright";
import UserProfile from "../../../components/Navbar/UserProfile";
import FirstSummary from "../components/FirstSummary";
import Overview from "../components/Overview";
import SecondSummary from "../components/SecondSummary";
import ThirdSummary from "../components/ThirdSummary";
import { filterType } from "../constants";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Weekly");

  return (
    <div className='w-auto h-screen overflow-y-auto bg-bkg-primary text-content-primary'>
      <div className='flex justify-between items-center pr-8 py-3 border-b'>
        <div className='text-content-primary xl:text-xl font-medium px-6 3xl:px-14 py-3'>
          Dashboard
        </div>
        <UserProfile />
      </div>

      <div className='px-4 xl:px-6 3xl:px-14 py-8'>
        <div className='w-full xl:flex items-center justify-between'>
          <div className='text-content-secondary text-xl font-normal leading-[38px]'>
            Good Morning, James Richards!
          </div>
          <div className='flex gap-1 mt-3 xl:mt-0'>
            {filterType.map((filter: string, i: number) => (
              <span
                key={i}
                className={` text-xs 3xl:text-sm py-2 3xl:py-2.5 px-7 3xl:px-9 ${
                  activeFilter === filter
                    ? "bg-white text-gray-900"
                    : "bg-transparent text-content-primary"
                } font-semibold leading-tight rounded-md cursor-pointer`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </span>
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
