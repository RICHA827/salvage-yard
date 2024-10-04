import React from "react";
import PhoneIcon from "public/phoneicon.png";
import AddressIcon from "public/addressicon.png";
import Image from "next/image";
import AboutUs from "components/About";
import CoreServices from "@/components/CoreServices";
import Reviews from "@/components/Customer";

const HomePage = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('/mainimage.png')",
          height: "798.03px",
          width: "100%",
        }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center align-bottom text-white">
          <h1 className=" poppins font-semibold text-[50px] leading-[75px] md:text-6xl mb-6 mt-[400px]">
            Welcome to <br />
            </h1>
            <span className="josefinSans text-[#00BE14] font-bold text-[60px] leading-[60px] mb-2">
              OEM USED AUTO PARTS
            </span>
         
          <p className="poppins font-normal text-[24px] leading-[36px] items-center mb-2 tracking-[0.04em]">
          Quality Used Auto Parts at a Quality Price
          </p>
          <p className="poppins font-normal text-[18.35px] leading-[24.09px] items-center text-[#CAD4FB] mb-4 tracking-[0.04em]">
          Hours Of Operation : Monday-Friday : 07:00 AM- <br /> 3:30PM PST, Saturday and Sunday : Closed. 
          </p>
          <p className="flex items-center ">
            <span className="flex poppins font-semibold text-[11px] md:text-[16.06px] leading-[15px] md:leading-[24.09px] items-center w-auto h-auto md:w-[299.44px] md:h-[30.57px] md:whitespace-nowrap md:tracking-[0.04em] md:mr-6 mr-3">
            <Image src={PhoneIcon} alt="Phone Icon" className="w-[12px] md:w-[17.21px] h-[12px] md:h-[18.35px] m-1"/>
            +1 260-493-1553/800-295-5833
            </span>
            <span className="poppins flex items-center font-semibold text-[11px] md:text-[16.06px] leading-[14px] md:leading-[17.21px] md:w-[413.26px] w-auto h-auto md:h-[30.57px] md:whitespace-nowrap md:tracking-[0.04em]">
              <Image src={AddressIcon} alt="Address Icon" className="w-[18px] md:w-[23px] h-[18px] md:h-[23px] m-1"/>
             4200 S.Maplecrest Rd, Fort Wayne, IN 46806
            </span>
          </p>
        </div>
      </section>
      <AboutUs />
      <CoreServices />
      {/*The Benefits of Salvage Parts*/}

      <section
      className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center"
         style={{
          backgroundImage:"url('benefits.png')",
          height: "761px",
          width:"100%"
        }}/>

<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

<div className="relative z-10 flex flex-col items-start justify-center h-full px-4 pt-12 md:px-20">
  <h1 className="josefinSans leading-[58px] text-[32px] md:text-[58px] font-bold text-white w-full md:w-[700.66px] mb-4">
    The Benefits of Salvage Parts
  </h1>
  <p className="poppins font-light text-[14px] leading-[22px] w-full md:text-[17.67px] md:leading-[26.51px] text-white mb-8 md:w-[515.8px]">
  Choosing salvage parts is not only a budget-friendly option but also a sustainable choice. Salvage parts offer comparable quality to new parts at a fraction of the cost, helping you save money while reducing waste and supporting environmental conservation.
  </p>
  <button className="ml-5 poppins text-[16px] md:text-[21.93px] px-4 py-2 md:px-6 md:py-3 bg-white text-[#01AD13] font-semibold rounded-[5.51px] leading-[32.9px]">
    Sell Your Old Parts
  </button>
</div>
</section>
<Reviews />
</div>
  );
};

export default HomePage;
