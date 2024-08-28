import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { TfiPieChart } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { GoMail } from "react-icons/go";

const Getintouch = () => {
  return (
    <>
      <div className="bg-black w-full xl:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="my-20 justify-start">
            <div className="text-[70px] uppercase md:text-2xl text-gray-400/25 text-start">
              <div className="flex flex-wrap items-center lg:justify-center md:text-wrap text-nowrap">
                Extra Ordinary <br />
                <span className="flex">
                  <img
                    src="./images/nft-6.gif"
                    alt="nft-6"
                    className="h-[150px] md:h-[50px]"
                  />
                </span>
                nft
              </div>

              <div className="text-end ml-auto lg:text-center">
                art
                <span className="text-[#8D9F2C]/25"> coming soon...</span>
              </div>
            </div>
            <div className="flex md:flex-col">
              <div>
                <img
                  src="./images/landworld 1.png"
                  alt="landworld_1"
                  className="-mt-44 -me-20 md:mx-auto md:w-1/2 md:h-1/2 lg:mt-0"
                />
              </div>
              <div className="text-[20px] uppercase md:text-base text-white">
                <div className="mt-20 md:mt-10">
                  <h1>NFT Collections</h1>
                </div>
                <ul className="list-disc list-inside mt-5">
                  <li>Art by Slimewhale (Concept Artist for Squanch Games)</li>
                  <li className="mt-5">
                    developed jointly with omni labz and slimelabz
                  </li>
                </ul>
                <a
                  href="https://t.me/boysclubpulse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="uppercase text-black  rounded-[20px] bg-[#cff600] py-3 px-8 mt-10 w-fit cursor-pointer">
                    join telegram for updates
                  </div>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-center uppercase text-[80px] md:text-2xl text-white">
            Get in touch with us
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5 mb-20 mt-10">
            <div className="rounded-full size-16 md:size-14 border border-primary text-primary flex justify-center items-center cursor-pointer">
              <CiShoppingCart size={30} />
            </div>
            <div className="rounded-full size-16 md:size-14  border border-primary text-primary flex justify-center items-center cursor-pointer">
              <TfiPieChart size={30} />
            </div>
            <a
              href="https://x.com/boysclubpls"
              target="_blank"
              className="rounded-full size-16 md:size-14  border border-primary text-primary flex justify-center items-center cursor-pointer"
            ><RiTwitterXFill size={30}/></a>
            <a
              href="https://t.me/boysclubpulse"
              target="_blank"
              className="rounded-full size-16 md:size-14  border border-primary text-primary flex justify-center items-center cursor-pointer"
            >
                <PiTelegramLogo size={30}/>
            </a>
            <div className="rounded-full size-16 md:size-14  border border-primary text-primary flex justify-center items-center cursor-pointer">
            <GoMail size={30}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getintouch;
