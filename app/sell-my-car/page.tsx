"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import UserLogo from "public/user_circle.png";
import User from "public/user.png";
import Phone from "public/phone.png";
import Msg from "public/mail.png";
import Carlogo from "public/car1.png";
import DropDown from "public/arrow_drop_down.png";
import Success from "public/Success.png";

const SellMyCar = () => {
  const [submitted, setSubmitted] = useState(false);
  const successMessageRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  useEffect(() => {
    if (submitted && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: "smooth" });

      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div>
      <div className="w-full">
        <div className="bg-[#516186] p-4 text-white mb-12">
          <h1 className=" py-1 poppins font-semibold leading-[60px] text-[40px]">
            Junk My Car
          </h1>
          <p className="poppins font-normal text-[12px] w-[646.42px] leading-[15px] mt-1">
            At OEM USED AUTO PARTS we are dedicated to offering top-tier salvage
            parts for vehicles of all makes and models. Whether you&apos;re
            searching for hard-to-find components, need a cost-effective
            solution for repairs, or want to responsibly recycle your vehicle.
          </p>
        </div>

        <form className="mt-8 flex justify-center" onSubmit={handleSubmit}>
          <div className="w-full max-w-[900px]">
            {submitted && (
              <div className="flex justify-end">
                <div
                  ref={successMessageRef}
                  className="mx-1 flex justify-center rounded-[5px] w-[303.74px] h-[66.14px] bg-[#01AD13]"
                >
                  <Image
                    src={Success}
                    alt="form Submit"
                    className="w-[48.42px] h-[48.42px] bg-[#01AD13] mr-2 mt-2"
                  />
                  <p className="py-5 text-white text-[16px] inter font-semibold text-center mr-7">
                    Submitted Successfully!
                  </p>
                </div>
              </div>
            )}

            <section className="mb-10">
              <h2 className="josefinSans text-[32px] leading-[32px] font-medium  mb-6 flex items-center">
                <Image
                  src={UserLogo}
                  alt="User logo"
                  className="w-[36.67px] h-[36.67px] mr-2"
                />
                Tell us About Yourself
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FirstName - field */}
                <div className="relative w-full md:w-[415.61px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] h-[50px] rounded-md p-4 w-full"
                  />
                  <Image
                    src={User}
                    alt="User Icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px] h-[19px]"
                  />
                </div>
                {/* Last Name - field */}
                <div className="relative w-full md:w-[415.61px]">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-full h-[50px] rounded-md p-4"
                  />
                  <Image
                    src={User}
                    alt="User Icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px] h-[19px] "
                  />
                </div>
                {/* Phone Number - field */}
                <div className="relative w-full md:w-[415.61px]">
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-full h-[50px] rounded-md p-4"
                  />
                  <Image
                    src={Phone}
                    alt="Phone Icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[19.01px] h-[19.01px] "
                  />
                </div>
                {/* Email Field */}
                <div className="relative w-full md:w-[415.61px]">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-full h-[50px] rounded-md p-4"
                  />
                  <Image
                    src={Msg}
                    alt="Message"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[20px] h-[16px] "
                  />
                </div>
              </div>
              {/* Address-field */}
              <div className="relative w-full md:w-[875px] mt-4">
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-full h-[50px] rounded-md p-4"
                />
              </div>

              {/* City, State and Pin fields */}
              <div className="grid grid-col-1 md:grid-cols-3 gap-2 mt-4">
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-[269.94px] h-[50px] rounded-md p-4"
                />
                <input
                  type="text"
                  placeholder="State"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-[269.94px] h-[50px] rounded-md p-4"
                />
                <input
                  type="text"
                  placeholder="PIN"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-[269.94px] h-[50px] rounded-md p-4"
                />
              </div>
            </section>
            {/* tell us about your car */}
            <section className="mb-5 mt-2">
              <h2 className="josefinSans text-[32px] leading-[32px] font-medium mb-6 flex items-center">
                <Image
                  src={Carlogo}
                  alt="Car logo"
                  className="w-[31.8px] h-[31.8px] mr-2 "
                />
                Tell us About Your Car
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-[250px] md:w-[415.61px]">
                  <input
                    type="number"
                    placeholder="Year"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] h-[50px] rounded-md p-4 w-full"
                  />
                  <Image
                    src={DropDown}
                    alt="Drop Down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[24px] h-[24px]"
                  />
                </div>

                <div className="relative w-[250px] md:w-[415.61px]">
                  <input
                    type="text"
                    placeholder="Make"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] h-[50px] rounded-md p-4 w-full"
                  />
                  <Image
                    src={DropDown}
                    alt="Drop Down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[24px] h-[24px]"
                  />
                </div>
                <div className="relative w-[250px] md:w-[415.61px]">
                  <input
                    type="text"
                    placeholder="Model"
                    required
                    className="input-style border border-[#DEDEDE] bg-[#F1F2F2] h-[50px] rounded-md p-4 w-full"
                  />
                  <Image
                    src={DropDown}
                    alt="Drop Down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[24px] h-[24px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Mileage"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-[250px] md:w-[415.61px] h-[50px] rounded-md p-2"
                />
              </div>
              <div className="relative w-full md:w-[875px] mt-4">
                <input
                  type="text"
                  placeholder="VIN Number (Vehicle Identification Number)"
                  required
                  className="input-style border border-[#DEDEDE] bg-[#F1F2F2] w-full h-[50px] rounded-md p-4"
                />
              </div>
            </section>
            {/* Traction Section */}
            <section className="mb-6 ">
              <div className="flex items-center space-x-4">
                <label className="inter font-medium text-[15.41px] leading-[19.26px]">
                  {" "}
                  Traction:
                </label>
                <label className="inline-flex items-center ml-3">
                  <input
                    type="radio"
                    name="traction"
                    className="form-radio h-[24px] w-[24px]"
                  />

                  <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                    Four-Wheel Drive (4WD)(4x4)
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="traction"
                    className="form-radio h-[24px] w-[24px]"
                  />
                  <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                    Two-Wheel Drive (2WD) (4x2)
                  </span>
                </label>
                <div className="pl-20">
                  <select className="inter font-medium text-[14.41px] leading-[19.26px]  border border-[#A7A7A7] rounded-md p-2 bg-[url('/car.png')] bg-no-repeat bg-[6px] bg-[length:16.1px_15.43px] pl-5 pr-4">
                    <option>Engine size (liters)</option>
                    <option>Below 1.0 liter</option>
                    <option>1.0-2.0 liter</option>
                    <option>2.0-3.0 liter</option>
                    <option>Above 3.0 liter</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <div className="flex md:items-center items-start space-x-6 mb-6">
              {["Cats missing", "Aluminum Wheels"].map((label, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-[24px] w-[24px]"
                  />
                  <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                    {label}
                  </span>
                </label>
              ))}
            </div>

            {/* Questions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block inter font-medium text-[16px] leading-[21.3px] w-[506.76px]">
                  Is the vehicle complete(Engine
                  transmission,wheels,battery,etc)?
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="complete"
                      className="form-radio h-[24px] w-[24px]"
                    />
                    <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px] ">
                      Yes
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="complete"
                      className="form-radio h-[24px] w-[24px]"
                    />
                    <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                      No
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block inter font-medium text-[16px] leading-[21.3px] md:ml-36">
                  Do you have real title to the vehicle?
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="title"
                      className="form-radio h-[24px] w-[24px] md:ml-36"
                    />
                    <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                      Yes
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="title"
                      className="form-radio h-[24px] w-[24px]"
                    />
                    <span className="ml-2 inter font-medium text-[15.41px] leading-[19.26px]">
                      No
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block inter font-medium text-[16px] leading-[21.3px]">
                  Do we need to tow the vehicle?
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tow"
                      className="form-radio inter font-medium text-[15.41px] leading-[19.26px] h-[24px] w-[24px]"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tow"
                      className="form-radio inter font-medium text-[15.41px] leading-[19.26px] h-[24px] w-[24px]"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <textarea
                placeholder="What's wrong with the vehicle?"
                className="w-full md:w-[875px] bg-[#F1F2F2] border border-[#DEDEDE] rounded-md p-2"
                rows={4}
              ></textarea>
            </div>

            {/* Referral Section */}
            <div>
              <label className="block inter font-medium text-[15.41px] leading-[19.26px] w-full md:w-[875px]">
                How did you hear about us?
              </label>
              <select className=" border border-[#DEDEDE] bg-[#F1F2F2] rounded-md p-2 mt-2 mb-4 w-full md:w-[875px]">
                <option>Social Media</option>
                <option>Google Ads</option>
                <option>Friend</option>
                <option>Mechanic</option>
              </select>
            </div>
            <div className="mt-3 mb-10 flex justify-end pr-9">
              <button
                type="submit"
                className=" w-[240.19px] h-[46px] bg-[#01AD13] font-josefin text-[20px] font-normal leading-[20px] text-white rounded-[4px] shadow-md transition ease-in-out text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellMyCar;
