import { Select } from "antd";
import React from "react";
import RingingBell from "../../assets/Icons/RingingBell";
import { LanguageOptions } from "./constants";
import { LanguageOptionT } from "./types";
import Avatar from "../../assets/Images/avatar.png";

const { Option } = Select;

const UserProfile: React.FC = () => {
  const handleLanguageChange = (value: string) => {
    console.log("Selected language:", value);
  };
  return (
    <div className='flex items-center gap-3'>
      <div>
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
      </div>
      <div>
        <RingingBell classes='text-content-primary h-4 w-4 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7 cursor-pointer' />
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
