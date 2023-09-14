import Dollar from "../../../assets/Icons/Dollar";
import Receipt from "../../../assets/Icons/Receipt";
import Document from "../../../assets/Icons/document.svg";
import UserCard from "../../../assets/Icons/user_card.svg";

const Overview = () => {
  return (
    <div className='grid grid-cols-2 2xl:grid-cols-4 gap-4 mt-8'>
      <div className='w-auto p-2 3xl:p-5 justify-center items-start gap-3 3xl:gap-5 inline-flex border rounded-lg'>
        <div className='w-8 h-8 3xl:w-[60px] 3xl:h-[60px] p-2 bg-red-100 rounded-[5px] justify-center items-center flex'>
          <Dollar classes='w-5 h-5 text-red-400' />
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start inline-flex'>
          <div className='text-content-primary text-opacity-60 text-base 3xl:text-[22px] font-semibold'>
            ₹ 115600
          </div>
          <div className='text-xs 3xl:text-base text-center text-gray-500 font-medium leading-tight'>
            Spend
          </div>
        </div>
      </div>
      <div className='w-auto p-2 3xl:p-5 justify-center items-start gap-3 3xl:gap-5 inline-flex border rounded-lg'>
        <div className='w-8 h-8 3xl:w-[60px] 3xl:h-[60px] p-2 bg-red-100 rounded-[5px] justify-center items-center flex'>
          <img src={UserCard} alt='' />
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start inline-flex'>
          <div className='text-content-primary text-opacity-60 text-base 3xl:text-[22px] font-semibold'>
            36
          </div>
          <div className='text-xs 3xl:text-base text-center text-gray-500 font-medium leading-tight'>
            Supplier
          </div>
        </div>
      </div>
      <div className='w-auto p-2 3xl:p-5 justify-center items-start gap-3 3xl:gap-5 inline-flex border rounded-lg'>
        <div className='w-8 h-8 3xl:w-[60px] 3xl:h-[60px] p-2 bg-red-100 rounded-[5px] justify-center items-center flex'>
          <Receipt classes='w-6 h-6 text-orange-500' />
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start inline-flex'>
          <div className='text-content-primary text-opacity-60 text-base 3xl:text-[22px] font-semibold'>
            36
          </div>
          <div className='text-xs 3xl:text-base text-center text-gray-500 font-medium leading-tight'>
            Invoices
          </div>
        </div>
      </div>
      <div className='w-auto p-2 3xl:p-5 justify-center items-start gap-3 3xl:gap-5 inline-flex border rounded-lg'>
        <div className='w-8 h-8 3xl:w-[60px] 3xl:h-[60px] p-2 bg-blue-100 rounded-[5px] justify-center items-center flex'>
          <img src={Document} alt='' />
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start inline-flex'>
          <div className='text-content-primary text-opacity-60 text-base 3xl:text-[22px] font-semibold'>
            12
          </div>
          <div className='text-xs 3xl:text-base text-center text-gray-500 font-medium leading-tight'>
            Po processed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
