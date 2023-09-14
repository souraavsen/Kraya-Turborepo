import React, { useState } from "react";
import Reviews from "./Reviews";

const ReviewDetails: React.FC<any> = ({ productDetails }) => {
  // const sections: SectionsT[] = [
  //   {
  //     title: "Rating & Reviews",
  //     component: <Reviews productDetails={productDetails?.reviews} />,
  //   },
  //   {
  //     title: "Product Details",
  //     component: <Reviews productDetails={productDetails?.reviews} />,
  //   },
  //   {
  //     title: "Faq",
  //     component: <Reviews productDetails={productDetails?.reviews} />,
  //   },
  // ];

  console.log(productDetails.reviews);
  const [activeSection, setActiveSection] = useState<string>(sections[0]);

  return (
    <div className="pb-16">
      <div className='justify-start items-start gap-10 inline-flex mb-8'>
        {sections.map((section: string, i: number) => (
          <div key={i} onClick={() => setActiveSection(section)}>
            <div
              className={`text-content-primary text-opacity-60 text-sm lg:text-base 2xl:text-lg 3xl:text-xl ${
                activeSection === section ? "font-medium" : "font-normal"
              } leading-snug cursor-pointer`}
            >
              {section}
            </div>
            <div
              className={`${
                activeSection !== section ? "opacity-0" : "opacity-100"
              } transition-opacity duration-250 delay-100 h-[0px] border border-content-primary`}
            ></div>
          </div>
        ))}
      </div>
      {activeSection === "Rating & Reviews" && (
        <Reviews productReviews={productDetails?.reviews} />
      )}
      {activeSection === "Product Details" && (
        <Reviews productReviews={productDetails?.review} />
      )}
      {activeSection === "Faq" && (
        <Reviews productReviews={productDetails?.review} />
      )}
    </div>
  );
};

export default ReviewDetails;

const sections: string[] = ["Rating & Reviews", "Product Details", "Faq"];
