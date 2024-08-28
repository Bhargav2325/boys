import React from "react";
import Marketcap from "./Marketcap";
import Clubbg from "./Clubbg";
import Boys from "./Boys";
import Roadmap from "./Roadmap";
import Getintouch from "./Getintouch";

const Hero = () => {
  return (
    <>
      <div className="md:pt-[89px] pt-[138px]">
        <div className="min-h-screen hero bg-center md:pt-20  bg-cover relative">
          <img
            src="/images/Hero.png"
            alt="Hero"
            className="absolute w-full h-full mg:px-full lg:top-0 md:w-full md:auto lg:object-cover bg-[#202034]"
          />
          <img
            src="/images/heroboy.png"
            alt="BoysClub_01-1 1"
            className="mx-auto size-1/2 relative"
          />
          <div className="flex md:flex-col -mt-10 xl:mt-0 mx-auto justify-center relative items-center gap-5 uppercase">
            <div className="text-black py-3 px-10 bg-[#78c135] md:px-5 md:py-2 cursor-pointer rounded-[20px]">
              Buy
            </div>
          </div>
        </div>

        <Marketcap />
        <Clubbg />
        <Boys />
        <Roadmap />
        <Getintouch />
      </div>
    </>
  );
};

export default Hero;
