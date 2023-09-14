import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrandLogo } from "../../assets/Icons/BrandLogo";
import { SidebarMenuT } from "../../assets/Icons/types";
import { RouteDetailsT } from "../../types";
import { SidebarPropsT } from "./types";

const Sidebar: React.FC<SidebarPropsT> = ({
  sidebarOptions,
  isCollaps,
  setIsSidebarOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = (path: string) => {
    if (location.pathname === path) {
      return `w-full self-stretch py-2.5 3xl:py-3 px-7 cursor-pointer ${
        isCollaps ? "justify-center" : "justify-start"
      } items-center gap-3 inline-flex btn_primary`;
    } else {
      return `w-full self-stretch py-2.5 3xl:py-3 px-7 cursor-pointer ${
        isCollaps ? "justify-center" : "justify-start"
      } items-center gap-3 inline-flex text-[#8B9096]`;
    }
  };

  const handleNavigateOutlet = (path: string) => {
    navigate(`${path}`);
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`sidebar_container ${
        isCollaps ? "w-[5.5rem]" : "w-56"
      } h-screen pt-6 border-r-2 bg-bkg-primary overflow-y-auto overflow-x-hidden pb-12`}
    >
      <div className='w-40 h-10 pl-7 pb-1.5 justify-start items-center gap-2 inline-flex mb-4 3xl:mb-6'>
        <BrandLogo classes='w-7 h-7 text-content-primary' />
        <div
          className={`${
            isCollaps
              ? "opacity-0"
              : "opacity-100 transition-opacity delay-500 duration-500"
          }  text-content-primary text-2xl font-semibold leading-snug font-Poppins`}
        >
          Kraya
        </div>
      </div>

      <div
        className={`w-full flex-col justify-start items-start gap-5 inline-flex font-Inter`}
      >
        <div className='w-full flex items-center '>
          <hr className='section_divider w-5 border border-gray-400 ' />
          {/* <span className='mx-auto w-40 border border-gray-400'></span> */}
          <span className='section_title text-gray-400 ml-2.5 text-xs font-semibold leading-snug'>
            MENU
          </span>
        </div>
        {sidebarOptions
          .filter((option: RouteDetailsT) => option.section === "menus")
          .map((menu: SidebarMenuT, i: number) => (
            <button
              key={i}
              className={getActiveTab(`/admin/${menu.path}`)}
              onClick={() => handleNavigateOutlet(menu.path)}
            >
              {menu.icon}
              <div className='section_title whitespace-nowrap shrink basis-0 text-inherit text-[15px] font-medium leading-snug'>
                {menu.name}
              </div>
            </button>
          ))}
        <div className='w-full flex items-center '>
          <hr className='section_divider w-5 border border-gray-400 ' />
          <span className='section_title text-gray-400 ml-2.5 text-xs font-semibold leading-snug whitespace-nowrap'>
            USER MANAGEMENT
          </span>
        </div>
        <div className='w-full flex-col justify-start items-start gap-1 flex'>
          {sidebarOptions
            .filter(
              (option: RouteDetailsT) => option.section === "user_management"
            )
            .map((menu: SidebarMenuT, i: number) => (
              <div
                key={i}
                className={getActiveTab(`/admin/${menu.path}`)}
                onClick={() => handleNavigateOutlet(menu.path)}
              >
                {menu.icon}
                <div className='section_title whitespace-nowrap shrink basis-0 text-inherit text-[15px] font-medium leading-snug'>
                  {menu.name}
                </div>
              </div>
            ))}
        </div>
        <div className='w-full flex items-center '>
          <hr className='section_divider w-5 border border-gray-400 ' />
          <span className='section_title text-gray-400 ml-2.5 text-xs font-semibold leading-snug whitespace-nowrap'>
            PROCUREMENT MANAGEMENT
          </span>
        </div>
        <div className='w-full flex-col justify-start items-start gap-1 flex'>
          {sidebarOptions
            .filter(
              (option: RouteDetailsT) =>
                option.section === "procurement_management"
            )
            .map((menu: SidebarMenuT, i: number) => (
              <button
                key={i}
                className={getActiveTab(`/admin/${menu.path}`)}
                onClick={() => handleNavigateOutlet(menu.path)}
              >
                {menu.icon}
                <div className='section_title whitespace-nowrap shrink basis-0 text-inherit text-[15px] font-medium leading-snug'>
                  {menu.name}
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
