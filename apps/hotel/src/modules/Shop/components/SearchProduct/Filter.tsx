import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React from "react";
import CheckBox from "../../../../components/lib/Checkbox";

const { Panel } = Collapse;

const Filter: React.FC = () => {
  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    console.log(`${e.target.id} = ${e.target.checked}`);
  };

  return (
    <div className='min-h-full px-4 xl:px-5 3xl:px-6 py-3 xl:py-4 3xl:py-5 border'>
      <div className='flex flex-wrap 2xl:flex-nowrap items-center justify-between gap-3.5 2xl:gap-4'>
        <div className='flex items-center'>
          <div className='text-content-primary text-lg font-semibold font-Inter'>
            Filters
          </div>
          <div className='w-5 h-5 flex justify-center items-center text-white text-xs font-normal leading-none bg-content-primary  ml-1.5 rounded-full'>
            <span>2</span>
          </div>
        </div>
        <div className='px-2.5 py-2 rounded-lg border border-content-primary justify-center items-center gap-2.5 inline-flex cursor-pointer whitespace-nowrap'>
          <div className='text-content-primary text-sm font-medium font-Poppins'>
            Clear Filters
          </div>
        </div>
      </div>

      <hr className='min-w-full mt-4 xl:mt-5 3xl:mt-6 mb-2 xl:mb-3 3xl:mb-4  border-b'></hr>

      <Collapse
        ghost
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 0} />
        )}
        expandIconPosition='end'
      >
        <Panel
          header={
            <div className='text-content-primary text-xs 2xl:text-base font-semibold'>
              Trade Assurance
            </div>
          }
          key='1'
        >
          <div className='flex flex-col gap-2'>
            {FilterOpstions.trade.map((content: string, i: number) => (
              <CheckBox
                key={i}
                id={content.toLowerCase().replace(" ", "_")}
                handlerEvent={onCheckboxChange}
                title={content}
              />
            ))}
          </div>
        </Panel>

        <hr className='min-w-full mt-4 xl:mt-5 3xl:mt-6 mb-2 xl:mb-3 3xl:mb-4  border-b'></hr>

        <Panel
          header={
            <div className='text-content-primary text-xs 2xl:text-base font-semibold'>
              Capabilities
            </div>
          }
          key='2'
        >
          <div className='flex flex-col gap-2'>
            {FilterOpstions.capabilities.map((content: string, i: number) => (
              <CheckBox
                key={i}
                id={content.toLowerCase().replace(" ", "_")}
                handlerEvent={onCheckboxChange}
                title={content}
              />
            ))}
          </div>
        </Panel>

        <hr className='min-w-full mt-4 xl:mt-5 3xl:mt-6 mb-2 xl:mb-3 3xl:mb-4  border-b'></hr>

        <Panel
          header={
            <div className='text-content-primary text-xs 2xl:text-base font-semibold'>
              Supplier region
            </div>
          }
          key='3'
        >
          <div className='flex flex-col gap-2'>
            {FilterOpstions.countries.map((content: string, i: number) => (
              <CheckBox
                key={i}
                id={content.toLowerCase().replace(" ", "_")}
                handlerEvent={onCheckboxChange}
                title={content}
              />
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;

const FilterOpstions = {
  trade: ["Supplier attributes", "Supplier attributes"],
  capabilities: [
    "Minor customization",
    "Full customization",
    "Agile supply chain",
    "Socially responsible",
    "Quality management certified",
  ],

  countries: ["India", "China", "Pakistan", "Bangladesh", "Italy"],
};
