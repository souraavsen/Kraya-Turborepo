import company1 from "../../../assets/Images/company1.png";
import company2 from "../../../assets/Images/company2.png";
import company3 from "../../../assets/Images/company3.png";
import company4 from "../../../assets/Images/company4.png";
import company5 from "../../../assets/Images/company5.png";

const Companies = () => {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-5 items-center bg-bkg-primary'>
      <img className='mx-auto' src={company1} alt='company' />
      <img className='mx-auto' src={company2} alt='company' />
      <img className='mx-auto' src={company3} alt='company' />
      <img className='mx-auto' src={company4} alt='company' />
      <img className='mx-auto' src={company5} alt='company' />
    </div>
  );
};

export default Companies;
