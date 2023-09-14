import { MailOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBreadcrumb from "../../../components/lib/Breadcrumb";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import Button from "../../../components/lib/Button";
import CheckBox from "../../../components/lib/Checkbox";
import Product from "../components/SearchProduct/Product";

const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVendors, setSelectedVendors] = useState<any>([]);
  const [selectAllVendors, setSelectAllVendors] = useState<boolean>(false);

  useEffect(() => {
    if (selectedVendors.length !== vendors.length) {
      setSelectAllVendors(false);
    } else {
      setSelectAllVendors(true);
    }
  }, [selectedVendors]);

  const handlerRedirectSendRFQPage = () => {
    navigate("../shop/send-rfq");
  };

  const handlerSelectVendors = (e: any) => {
    if (e.target.id === "all_vendors") {
      if (e?.target.checked) {
        setSelectedVendors(vendors);
      } else setSelectedVendors([]);
      setSelectAllVendors(!selectAllVendors);
    } else {
      const vendorId = e.target?.id.split("_")[1];

      if (e?.target.checked) {
        const vendor = vendors.find(
          (vendor) => (vendor?.id as number) === parseInt(vendorId)
        );
        setSelectedVendors([...selectedVendors, vendor]);
      } else {
        const updatedSelectedList = [...selectedVendors]?.filter(
          (v) => v.id != parseInt(vendorId)
        );

        setSelectedVendors(updatedSelectedList);
      }
    }
  };

  const ifChecked = (vendorId: number) => {
    if (selectedVendors.find((vendor: any) => vendor?.id === vendorId))
      return true;
    else return false;
  };

  return (
    <div className='max_page_width h-screen overflow-y-auto bg-bkg-primary'>
      <AdminNavbar title='' search={false} ActionButton={<></>} />

      <div className='mx-6'>
        <div className='my-6 flex flex-wrap items-center justify-between'>
          <div className='text-content-primary text-sm lg:text-base 2xl:text-lg 3xl:text-xl font-medium font-Roboto'>
            Favorite vendor
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
                title: "Favorites",
                href: "",
              },
            ]}
          />
        </div>

        <div className='w-full flex justify-between items-center'>
          <CheckBox
            id={"all_vendors"}
            className={""}
            handlerEvent={handlerSelectVendors}
            title={"All"}
            isChecked={selectAllVendors}
          />
          <div className='relative'>
            <Button
              title='Send RFQ'
              icon={<MailOutlined className=' leading-[0px] p-0 text-white' />}
              extraClassName={`${
                selectedVendors?.length ? "bg-btn-blue" : "bg-[#939393]"
              } text-content-accent`}
              handlerEvent={handlerRedirectSendRFQPage}
            />
            {!selectedVendors?.length ? (
              <div className='absolute cursor-not-allowed top-0 min-w-full min-h-full bg-opacity-20'>
                &nbsp;
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <hr className='min-w-full bg-[#EAE9EE] mt-7 mb-8' />
        </div>

        <div>
          {vendors?.map((vendor: any, i: number) => (
            <div key={i} className='flex xl:gap-3 my-4'>
              <CheckBox
                id={`prod_${vendor?.id}`}
                className={""}
                handlerEvent={handlerSelectVendors}
                title={""}
                isChecked={ifChecked(vendor?.id as number)}
              />
              <Product displayType='row' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

const vendors = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];
