import LightDashboard from "../../../assets/Images/Light_Dashboard.png";
import { avatar } from "../constants";

const CollaborationInfo = () => {
  return (
    <div className='bg-indigo-900/10 py-30 relative overflow-hidden'>
      <div className='w-[64rem] h-[59rem] bg-bkg-secondary rounded-[84rem] absolute -right-[49%] -top-[62%] rotate-[50] ' />

      <div className='w-[86%] mx-auto grid grid-cols-2 justify-center items-center z-50 relative'>
        <div className='mr-20'>
          <div className='text-content-secondary text-5xl font-bold leading-10 tracking-tight font-BeVietnam'>
            Easy collaborative financial team
          </div>

          <div className='text-neutral-400 text-sm font-normal leading-normal mt-8'>
            No need to worry about your files being lost because we are very
            loyal to be your storage platform.
          </div>

          <div className='mt-8 flex gap-2'>
            <div className='flex'>
              {avatar.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`w-6 h-6 rounded-full ${i !== 0 && "-ml-2"}`}
                  alt='User Avatar'
                />
              ))}
            </div>
            <div className='text-neutral-700 text-sm font-semibold leading-snug'>
              More than 10.000 people have tried
            </div>
          </div>

          <button className='w-40 h-11 mt-8 px-11 py-3 bg-violet-600 rounded-lg justify-start items-start gap-2.5 inline-flex'>
            <div className='text-white text-sm font-semibold leading-snug'>
              Try for free
            </div>
          </button>
        </div>
        <div>
          <img className='z-50' src={LightDashboard} alt='' />
        </div>
      </div>
    </div>
  );
};

export default CollaborationInfo;
