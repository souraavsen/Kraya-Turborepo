import React from "react";
import Activites from "./Activites";
import { ActivityPropsT } from "./types";
import AddActivity from "./AddActivity";
import Cross from "../assets/Icons/Cross";

export const ActivityLogs: React.FC<ActivityPropsT> = ({ open, setOpen }) => {
  return (
    <div>
      <div
        className={`min-h-[100%] ${
          open
            ? "w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] 2xl:w-[35%] opacity-100"
            : "w-0 opacity-0"
        } absolute right-0 top-0 z-50 bg-bkg-primary transition-all delay-100 duration-500 shadow-md`}
      >
        <div className='p-4 3xl:p-5 flex items-center justify-between'>
          <div className='pt-1 text-content-primary text-xl font-normal'>
            Activity Logs
          </div>
          <div onClick={() => setOpen(false)}>
            <Cross classes='w-6 h-6 text-content-primary cursor-pointer' />
          </div>
        </div>
        <hr />

        <div className='p-4 3xl:p-5 max-h-screen overflow-y-scroll'>
          <div className='pb-20'>
            <Activites />
          </div>
          <AddActivity />
        </div>
      </div>
    </div>
  );
};
