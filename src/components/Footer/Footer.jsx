import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { VscTwitter } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-full">
        <div className="w-full py-10 bg-black">
          <div className="-rotate-1 w-full bg-primary md:px-4 md:py-3 xxl:px-4">
            <div className="max-w-[1500px] mx-auto text-black flex justify-between items-center">
              <div>
                <a href="/">
                  <img
                    src="/images/BoysClub_01-1 1.png"
                    alt="BoysClub_01"
                    className="cursor-pointer md:size-[90%]"
                  />
                </a>
              </div>
              <div className="flex items-center md:gap-3 md:text-base gap-10 text-[24px] uppercase">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <VscTwitter />
                  <h1>twitter</h1>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <BiLogoTelegram />
                  <h1>telegram</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
