import Image from "next/image";
import React from "react";
import about from "public/about.png";

const AboutUs = () => {
  return (
    <section className="mt-10 flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-24">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
        <div className="relative w-[524.36px] h-[410.59px]">
          <Image
            src={about}
            alt="About us"
            layout="fill"
            objectFit="contain"
            className="w-[524.36px] h-[410.59px]"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-[40px] font-semibold leading-[40px] mb-6 josefinSans">
          About us
        </h2>
        <p className="text-[#050505] text-[16px] mb-6 font-normal leading-[24px] poppins w-[594.76px]">
          At OEM USED AUTO PARTS we are dedicated to offering top-tier salvage
          parts for vehicles of all makes and models. Whether you&apos;re
          searching for hard-to-find components, need a cost-effective solution
          for repairs, or want to responsibly recycle your vehicle, we provide
          the reliable service you need. Our well-organized yard is stocked with
          meticulously inspected parts, ready to help you get your vehicle back
          on the road.
        </p>
        <div className="flex justify-center md:justify-start gap-[50px]">
          <div>
            <span className="text-[32px] leading-[32px] font-bold text-[#4285F4] openSans">
              650+
            </span>
            <p className="text-[#333333] leading-[26px] text-[16px] font-normal openSans">
              Products
            </p>
          </div>
          <div>
            <span className="text-[32px] leading-[32px] font-bold text-[#4285F4] openSans">
              1000+
            </span>
            <p className="text-[#333333] leading-[26px] text-[16px] font-normal openSans">
              Active Customers
            </p>
          </div>
          <div>
            <span className="text-[32px] leading-[32px] font-bold text-[#4285F4] openSans">
              150+
            </span>
            <p className="text-[#333333] leading-[26px] text-[16px] font-normal openSans">
              Car every month
            </p>
          </div>
          <div>
            <span className="text-[32px] leading-[32px] font-bold text-[#4285F4] openSans">
              20+
            </span>
            <p className="text-[#333333] leading-[26px] text-[16px] font-normal openSans">
              Years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
