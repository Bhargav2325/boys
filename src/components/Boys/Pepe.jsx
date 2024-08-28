import React from "react";

const Pepe = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto pt-[138px] md:pt-[97px]  ">
        <div className="flex flex-row-reverse md:flex-col-reverse md:items-center md:justify-center items-center text-white xxl:px-4 md:mb-20">
          <div className="w-1/2 md:w-full md:text-center">
            <h1 className="uppercase text-[64px] mb-10 md:text-3xl md:my-10">pepe</h1>
            <p className="text-[20px] uppercase md:text-base break-all">
              The most memeable memecoin in existence. Pepe had their day on
              ETH, it's time for Pepe on Pulsechain to take reign.
            </p>
            <p className="text-[20px] uppercase md:text-base mt-5 break-all">
              Pepe is tired of watching everyone play hot potato with the
              endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
              The Inu's have had their day. It's time for the most recognizable
              meme in the world to take his reign as king of the memes.
            </p>
            <p className="text-[20px] uppercase md:text-base mt-5 break-all">
              Pepe is here to make memecoins great again. Forked from ETH to PLS
              on mainnet launch, $PEPE is a coin for the people, forever. Fueled
              by pure memetic power, let $PEPE show you the way.
            </p>
          </div>
          <div className="w-1/2 md:w-full">
          <img src="/images/Pepe_Walking.png"alt="pepe"className="mt-5 md:mx-auto md:size-full size-[70%]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pepe;
