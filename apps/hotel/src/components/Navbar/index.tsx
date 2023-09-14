import { Dropdown, MenuProps, Select } from "antd";
import { useState } from "react";
import { BrandLogo } from "../../assets/Icons/BrandLogo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { LanguageOptions } from "./constants/index.ts";
import { LanguageOptionT } from "./types.js";

const { Option } = Select;

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  const handleLanguageChange = (value: string) => {
    console.log("Selected language:", value);
  };

  return (
    <div className='h-12 m-auto pt-16 flex items-center justify-between text-[#FFF]'>
      <div className='flex items-center gap-2.5'>
        <BrandLogo classes='text-white dark:text-customWhite-dark w-10 h-10' />
        <span className='font-semibold text-[32px] font-Poppins'>Kraya</span>
      </div>
      <div className='justify-start items-start gap-10 inline-flex font-BeVietnam'>
        <div className='text-white text-base font-normal leading-tight'>
          Product
        </div>
        <div className='text-white text-base font-normal leading-tight'>
          Solution
        </div>
        <div className='text-white text-base font-normal leading-tight'>
          Customer
        </div>
        <div className='text-white text-base font-normal leading-tight'>
          Pricing
        </div>
        <div className='text-white text-base font-normal leading-tight'>
          About us
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div>
          <Select
            className='select_navbar_language bg-transparent'
            defaultValue={LanguageOptions[0].label}
            style={{
              width: 135,
              color: "white",
              backgroundColor: "transparent",
            }}
            bordered={false}
            onChange={handleLanguageChange}
            dropdownStyle={{
              background: "transparent",
            }}
          >
            {LanguageOptions?.map((language: LanguageOptionT) => (
              <Option key={language.key} value={language.label}>
                <div className='flex items-center'>
                  <img
                    className='w-6 h-6 rounded-[100%] mr-1.5'
                    src={language.flag}
                    alt='flag'
                  />
                  <h1 className='text-white font-medium font-Roboto text-sm'>
                    {language.label}
                  </h1>
                </div>
              </Option>
            ))}
          </Select>
        </div>

        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        <div>
          <Dropdown menu={{ items }} trigger={["click"]} arrow>
            <div className='px-11 py-3 rounded-lg border border-white justify-start items-start gap-2.5 inline-flex cursor-pointer'>
              <div className='text-white text-sm font-normal leading-snug'>
                Login
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const items: MenuProps["items"] = [
  {
    label: (
      <a className='w-20' href='/login/vendor'>
        As Vendor
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a className='w-20' href='/login/hotel'>
        As Hotel
      </a>
    ),
    key: "1",
  },
];
