import React from "react";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import FeaturedCategories from "../components/ShopLanding/FeaturedCategories";
import FeaturedVendors from "../components/ShopLanding/FeaturedVendors";
import ProductSlider from "../components/ShopLanding/ProductSlider";
import Button from "../../../components/lib/Button";
import { useNavigate } from "react-router-dom";

const Shop: React.FC = () => {
  const navigate = useNavigate();

  const handleProductSearch = (e: any) => {
    if (e.key === "Enter") {
      navigate(`search/?q=${e.target.value}`);
    }
  };

  return (
    <div className='bg-bkg-primary h-screen overflow-y-auto'>
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
      {/* <div className='flex justify-between items-center pr-8 border-b'>
        <div className='text-content-primary text-xl font-medium px-6 3xl:px-14 py-2 3xl:py-4 flex items-center xl:gap-4'>
          <SearchBox
            id='user_search'
            name='user_search'
            placeholder='Search'
            onChange={() => {}}
          />
          <button className='px-2.5 xl:px-3 3xl:px-4 py-1 xl:py-1.5 3xl:py-2 bg-zinc-800 rounded-lg border border-zinc-800 text-center'>
            <div className='text-white text-xs xl:text-base font-medium font-Poppins'>
              Upload
            </div>
          </button>
        </div>
        <UserProfile />
      </div> */}

      <div className='max_page_width'>
        <ProductSlider />
        <FeaturedCategories />
        <FeaturedVendors />
      </div>

      <Copyright />
    </div>
  );
};

export default Shop;
