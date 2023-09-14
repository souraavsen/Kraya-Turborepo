import React from "react";
import Vendor from "./Vendor";

const SelectedVendors: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='text-content-primary text-xl font-medium font-Roboto'>
        Selected vendor
      </div>

      <div className='font-Inter mt-7 grid grid-cols-2 xl:flex flex-col gap-6'>
        {new Array(5).fill(0).map((_, i: number) => (
          <Vendor key={i} />
        ))}
      </div>
    </div>
  );
};

export default SelectedVendors;
