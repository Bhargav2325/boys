import React from "react";

const Andy = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-[138px] md:pt-[97px]">
        <div className="flex flex-row-reverse md:flex-col-reverse md:items-center md:justify-center items-center mt-5 z-10">
          <div className="w-1/2 md:w-full md:text-center md:mb-10 z-10">
            <h1 className="uppercase text-white text-[64px] md:text-3xl md:mb-10 mb-10">
              andy
            </h1>
            <p className="text-[20px] text-white uppercase md:text-base">
              Matt Furie's Boy's Club series introduces a quirky ensemble of
              characters, including Landwolf, Brett, Andy, Bdog, and Pepe the
              Frog.
            </p>
            <p className="text-[20px] text-white uppercase mt-5 md:text-base">
              This group of teenage monster friends navigates a world filled
              with psychedelic adventures, childlike wonder, and mischievous
              antics.
            </p>
            <p className="text-[20px] text-white mt-5 md:text-base uppercase">
              $PEPE $WOLF $ANDY $BDOG $BRETT
            </p>
            <p className="text-[20px] text-white mt-5 md:text-base uppercase">
              The Original Boys Club on Blockchain.
            </p>
          </div>
          <div className="w-1/2 md:w-full">
            <a href="">
              <img
                src="/images/Andy.png"
                alt="andy"
                className="mt-5 size-[70%] md:mx-auto md:size-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Andy;
