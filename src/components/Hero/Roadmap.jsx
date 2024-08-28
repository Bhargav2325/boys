import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className="bg-black w-full">
        <div className="relative">
          <img
            src="./images/rightbg.png"
            alt="rightbg"
            className="absolute right-0 object-contain h-full w-full -z-10"
          />
          <img
            src="./images/leftbg.png"
            alt="rightbg"
            className="absolute left-0 bottom-0 inset-0 h-full -z-10"
          />
          <div className="max-w-7xl mx-auto xl:px-4 text-white">
            <div className="text-center text-[80px] items-start uppercase md:text-2xl xl:mt-20 text-white">
              Roadmap
            </div>
            <div className="flex md:flex-col md:items-center md:justify-center mt-20 items-center">
              <div className="w-1/2 md:w-full">
                <h1 className="uppercase text-[64px] md:text-xl md:mb-10 mb-10"> Phase one</h1>
                <ul className="list-disc list-inside text-[20px] md:text-base uppercase space-y-4">
                  <li>nft launch</li>
                  <li>link all tokens with thick liquidity</li>
                </ul>
              </div>
              <div className="w-1/2 md:w-full h-full">
              <img src="./images/Line 9.png" alt="Line 9" className="mt-5 md:mx-auto"/>
              </div>
            </div>
            <div className="flex justify-center md:flex-col md:mt-0 items-center mt-20">
                <div className="md:w-full"> 
                    <img src="./images/ezgif-5.gif"alt="ezgif-5" className="mt-5 md:mx-auto md:size-1/2"/>
                </div>
                <div className="md:w-full">
                    <img src="./images/Line10.png" alt="line10" className="-mt-20 md:mx-auto md:mt-0"/>
                </div>
                <div className="md:w-full">
                    <h1 className="uppercase text-[64px] md:text-base md:mt-4 ms-3 text-nowrap -mt-14 py-9" >phase two</h1>
                    <ul className="list-disc list-inside text-[20px] md:text-base uppercase space-y-4">
                        <li>web3 game (currently in development)</li>
                        <li>MEME HARDER</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
