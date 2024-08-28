import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BsDash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import Sdata from "../../Sdata";
import Marketcap from "../Hero/Marketcap";

const Plusechain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    
    <>
      <div className="max-w-[1500px] xxl:px-4 pt-[138px] mx-auto md:pt-[97px]">
        <div className="max-w-[1500px] md:w-full  xxl:px-4 text-white">
          <h1 className="text-[40px] break-all md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            perferendis eum tenetur aperiam ad.
          </h1>
          <div className="w-full rounded-[50px] overflow-hidden my-20">
            <div className="relative mx-auto w-full rounded-[50px] bg-gradient-faq-box p-10 uppercase">
              <img
                src="/images/rightbg.png"
                alt="rightbg"
                className="absolute right-0 top-20 object-contain object-right h-full w-full -z-10"
              />
              <img
                src="/images/leftbg.png"
                alt="leftbg"
                className="absolute left-0 top-0 object-left object-cover h-full w-full -z-10"
              />
              {Sdata.map((item, index) => (
                <Disclosure key={index}>
                  <div className="mt-2  rounded-[30px] relative">
                    <DisclosureButton
                      onClick={() => handleToggle(index)}
                      className="flex justify-left w-full text-left py-1 border-none break-all left-4 bg-[#5f6059] cursor-pointer rounded-[30px] uppercase items-left gap-2  px-0  text-[24px] overflow-y-hidden font-semibold text-white focus:outline-none data-[focus]:outline-white"
                    >
                      <div className="flex w-full py-6 mx-5 left-4 justify-between items-center text-center">
                        <span className="text-2xl md:text-xl">
                          {item.title}
                        </span>

                        {isOpen === index ? (
                          <BsDash className="text-white  mx-4" size={30} />
                        ) : (
                          <GoPlus className="text-white mx-4" size={30} />
                        )}
                      </div>
                    </DisclosureButton>
                    {isOpen === index && (
                      <DisclosurePanel
                        transition
                        anchor="inline"
                        className="z-[60] origin-top-right w-full md:py-5 uppercase rounded-[30px] mt-2 py-4  border-none backdrop-blur-md bg-[#5f6059] p-1 px-4 text-base text-[24px] text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <div className="flex md:flex md:flex-col md:justify-center md:items-center text-center gap-3 flex-wrap justify-center">
                          <div className="hover:underline py-3 px-10 cursor-pointer break-all gradient-bg border rounded-[15px]">
                            <a
                              href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16"
                              target="_blank"
                            >
                              DexScreener
                            </a>
                          </div>
                          <div className="hover:underline py-3 px-10 cursor-pointer break-all gradient-bg border rounded-[15px]">
                            <a
                              href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933"
                              target="_blank"
                            >
                              PluseX
                            </a>
                          </div>
                        </div>
                        <h1 className="bg-[#C2C2C2]/10 p-5 mb-5 mt-4 text-center rounded-[30px] ">
                          ca:
                          <h1 className="hover:underline text-center !rounded-[50px] break-all bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">
                            0x6982508145454Ce325dDbE47a25d4ec3d2311933
                          </h1>
                        </h1>
                      </DisclosurePanel>
                    )}
                  </div>
                </Disclosure>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-5 text-white">Top Text</h1>
          <h1 className="text-xl md:text-base text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            perferendis eum tenetur aperiam ad.
          </h1>
          <h1 className="text-xl md:text-base mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            perferendis eum tenetur aperiam ad.lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet perferendis eum tenetur
            aperiam ad.lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eveniet perferendis eum tenetur aperiam ad.lorem Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum
            tenetur aperiam ad lorem.
          </h1>
          <Marketcap />
        </div>
      </div>
    </>
  );
};

export default Plusechain;
