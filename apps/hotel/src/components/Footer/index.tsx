import { Link } from "react-router-dom";
import InstagramLogo from "../../assets/Images/Instagram.png";
import FacebookLogo from "../../assets/Images/facebookpng.png";
import YoutubeLogo from "../../assets/Images/youtube.png";
import { FooterLinkT, LinkT } from "./types";
import { FooterLinks } from "./constants";
import { BrandLogo } from "../../assets/Icons/BrandLogo";

const Footer: React.FC = () => {
  return (
    <div>
      <div className='px-32 pt-20 pb-21 bg-bkg-primary  flex justify-between'>
        <div>
          <div className='w-32 h-10 justify-start items-center inline-flex mb-8'>
            <span>
              <BrandLogo classes={" text-content-primary w-10 h-10"} />
            </span>
            <span className='text-content-primary text-3xl font-semibold font-Poppins'>
              Kraya
            </span>
          </div>
          <div className='w-60 text-content-primary text-lg font-normal leading-8 font-BeVietnam'>
            Manage file easily. Everywhere, everytime.
          </div>
        </div>

        <div className='flex gap-[75px]'>
          {FooterLinks?.map((section: FooterLinkT, i: number) => (
            <div key={i} className='w-24 '>
              <div className='text-content-primary text-lg font-bold leading-tight'>
                {section.title}
              </div>
              <div className='mt-8 flex flex-col gap-3'>
                {section.links?.map((link: LinkT, i: number) => (
                  <Link
                    to={link.name}
                    key={i}
                    className='cursor-pointer opacity-80 text-content-primary text-base font-normal leading-5 whitespace-nowrap'
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-end'>
          <div>
            <img className='w-32 cursor-pointer' src={FacebookLogo} alt='' />
          </div>
          <div>
            <img className='w-28 cursor-pointer' src={InstagramLogo} alt='' />
          </div>
          <div>
            <img className='w-25 cursor-pointer' src={YoutubeLogo} alt='' />
          </div>
        </div>
      </div>
      <div className='w-full pb-6 bg-bkg-primary  text-center text-opacity-20 dark:text-opacity-100 text-content-primary text-base font-normal leading-7'>
        ©2023 Kraya. All right reserved Devloped & Design by INVINCIX
      </div>
    </div>
  );
};

export default Footer;
