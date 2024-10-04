"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "public/logo.png";
import call from "public/call.png";


const Header = ({showSellMyCarButton = true}) => {
  return (
    <div>
      <header>
        <div
          className="flex justify-end pt-3 p-2 pr-14 h-[49.31px] space-x-4 bg-[#05603F]">
          <button
            className="inter flex items-center w-[93.84px] h-[27.35px] text-[11.5px] leading-[14.37px] text-[#4285F4] bg-white font-semibold py-1 px-3 rounded-[20.89px]" >
            <Image src={call} alt="call icon" className="mr-1 w-[19.37px] h-[19.37px]" />
            Call Us
          </button>
          <button
            className="flex inter text-[#01AD13] w-[93.84px] h-[27.35px] text-[11.5px]  items-center leading-[14.37px] bg-white font-semibold py-1 px-3 rounded-[20.89px]" >
            <span className="mr-1 w-[14.18px] h-[14.18px]">@</span>Email Us
          </button>
        </div>

        <div className="bg-white p-4 flex justify-between items-center h-[84.01px]">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="OEM Used Auto Parts Logo"
              className="w-[111.16px] h-[78.59px]"
              width={111}
              height={78}
            />
          </div>

          <nav className="flex space-x-5 md:space-x-8 ml-auto">
            <Link
              href='/'
              className="inter font-medium text-[16px] leading-[20px] hover:text-[#01AD13]" >
              Home
            </Link>
            <Link
              href="#"
              className="inter font-medium text-[16px] leading-[20px] hover:text-[#01AD13] pr-14">
              Search Inventory
            </Link>
          </nav>
          {showSellMyCarButton && (
          <div className="flex md:pr-10">
            <Link  href="/sell-my-car">
            <button
              className="poppins bg-[#00BE14] text-white text-[12px] md:text-[17.68px] leading-[20px] md:leading-[26.52px] font-semibold py-4 px-16 rounded"
            >
              Sell My Car
            </button>
            </Link>
          </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
