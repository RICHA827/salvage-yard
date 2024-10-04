import React from "react";
import Image from "next/image";
import QuoteIcon from "public/double-quotes.png";
import Quotes from "public/quotes.png";
import Customer from "public/Customer1.png";
import RightNavigation from "public/navigation-right.png";
import LeftNavigation from "public/navigation-left.png";

const Reviews: React.FC = () => {
  return (
    <div className="bg-[rgba(210,235,213,0.19)] py-16 px-4 flex flex-col items-center h-[572.52px] mt-10 mb-4">
      <h2 className="josefinSans text-[#181E4B] text-[40px] font-bold text-center leading-[71.04px] w-[639px] h-[446.04px] mt-4">
        What Our Customers Say
      </h2>

      <div className="relative bg-white p-12 rounded-xl shadow-lg w-[400px] sm:w-[500px] h-[300px] sm:h-[337px] flex flex-col items-center">
        <div className="absolute -top-16 w-[120px] h-[120px] overflow-hidden">
          <Image
            src={Customer}
            alt="Christine Beckam"
            className="object-cover"
          />
        </div>

        <div className="ml-[50px] w-full flex justify-start">
          <Image
            src={QuoteIcon}
            alt="Quote Icon"
            className="w-[60.92px] h-[46.73px]"
          />
        </div>

        <p className="poppins font-normal text-[12.22px] leading-[24.45px] text-center mb-4 w-[393px] sm:tracking-[0.05em]">
          &ldquo;I was able to find the exact part I needed quickly and at a
          great price. The team was incredibly helpful and knowledgeable!&rdquo;
        </p>

        <div className="flex items-center justify-center mt-4 h-[25px] w-[197px]">
          <div className="relative">
            <h4 className="poppins font-bold text-[12.22px] leading-[24.45px] tracking-[0.05em] ">
              Christine Beckam &ndash; Designer
            </h4>
            <div className="absolute -top-[1px] right-[40px]">
              {/* &rdquo; */}
              <Image
                src={Quotes}
                alt="Quotes"
                className="w-[8.92px] h-[6.84px] "
              />
            </div>
          </div>
        </div>

        <div className="mt-2 w-[31.25px] h-[1.95px] bg-[#DF6951] rounded-[39px]" />

        {/* Left Navigation */}
        <div className="absolute -left-16 top-[50%] transform -translate-y-1/2 cursor-pointer">
          <Image
            src={LeftNavigation}
            alt="Previous"
            className="w-62 h-62 "
          />
        </div>

        {/* Right Navigation */}
        <div className="absolute -right-16 top-[50%] transform -translate-y-1/2 cursor-pointer">
          <Image
            src={RightNavigation}
            alt="Next"
            className="w-62 h-62 "
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
