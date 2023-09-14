import { ourSolutions } from "../constants";

const OurSolutions = () => {
  return (
    <div className='pt-32 pb-[6.5rem] bg-bkg-primary'>
      <div>
        <div className='text-center text-content-secondary text-4xl font-bold capitalize tracking-tight'>
          Our Solution for your business
        </div>
        <div className='text-neutral-400 text-sm font-normal text-center mt-6 pt-0.5'>
          We make it easy for users to use our platform, that's why we provide
          this benefit.
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 items-center justify-center mt-[3.75rem]'>
        {ourSolutions.map((solution, i) => (
          <div
            key={i}
            className='w-auto h-80 relative border border-[#EAEAEA] rounded-2xl'
          >
            <div className='p-7'>
              <div className='w-16 h-16 flex justify-center items-center bg-violet-50 rounded-2xl'>
                <img src={solution.icon} alt='' />
              </div>
              <div className='text-content-primary text-xl font-semibold leading-loose mt-6 mb-4'>
                {solution.title}
              </div>
              <div className='w-52 text-neutral-400 text-sm font-normal leading-normal mb-7'>
                {solution.description}
              </div>
              <div className='text-violet-600 text-base font-semibold underline cursor-pointer'>
                Learn more
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutions;

