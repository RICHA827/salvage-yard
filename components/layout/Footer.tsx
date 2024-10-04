import React from "react";
import Image from "next/image";
import logos from "public/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#010A12] p-2 h-auto md:h-[102.68px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 space-y-4 md:space-y-0">
        <div className="flex items-center  justify-center md:justify-start space-x-2 md:space-x-0 md:flex-row">
          <Image
            src={logos}
            alt="OEM Used Auto Parts Logo"
            priority
            className="w-[136.7px] h-[96.64px] md:mr-0 mr-12"
          />
          <span className="inter text-[12px] md:text-[14px] text-[#D1D5DB] font-normal leading-[20px] pl-0 md:pl-28 md:pr-56 text-center md:text-left"
          >
            © 2021 All rights reserved
          </span>
        </div>

        <div className="flex flex-row text-center space-x-4 md:space-x-12 justify-center">
          <a
            href="/terms"
            className="inter text-[#E5E7EB] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] pr-12"
          >
            Terms of service
          </a>
          <a
           href="/privacy"
            className="inter text-[#E5E7EB] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] pr-12"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <span
            className="inter text-[#E5E7EB] text-[14px] md:text-[16px] font-normal leading-[24px] text-center pr-4"
          >
            Follow us:
          </span>
          <div className="flex space-x-2 pr-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/Instagram.png"
              alt="Instagram Logo"
              width={28}
              height={28}
              className="w-[28.32px] h-[28.32px] "
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/Facebook.png"
              alt="Facebook logo"
              height={28}
              width={28}
              className="w-[28.32px] h-[28.32px]"
            />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
