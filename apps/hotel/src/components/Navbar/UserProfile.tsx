import React from "react";
import { Link, useLocation } from "react-router-dom";
import RingingBell from "../../assets/Icons/RingingBell";
import Shop from "../../assets/Icons/Shop";
import Avatar from "../../assets/Images/avatar.png";
import HeartOutlined from "../../assets/Icons/HeartOutlined";
import Button from "../lib/Button";


const UserProfile: React.FC = () => {
  const location = useLocation();

  return (
    <div className='flex items-center gap-3'>
      {location.pathname.includes("dashboard") && (
        <Link to={"../shop"}>
          <Button
            title='Shop'
            icon={<Shop classes='w-4 2xl:w-5 h-4 2xl:h-5 text-white' />}
            extraClassName='bg-btn-blue text-content-accent'
            handlerEvent={() => {}}
          />
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

      <Link to={"../shop/wishlist"}>
        <HeartOutlined classes='text-content-primary h-4 w-4 xl:h-7 xl:w-7 3xl:h-8 3xl:w-8' />
      </Link>

      <div className='relative'>
        <RingingBell classes='text-content-primary h-4 w-4 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7 cursor-pointer' />
        <div className='w-1.5 2xl:w-2.5 h-1.5 2xl:h-2.5 p-0 m-0 bg-content-primary rounded-full absolute -top-0.5 right-[2px] 2xl:right-0.5'></div>
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

export default UserProfile;
