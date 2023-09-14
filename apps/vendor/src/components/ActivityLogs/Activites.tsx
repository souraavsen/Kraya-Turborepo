import React from "react";
import File from "../../assets/Icons/File";
import RingingBell from "../../assets/Icons/RingingBell";
import Flag from "../../assets/Icons/Flag";

const Activites: React.FC = () => {
  return (
    <>
      {/* Activity */}
      <div className='flex items-stretch gap-2.5'>
        <div className='flex flex-col items-center justify-stretch'>
          <div className='p-2.5 bg-stone-50 rounded-full flex items-center justify-center z-10'>
            <File classes='w-5 h-5 text-slate-400' />
          </div>
          <div className='h-full w-0 border border-dashed border-zinc-200 -z-10' />
        </div>

        <div className='pb-7'>
          <div>
            <span className='text-content-primary text-base font-medium'>
              You have received a new
            </span>
            <span className='text-blue-400 text-base font-medium'>#45890</span>
            <span className='text-content-primary text-base font-medium'>
              {" "}
              RFQ request
            </span>
          </div>
          <div>
            <span className='text-slate-400 text-xs font-medium'>
              Send at 17-07-13 / 4:23 PM by{" "}
            </span>
            <span className='text-blue-400 text-xs font-medium'>
              Hotel Grand Rapids
            </span>
          </div>

          <div className='w-max rounded-md border border-dashed border-gray-400 flex gap-1 px-2.5 py-2 mt-4'>
            <File classes='w-7 h-7 text-slate-400' />
            <div>
              <div className='text-content-primary text-xs font-normal'>
                RFQ
              </div>
              <div className='text-slate-400 text-[10px] font-normal'>
                1.9mb
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Activity */}
      <div className='flex items-stretch gap-2.5'>
        <div className='flex flex-col items-center'>
          <div className='p-2.5 bg-stone-50 rounded-full flex items-center justify-center z-10'>
            <Flag classes='w-5 h-5 text-[#EEA23E]' />
          </div>
          <div className='h-full w-0 border border-dashed border-zinc-200  -z-10' />
        </div>

        <div className='pb-7'>
          <div className='text-content-primary text-base font-medium'>
            Acknowledgement : working on it
          </div>
          <div>
            <span className='text-slate-400 text-xs font-medium'>
              Send at 17-07-13 / 4:23 PM by{" "}
            </span>
            <span className='text-blue-400 text-xs font-medium'>You</span>
          </div>
        </div>
      </div>
      {/* Activity */}
      <div className='flex items-stretch gap-2.5'>
        <div className='flex flex-col items-center'>
          <div className='p-2.5 bg-stone-50 rounded-full flex items-center justify-center z-10'>
            <RingingBell classes='w-5 h-5 text-red-600' />
          </div>
          <div className='h-full w-0 border border-dashed border-zinc-200  -z-10' />
        </div>

        <div className='pb-7'>
          <div className='text-content-primary text-base font-medium'>
            Reminder : Please send Quotations
          </div>
          <div>
            <span className='text-slate-400 text-xs font-medium'>
              Send at 17-07-13 / 4:23 PM by{" "}
            </span>
            <span className='text-blue-400 text-xs font-medium'>System</span>
          </div>
        </div>
      </div>
      {/* Activity */}
      <div className='flex items-stretch gap-2.5'>
        <div className='flex flex-col items-center'>
          <div className='p-2.5 bg-stone-50 rounded-full flex items-center justify-center z-10'>
            <File classes='w-5 h-5 text-blue-400' />
          </div>
          {/* <div className='h-full w-0 border border-dashed border-zinc-200  -z-10' /> */}
        </div>

        <div className='pb-7'>
          <div className='text-content-primary text-base font-medium'>
            Sent Quotations : Please send Quotations
          </div>
          <div>
            <span className='text-slate-400 text-xs font-medium'>
              Send 17-08-13 / 7:00 PM by{" "}
            </span>
            <span className='text-blue-400 text-xs font-medium'>You</span>
          </div>
          <div className='w-max rounded-md border border-dashed border-gray-400 flex gap-1 px-2.5 py-2 mt-4'>
            <File classes='w-7 h-7 text-slate-400' />
            <div>
              <div className='text-content-primary text-xs font-normal'>
                RFQ
              </div>
              <div className='text-slate-400 text-[10px] font-normal'>
                1.9mb
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activites;
