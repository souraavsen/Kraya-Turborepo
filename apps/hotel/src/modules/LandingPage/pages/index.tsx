import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import CollaborationInfo from "../components/CollaborationInfo";
import Companies from "../components/Companies";
import HappyClients from "../components/HappyClients";
import Header from "../components/Header";
import OurSolutions from "../components/OurSolutions";
import PriceModel from "../components/PriceModel";

const LandingPage = () => {
  return (
    <div>
      <div className='relative  overflow-hidden'>
        <div className='bg-bkg-secondary min-w-[2551px] h-[1180px] rounded-br-[3151px] absolute top-0 -left-[50%] -z-10' />
        <div className='w-[768px] h-[768px] bg-white bg-opacity-20 rounded-full blur-[250px] absolute -left-[35%] top-5' />
        <div className='w-[768px] h-[768px] bg-white bg-opacity-20 rounded-full blur-[250px] absolute -right-[30%] -top-[20%]' />

        <div className='bg-bkg-primary min-w-full min-h-full absolute top-0 -z-20' />

        <div>
          <div className='w-[86%] mx-auto'>
            <Navbar />
            <Header />
            <Companies />
            <OurSolutions />
          </div>
          <CollaborationInfo />
          <div className='w-[86%] mx-auto'>
            <PriceModel />
            <HappyClients />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
