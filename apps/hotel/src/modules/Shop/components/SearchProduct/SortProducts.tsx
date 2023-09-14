import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import React, { useState } from "react";
import BurgerStyeMenu from "../../../../assets/Icons/BurgerStyeMenu";
import Menu from "../../../../assets/Icons/Menu";
import { SortProductsPropsT } from "../../types";

const SortProducts: React.FC<SortProductsPropsT> = ({
  displayType,
  setDisplayType,
  query,
}) => {
  const [activeSort, setActiveSort] = useState("Popularity");

  const handleShortingMenuClick = (e: any) => {
    setActiveSort(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: <span className='font-Inter text-sm'>Popularity</span>,
      key: "Popularity",
    },
    {
      label: <span className='font-Inter text-sm'>What's New</span>,
      key: "What’s New",
    },
    {
      label: <span className='font-Inter text-sm'>Better Discount</span>,
      key: "Better Discount",
    },

    {
      label: <span className='font-Inter text-sm'>Price High to Low</span>,
      key: "Price High to Low",
    },
    {
      label: <span className='font-Inter text-sm'>Price Low To High</span>,
      key: "Price Low To High",
    },

    {
      label: <span className='font-Inter text-sm'>Customer Rating</span>,
      key: "Customer Rating",
    },
  ];

  const menuProps = {
    items,
    onClick: handleShortingMenuClick,
  };

  return (
    <div className='flex items-center justify-between mb-5'>
      <div className='hidden xl:block text-content-primary text-sm 3xl:text-base font-normal font-Poppins'>
        <span>Search : </span>
        {query?.split(",")?.map((search: string, i: number) => (
          <span key={i}>
            {i === 0 ? null : "/"} {search}{" "}
          </span>
        ))}
      </div>

      <div className='block xl:hidden w-max border cursor-pointer py-1 px-3 3xl:py-2 3xl:px-4'>
        <span className='text-content-primary text-sm 3xl:text-base font-thin leading-[18px] mr-1 font-Roboto'>
          Filter
        </span>
      </div>

      {/* Filter */}
      <div className='flex items-center'>
        <Dropdown
          className='max-w-sm xl:w-64'
          menu={menuProps}
          trigger={["click"]}
        >
          <div className='border cursor-pointer py-1 px-3 3xl:py-2 3xl:px-4 flex items-center justify-between'>
            <div>
              <span className='text-content-primary text-sm 3xl:text-base font-thin leading-[18px] mr-1 font-Roboto'>
                Short by :
              </span>
              <span className='text-content-primary text-sm 3xl:text-base font-medium leading-[18px] font-Inter truncate'>
                {activeSort}
              </span>
            </div>
            <DownOutlined className='text-sm leading-[0] opacity-60' />
          </div>
        </Dropdown>

        <div className='hidden xl:block' onClick={() => setDisplayType("grid")}>
          <Menu
            classes={`w-6 h-6 ${
              displayType === "grid"
                ? "text-content-primary"
                : "text-transparent"
            } ml-5 cursor-pointer transition-all duration-300 delay-200`}
          />
        </div>

        <div className='hidden xl:block' onClick={() => setDisplayType("row")}>
          <BurgerStyeMenu
            classes={`w-6 h-6 ${
              displayType === "row"
                ? "text-content-primary"
                : "text-transparent"
            } ml-3 cursor-pointer transition-all duration-300 delay-200`}
          />
        </div>
      </div>
    </div>
  );
};

export default SortProducts;
