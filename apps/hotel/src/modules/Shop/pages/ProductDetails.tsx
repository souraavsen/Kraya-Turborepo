import React, { useEffect, useState } from "react";
import SwiperCore from "swiper/core";
import { Navigation, Pagination } from "swiper/modules";
// import CustomBreadcrumb from "../../../components/lib/Breadcrumb";
import {CustomBreadcrumb} from "shared";
import Copyright from "../../../components/Footer/Copyright";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import Details from "../components/ProductDetails/Details";
import ReviewDetails from "../components/ProductDetails/ReviewDetails";
import { handleFetchProductDetails } from "../services";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  SwiperCore.use([Navigation, Pagination]);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<any>({});
  const [productPreviewImage, setProductPreviewImage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const res = await handleFetchProductDetails(id);
      if (res?.status === 200) {
        setProductDetails(res.data);
      }
    })();
  }, []);

  return (
    <div className='h-screen overflow-y-auto bg-bkg-primary'>
      <AdminNavbar title='' search={false} ActionButton={null} />

      <div className='mx-6'>
        {/* Breadcrumb */}
        <div className='my-6 flex flex-wrap items-center justify-between'>
          <div className='text-content-primary text-sm lg:text-base 2xl:text-lg 3xl:text-xl font-medium'>
            {productDetails?.title}
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
                title: productDetails?.title,
                href: "",
              },
            ]}
          />
        </div>

        <div className='w-full'>
          <Details
            productDetails={productDetails}
            productPreviewImage={productPreviewImage}
            setProductPreviewImage={setProductPreviewImage}
          />

          <ReviewDetails productDetails={productDetails} />
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
