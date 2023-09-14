import dashboardImage from "../../../assets/Images/Dashboard_Img.png";

const Header = () => {
  return (
    <div>
      <div className='flex flex-col items-center pt-36 pb-20 font-BeVietnam'>
        <div className='tracking-[0.32px] lg:flex items-center leading-20'>
          <span className='text-white text-[64px] font-bold capitalize -tracking-tight'>
            We help to get{" "}
          </span>
          <span className='relative text-[#37E2D5] text-6xl font-bold capitalize  flex ml-5'>
            <div className='relative'>
              <span>business</span>
              <span className='absolute left-0.5 bottom-0.5 min-w-full h-0.5 bg-[#37E2D5] pb-0 mb-0'>
                &nbsp;
              </span>
            </div>
            <div className='ml-2  flex justify-center items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
              >
                <path
                  d='M9 13.5L18 22.5L27 13.5'
                  stroke='#37E2D5'
                  strokeWidth='5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </span>
        </div>
        <div className='text-white text-6xl font-bold capitalize leading-10 mt-6 tracking-[0.32px]'>
          solution ever
        </div>
        <div className='w-96 text-center text-white text-base font-normal leading-loose mt-8'>
          We provide many features that you can use cheaply and easily. Try it
          now and get an interesting promo
        </div>

        <div className='w-96 h-11 justify-start items-start gap-6 inline-flex mt-9'>
          <button className='px-11 py-3 bg-white rounded-lg justify-start items-start gap-2.5 flex'>
            <div className='text-violet-600 text-sm font-normal leading-snug'>
              Try for free
            </div>
          </button>
          <button className='px-11 py-3 rounded-lg border border-white justify-start items-start gap-2.5 flex'>
            <div className='text-white text-sm font-normal leading-snug'>
              Watch a demo
            </div>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center relative'>
        <img className='w-11/12 mx-auto' src={dashboardImage} alt='' />
        <div className='min-h-full min-w-full bg-transparent absolute'></div>
      </div>
    </div>
  );
};

export default Header;
