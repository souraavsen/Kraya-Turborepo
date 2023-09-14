import DotMenu from "../../../assets/Icons/DotMenu";
import UpArrow from "../../../assets/Icons/up_arrow.svg";
import Barchart from "../../../components/Charts/Barchart";

const FirstSummary = () => {
  return (
    <div className='flex flex-col gap-6 xl:grid grid-cols-3 mt-8 xl:gap-2 3xl:gap-4'>
      <div className='min-w-full py-4 border rounded-lg'>
        <div className='flex items-center justify-between px-5 mb-4'>
          <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
            RFQ vs Quotation
          </div>
          <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
        </div>
        <div className='pr-5 mt-4'>
          <Barchart
            width={"100%"}
            height={280}
            data={data}
            colors={["#437EF7", "#5CB1FF"]}
          />
        </div>
      </div>

      <div className='min-w-full  border rounded-lg'>
        <div className='flex items-center justify-between px-5 py-4'>
          <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
            Top 5 Salling Products
          </div>
          <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
        </div>
        <div className='mx-5'>
          {new Array(5).fill(0).map((_, i) => (
            <div key={i}>
              <div className='flex justify-between items-center py-1.5'>
                <div className='items-start gap-2 3xl:gap-4 inline-flex'>
                  <img
                    className='w-7 h-7 3xl:w-8 3xl:h-8 rounded-[5px]'
                    src='https://via.placeholder.com/32x32'
                  />
                  <div className='flex-col justify-start items-start inline-flex'>
                    <div className='text-content-primary text-xs 3xl:text-[15px] font-medium leading-snug'>
                      Product 1
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs 3xl:text-sm  font-normal leading-tight mr-0.5'>
                        QTY
                      </span>
                      <span className='text-gray-500 text-xs 3xl:text-sm font-bold leading-tight'>
                        1200
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={UpArrow} alt='Up Arrow' />
                </div>
              </div>
              {i !== 4 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>

      <div className='min-w-full py-4 border rounded-lg'>
        <div className='flex items-center justify-between px-5 mb-4'>
          <div className='text-content-primary text-[10.69px] font-medium leading-[14.80px]'>
            Quotation Vs Approval
          </div>
          <DotMenu classes='text-content-primary w-[25px] h-[24px] cursor-pointer' />
        </div>
        <div className='pr-5 mt-4'>
          <Barchart
            width={"100%"}
            height={280}
            data={data1}
            colors={["#EF7420", "#7DBE55"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSummary;

const data = [
  {
    name: "Sun",
    RFQ: 310,
    Quotation: 240,
  },
  {
    name: "Mon",
    RFQ: 300,
    Quotation: 198,
  },
  {
    name: "Tue",
    RFQ: 200,
    Quotation: 180,
  },
  {
    name: "Wed",
    RFQ: 280,
    Quotation: 308,
  },
  {
    name: "Thu",
    RFQ: 180,
    Quotation: 320,
  },
  {
    name: "Fri",
    RFQ: 230,
    Quotation: 300,
  },
];

const data1 = [
  {
    name: "Sun",
    Quotation: 240,
    Approval: 319,
  },
  {
    name: "Mon",
    Quotation: 198,
    Approval: 309,
  },
  {
    name: "Tue",
    Quotation: 180,
    Approval: 209,
  },
  {
    name: "Wed",
    Quotation: 308,
    Approval: 289,
  },
  {
    name: "Thu",
    Quotation: 320,
    Approval: 189,
  },
  {
    name: "Fri",
    Quotation: 300,
    Approval: 239,
  },
];
