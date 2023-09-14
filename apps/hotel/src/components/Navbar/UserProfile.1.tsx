import React from "react";
import { Link, useLocation } from "react-router-dom";
import Shop from "../../assets/Icons/Shop";
import Avatar from "../../assets/Images/avatar.png";

// const { Option } = Select;
export const UserProfile: React.FC = () => {
  const location = useLocation();

  // const handleLanguageChange = (value: string) => {
  //   console.log("Selected language:", value);
  // };
  return (
    <div className='flex items-center gap-3'>
      {location.pathname.includes("dashboard") && (
        <Link
          to={"../shop"}
          className='px-2 2xl:px-4 3xl:px-5 py-1.5 2xl:py-2 3xl:py-2.5 bg-blue-500 rounded-[5px] shadow justify-center items-center gap-1.5 inline-flex'
        >
          <div>
            <Shop classes='w-4 2xl:w-5 h-4 2xl:h-5 text-white' />
          </div>
          <div className='text-white font-Inter textxs lg:text-sm font-semibold leading-tight'>
            Shop
          </div>
        </Link>
      )}

      {/* <div>
              <Select
                className='w-28'
                defaultValue={LanguageOptions[0].label}
                style={{
                  // width: 135,
                  color: "#323232",
                  // backgroundColor: "#FAFAFA",
                }}
                bordered={false}
                onChange={handleLanguageChange}
                dropdownStyle={{
                  background: "var(--primary-bg-color)",
                }}
              >
                {LanguageOptions?.map((language: LanguageOptionT) => (
                  <Option key={language.key} value={language.label}>
                    <div className='bg-bkg-primary flex items-center'>
                      <img
                        className='w-5 h-5 3xl:w-6 3xl:h-6 rounded-[100%] mr-1.5'
                        src={language.flag}
                        alt='flag'
                      />
                      <h1 className='text-content-primary font-semibold font-Roboto text-xs xl:text-sm -mr-10'>
                        {language.label}
                      </h1>
                    </div>
                  </Option>
                ))}
              </Select>
            </div> */}

      <div>
        {/* <RingingBell classes='text-content-primary h-4 w-4 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7 cursor-pointer' /> */}
      </div>

      <div className='rounded-full overflow-hidden'>
        <img
          className='w-5 h-5 xl:w-7 xl:h-7 3xl:w-8 3xl:h-8'
          src={Avatar}
          alt='avatar'
        />
      </div>
    </div>
  );
};
