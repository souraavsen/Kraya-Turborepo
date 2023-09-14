import React from "react";
import { featuredVendorLists } from "../../../constants";
import Product from "./Product";

const FeaturedVendors: React.FC = () => {
  return (
    <div className='mx-5'>
      <div className='my-12'>
        <div className='font-Hind text-center text-custom-rose text-sm lg:text-base xl:text-lg 3xl:text-[22px] font-semibold uppercase'>
          TOP COLLECTIONS 2022
        </div>
        <div className='font-Manrope text-center text-content-primary text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold 3xl:leading-[50px] mt-4'>
          Featured Vendors
        </div>
        <div className='font-Manrope max-w-[50rem] mx-auto text-center text-content-primary lg:text-lg 3xl:text-[22px] font-normal mt-4'>
          Elit rhoncus dui ullamcorper tristique aenean nascetur accumsan ac
          himenaeos adipiscing quam potenti ac senectus consequat.
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-x-2.5 gap-y-4'>
        {featuredVendorLists.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVendors;
