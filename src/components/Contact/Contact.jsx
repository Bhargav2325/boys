import React from "react";
// import Getintouch from "../Hero/Getintouch";
import { CiShoppingCart } from "react-icons/ci";
import { TfiPieChart } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1500px] mx-auto pt-[138px] my-5 md:pt-[97px]">
          <div className="flex flex-col justify-center min-h-screen">
            <h1 className="text-center uppercase text-[80px] text-white md:text-2xl">
              Get in touch with us
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-5 mb-20 mt-10">
              <div className="rounded-full size-16 md:size-14 border border-primary text-primary flex justify-center items-center cursor-pointer">
                <CiShoppingCart size={30} />
              </div>
              <div className="rounded-full size-16 md:size-14 border border-primary text-primary flex justify-center items-center cursor-pointer">
                <TfiPieChart size={30} />
              </div>
              <a
                href="https://x.com/boysclubpls"
                target="_blank"
                className="rounded-full size-16  md:size-14 border border-primary text-primary flex justify-center items-center cursor-pointer"
              >
                <RiTwitterXFill size={30} />
              </a>
              <a
                href="https://t.me/boysclubpulse"
                target="_blank"
                className="rounded-full size-16 border md:size-14 border-primary text-primary flex justify-center items-center cursor-pointer"
              >
                <PiTelegramLogo size={30} />
              </a>
              <div className="rounded-full size-16 md:size-14 border border-primary text-primary flex justify-center items-center cursor-pointer">
                <GoMail size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
