import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {CustomBreadcrumb} from "shared";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import {Button} from "shared";
import Filter from "../components/SearchProduct/Filter";
import Product from "../components/SearchProduct/Product";
import SortProducts from "../components/SearchProduct/SortProducts";

const SearchProduct: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [displayType, setDisplayType] = useState("row");

  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  const handleProductSearch = (e: any) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
    }
  };

  console.log(query);

  return (
    <div className='max_page_width h-screen overflow-y-auto bg-bkg-primary'>
      <AdminNavbar
        title=''
        search={true}
        handleSearch={handleProductSearch}
        ActionButton={
          <Button
            title='Upload'
            icon={null}
            extraClassName='bg-content-primary text-content-accent'
            handlerEvent={() => {}}
          />
        }
      />

      <div className='mx-6'>
        {/* Breadcrumb */}
        <div className='my-6 flex flex-wrap items-center justify-between'>
          <div className='text-content-primary text-sm lg:text-base 2xl:text-lg 3xl:text-xl font-medium font-Roboto'>
            Search
          </div>
          <CustomBreadcrumb
            items={[
              {
                title: "Home",
                href: "/admin/dashboard",
              },
              {
                title: "Shop",
                href: "/admin/shop",
              },
              {
                title: "Search",
                href: "",
              },
            ]}
          />
        </div>

        {/* For Sorting */}
        <SortProducts
          query={query}
          displayType={displayType}
          setDisplayType={setDisplayType}
        />

        <div className='w-full flex gap-3.5 3xl:gap-4'>
          <div className='max-w-[20vw] hidden xl:block'>
            <Filter />
          </div>

          <div className='w-full'>
            <div
              className={`w-full min-h-screen overflow-y-auto ${
                displayType === "grid" ? "grid grid-cols-2" : "flex flex-col"
              } gap-4`}
            >
              {new Array(4).fill(0).map((_, i: number) => (
                <Product key={i} displayType={displayType} />
              ))}
            </div>

            <div>
              {/* Pagination */}
              <div className='w-full h-10 justify-between items-center inline-flex pt-10 pb-28'>
                <div className='px-4 justify-center items-center gap-1.5 flex cursor-pointer'>
                  <ArrowLeftOutlined className='text-sm leading-[0] font-bold text-gray-500' />
                  <div className='text-gray-500 text-sm font-medium leading-tight'>
                    Prev
                  </div>
                </div>
                <div className='px-4 justify-center items-center flex'>
                  <div className='text-gray-500 text-sm font-medium leading-tight'>
                    Page 1 to 8
                  </div>
                </div>
                <div className='px-4 justify-center items-center gap-1.5 flex cursor-pointer'>
                  <div className='text-gray-500 text-sm font-medium leading-tight'>
                    Next
                  </div>
                  <ArrowRightOutlined className='text-sm leading-[0] font-bold text-gray-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default SearchProduct;
