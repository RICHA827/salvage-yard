import React from "react";
import Image from "next/image";
import MainImage from "public/servicess.png";
import Icon from "public/services-icon.png";

const CoreServices: React.FC = () => {
  return (
    <section className="py-6 mt-14 bg-white relative">
      <div className="container mx-auto text-center">
        <h2 className="josefinSans text-[40px] leading-[40px] font-bold mb-4">
          Our Core Services
        </h2>
        <p className="poppins font-normal text-[#636363] text-[17.67px] leading-[26.51px] w-[569.36px] mx-auto">
          Choosing salvage parts is not only a budget-friendly option but also a
          sustainable choice.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start text-left gap-4 p-4 bg-white md:ml-52 mr-8">
              <Image
                src={Icon}
                alt="Sell Your Vehicle for Cash"
                className="w-[71.67px] h-[71.67px] flex-shrink-0"
              />
              <div>
                <h3 className="josefinSans font-bold text-[20px] mb-2 leading-[20px]">
                  Sell Your Vehicle for Cash
                </h3>
                <p className=" poppins font-normal text-[12px] leading-[18px] w-[335.49px]">
                  Our yard features a vast selection of salvaged auto parts,
                  including engines, transmissions, body panels, and more. Every
                  part undergoes thorough inspection and is cataloged for easy
                  access, ensuring you receive parts that are both reliable and
                  affordable.
                </p>
              </div>
            </div>

            <div className="flex items-start text-left gap-4 p-4 bg-white md:ml-36 mr-8">
              <Image
                src={Icon}
                alt="Eco-Conscious Vehicle Recycling"
                className="w-[71.67px] h-[71.67px] flex-shrink-0"
              />
              <div>
                <h3 className="josefinSans font-bold text-[20px] mb-2 leading-[20px]">
                  Eco-Conscious Vehicle Recycling
                </h3>
                <p className="poppins font-normal text-[12px] leading-[18px] w-[304px]">
                  We are committed to environmentally responsible recycling. Our
                  process ensures that every vehicle is dismantled with care,
                  maximizing the recovery of reusable materials while minimizing
                  environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[448.66px] h-[436.68px]">
              <Image src={MainImage} alt="Service Image" />
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center md:-ml-32">
            <div className="flex items-start text-left gap-4 p-4  bg-white md:ml-[-30px]">
              <Image
                src={Icon}
                alt="Extensive Inventory of Auto Parts"
                className="w-[71.67px] h-[71.67px] flex-shrink-0"
              />
              <div>
                <h3 className="josefinSans font-bold text-[20px] leading-[20px] mb-2">
                  Extensive Inventory of Auto Parts
                </h3>
                <p className="poppins font-normal leading-[18px] text-[12px] w-[331.55px]">
                  Have a car that&apos;s no longer running or taking up space?
                  We offer competitive cash payouts for junk vehicles, providing
                  a convenient and fast way to dispose of your old car and put
                  money in your pocket.
                </p>
              </div>
            </div>

            <div className="flex items-start text-left gap-4 p-4 bg-white md:ml-8">
              <Image
                src={Icon}
                alt="Vehicle Towing Services"
                className="w-[71.67px] h-[71.67px] flex-shrink-0"
              />
              <div>
                <h3 className="josefinSans font-bold text-[20px] leading-[20px] ">
                  Vehicle Towing Services
                </h3>
                <p className="poppins font-normal text-[12px] leading-[18px] w-[281.34px]">
                  Need help getting your vehicle to our yard? We offer
                  professional towing services to make the process seamless.
                  Whether your car is inoperable or you simply need a convenient
                  transport option, we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
