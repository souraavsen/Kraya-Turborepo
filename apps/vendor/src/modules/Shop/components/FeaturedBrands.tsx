import React from "react";
import company1 from "../../../assets/Images/company1.png";
import company2 from "../../../assets/Images/company2.png";
import company3 from "../../../assets/Images/company3.png";

const FeaturedBrands: React.FC = () => {
  return (
    <div className='px-14 py-20 3xl:py-24'>
      <div className='text-content-primary text-4xl font-bold leading-normal mb-12'>
        Featured Brands
      </div>
      <div className='grid grid-cols-9 gap-8 items-center'>
        {Companies.map((company, i) => (
          <div key={i}>
            <img src={company} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;

const Companies = [
  company1,
  company2,
  company3,
  company2,
  company1,
  company1,
  company2,
  company3,
  company2,
  company1,
  company2,
  company3,
  company2,
  company1,
  company1,
  company2,
  company3,
  company2,
];
