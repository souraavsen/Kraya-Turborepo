import React from "react";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import Copyright from "../../../components/Footer/Copyright";
import { Link } from "react-router-dom";

const RFQSuccess: React.FC = () => {
  return (
    <div className='max_page_width h-screen overflow-y-auto bg-bkg-primary'>
      <AdminNavbar title='' search={false} ActionButton={<></>} />

      <div className='min-h-screen flex flex-col justify-between'>
        <div className='mx-6 xl:flex gap-6 3xl:gap-9 my-9'>
          <div className='mb-6 xl:mb-0 w-full xl:w-1/2'>
            <img
              className="w-full"
              src='https://s3-alpha-sig.figma.com/img/279f/ebdc/d8709bd2ebc1bb92a24ef32260818295?Expires=1695600000&Signature=nf~9cCAbFzaaULWwVYELb4KMM3ZxciUQjQlH~NaQkY0yWq5WQMBOmYKwZs4TqliaGUbIPLWqHnVYuAKsXV-7p97Cy30MHuYKcCrripRDmze8uKDnTth3Q7zcY15h44pxOZdJofKlGvqkSNqkAOj55hdE7Xir9VgbvDpx5jrdIDwZxMNeMn4j-HQSbX08Ftjb3W9pY9GPcW28UNHF0EzfpwD5i7GU2FdaKlNAmaVTSuNHwjSekk8ZRKVhv5h0DWBzLBAljs9tY7t1wVn-7HL8rc4tPEC6DQaUxQcZ9Lfbv-Jnw5l-W-9QtGu-7p-AUpUF-8a82sqi753KUTb3eh0LHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt='Success'
            />
          </div>
          <div className='xl:w-1/2'>
            <div className='text-content-primary text-xl 2xl:text-2xl 3xl:text-4xl font-medium mb-7'>
              Thank you for your new request!
            </div>
            <div className='text-content-primary text-lg 2xl:text-xl 3xl:text-2xl font-medium mb-6'>
              RFQ ID: 1R0004FRC
            </div>
            <div className='text-stone-500 text-base 2xl:text-lg 3xl:text-xl font-normal mb-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <Link to={"../shop"} className='text-orange-500 text-lg 3xl:text-2xl font-normal underline leading-tight'>
              Continue Browsing
            </Link>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default RFQSuccess;
