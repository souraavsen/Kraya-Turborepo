import play from "../../../assets/Icons/play.svg";
import loginBanner from "../../../assets/Images/login_banner.png";

const LeftBanner = () => {
  return (
    <div className='xl:w-60p bg-bkg-secondary py-16 xl:py-0 xl:h-screen flex justify-center items-center'>
      <div className='w-8/12 m-auto'>
        <div className='flex justify-between items-end'>
          <div>
            <div className='flex items-center'>
              <div>
                <img className='-ml-4' src={play} alt='play' />
              </div>
              <div className='text-white font-BeVietnam lg:text-[65px] 3xl:text-[85px]  font-semibold leading-normal'>
                Digital
              </div>
            </div>
            <div className='text-white font-BeVietnam lg:text-[65px] 3xl:text-[85px] leading-normal font-semibold'>
              platform
            </div>
          </div>
          <div>
            <img
              className='xl:max-w-[375px] xl:max-h-[365px] ml-3 2xl:ml-0'
              src={loginBanner}
              alt='Login Banner'
            />
          </div>
        </div>
        <div>
          <div className='text-white font-BeVietnam lg:text-[65px] 3xl:text-[85px] leading-normal font-semibold'>
            For Hospitality
          </div>
          <div className='font-BeVietnam text-lg font-normal leading-normal text-white'>
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
            simply dummy text of the printing
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
