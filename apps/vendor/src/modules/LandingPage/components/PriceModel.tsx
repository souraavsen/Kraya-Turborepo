import { Switch } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

const PriceModel = () => {
  const [priceingType, setPriceingType] = useState<boolean>(false);
  const handlePricingChange = (e: boolean) => {
    setPriceingType(e);
  };

  return (
    <div className='pt-32 pb-12'>
      <div className='mb-10 text-center text-content-secondary text-5xl font-bold tracking-tight'>
        Our pricing
      </div>
      <div className='mb-11 mt-10 text-center text-neutral-400 text-sm font-normal'>
        Pay securely online and manage the booking via desktop or via the mobile
        app.
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='flex items-center gap-3 mb-9 price_switcher'>
          <div className='text-neutral-700 text-base font-medium leading-normal'>
            Monthly
          </div>
          <Switch
            className='bg-transparent border hover:bg-indigo-100 text-indigo-600 checked:bg-white'
            onChange={handlePricingChange}
          />
          <div className='text-neutral-700 text-base font-medium leading-normal'>
            Annualy
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 items-center '>
        {(priceingType ? anualPricingModel : monthlyPricingModel).map(
          (price, i) => (
            <div
              className='px-6 py-12 even:bg-bkg-secondary odd:bg-white rounded-[14px]'
              key={i}
            >
              <div className='w-full h-72 flex-col justify-start items-start inline-flex'>
                <div className='flex-col justify-center items-center gap-9 flex'>
                  <div className='flex-col justify-center items-center gap-6 flex'>
                    <div
                      className={`'w-full text-center ${
                        (i + 1) % 2 === 0 ? "text-white" : "text-indigo-950"
                      } text-2xl font-bold leading-loose font-BeVietnam`}
                    >
                      {price.title}
                    </div>
                    <div
                      className={`w-72 h-12 text-center ${
                        (i + 1) % 2 === 0 ? "text-white" : "text-neutral-400"
                      } text-base font-normal leading-normal font-BeVietnam`}
                    >
                      {price.des}
                    </div>
                  </div>
                  <div className='flex font-BeVietnam'>
                    <div
                      className={`${
                        (i + 1) % 2 === 0 ? "text-white" : "text-indigo-950"
                      } text-[56px] font-bold leading-10 mr-0.5`}
                    >
                      ${price.price}
                    </div>
                    <div className='w-16 mt-auto text-neutral-400 text-base font-medium leading-normal tracking-tight'>
                      /{priceingType ? "annual" : "month"}
                    </div>
                  </div>
                </div>
                <button
                  className={`w-full mt-10 px-16 py-3 ${
                    (i + 1) % 2 === 0 ? "bg-white" : "bg-blue-900"
                  } rounded-lg justify-center items-center inline-flex`}
                >
                  <div
                    className={`w-72 text-center ${
                      (i + 1) % 2 === 0 ? "text-indigo-950" : "text-white"
                    } text-base font-bold leading-normal tracking-tight font-BeVietnam`}
                  >
                    Select Plan
                  </div>
                </button>
              </div>

              <div className='mt-6'>
                {price.features.map((feat, j) => (
                  <div key={j}>
                    <div className='justify-start items-start gap-2.5 inline-flex my-3'>
                      <div className='w-5 h-5 relative'>
                        <div
                          className={`w-5 h-5 left-0 top-0 flex justify-center items-center absolute ${
                            (i + 1) % 2 === 0
                              ? "bg-white"
                              : feat.available
                              ? "bg-blue-950"
                              : "bg-stone-300"
                          } rounded-full`}
                        >
                          <CheckOutlined
                            className={`text-xs font-bold mb-1 ${
                              (i + 1) % 2 === 0 ? "text-black" : "text-white"
                            }`}
                          />
                        </div>
                      </div>
                      {feat.available ? (
                        <div
                          className={`w-full ${
                            (i + 1) % 2 === 0 ? "text-white" : "text-[#0C0047]"
                          } text-sm font-medium leading-tight tracking-tight font-BeVietnam`}
                        >
                          {feat.details}
                        </div>
                      ) : (
                        <del className='w-full text-[#0C0047] text-sm font-medium leading-tight tracking-tight font-BeVietnam'>
                          {feat.details}
                        </del>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PriceModel;

const monthlyPricingModel = [
  {
    title: "Standart",
    des: "The national average cost of buying coin easy.",
    price: "5",
    features: [
      {
        details: "5 collections",
        available: true,
      },
      {
        details: "Worldwide accessbility",
        available: true,
      },
      {
        details: "25 automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: false,
      },
      {
        details: "Share with more 5 users",
        available: false,
      },
    ],
  },
  {
    title: "Extended",
    price: "12",
    des: "The national average cost of buying coin easy.",
    features: [
      {
        details: "Unlimited collections",
        available: true,
      },
      {
        details: "Worldwide accessbiliy",
        available: true,
      },
      {
        details: "Unlimited automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: true,
      },
      {
        details: "Share with more 5 users",
        available: true,
      },
    ],
  },
  {
    title: "Premium+",
    des: "The national average cost of buying coin easy.",
    price: "16",
    features: [
      {
        details: "Unlimited collections",
        available: true,
      },
      {
        details: "Worldwide accessbiliy",
        available: true,
      },
      {
        details: "Unlimited automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: true,
      },
      {
        details: "Share with more 5 users",
        available: true,
      },
    ],
  },
];

const anualPricingModel = [
  {
    title: "Standart",
    des: "The national average cost of buying coin easy.",
    price: "150",
    features: [
      {
        details: "5 collections",
        available: true,
      },
      {
        details: "Worldwide accessbility",
        available: true,
      },
      {
        details: "25 automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: false,
      },
      {
        details: "Share with more 5 users",
        available: false,
      },
    ],
  },
  {
    title: "Extended",
    price: "1200",
    des: "The national average cost of buying coin easy.",
    features: [
      {
        details: "Unlimited collections",
        available: true,
      },
      {
        details: "Worldwide accessbiliy",
        available: true,
      },
      {
        details: "Unlimited automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: true,
      },
      {
        details: "Share with more 5 users",
        available: true,
      },
    ],
  },
  {
    title: "Premium+",
    des: "The national average cost of buying coin easy.",
    price: "1600",
    features: [
      {
        details: "Unlimited collections",
        available: true,
      },
      {
        details: "Worldwide accessbiliy",
        available: true,
      },
      {
        details: "Unlimited automation actions",
        available: true,
      },
      {
        details: "Access all features",
        available: true,
      },
      {
        details: "24 hours support",
        available: true,
      },
      {
        details: "Sync accross devices",
        available: true,
      },
      {
        details: "Share with more 5 users",
        available: true,
      },
    ],
  },
];
