import React from "react";

const Plusechains = () => {
  return (
    <>
      <div className="w-full">
        <main className="max-w-[1500px] mx-auto pt-[138px] md:pt-[97px] bg-black text-white">
          <div className="flex xl:flex-col xl:justify-center xl:items-center justify-start items-start max-w-[1500px] mx-auto relative gap-10 my-20 xxl:px-4">
            <img
              src="/images/roadmapbg.png"
              alt="roadmapbg"
              className="absolute right-0 inset-0"
            />
            <div className="w-1/2 relative z-10 xl:w-full">
              <h1 className="text-[70px] md:text-3xl xl:text-center uppercase">
                How to bridge the
              </h1>
              <div className="flex justify-start items-center gap-2 xl:justify-center xxxs:flex-col text-white uppercase">
                <span className="text-[70px] uppercase md:text-3xl">
                  pulschain
                </span>
                <span className="relative z-10">
                  <img
                    src="/images/Pulsechain.png"
                    alt="phone 1"
                    className="size-24 md:size-12"
                  />
                </span>
              </div>
              <h2 className="mt-2 uppercase leading-10 relative md:leading-5 xl:text-center z-10">
                Lorem Ipsum is simply dummy text of the
                <br />
                printing and typesetting industry. Lorem
                <br />
                Ipsum has been the industry's .
              </h2>
              <img
                src="/images/phone 1.png"
                alt="phone 1"
                className="w-full h-full z-10 relative xl:mx-auto xl:size-1/2 md:!size-full"
              />
            </div>
            <div className="w-1/2 relative z-10 xl:w-full">
              <div className="flex items-center xl:flex-col">
                <div className="w-full border-l-2 xl:w-full xl:border-none  border-primary/25 border-dashed relative">
                <div>
                  <img
                    src="/images/phase1.png"
                    alt="phase1"
                    className="-ml-2.5 absolute xl:hidden z-10 -left-14"
                  />
                </div>
                <div>
                  <img
                    src="/images/phase1.png"
                    alt="dot"
                    className="xl:flex hidden mx-auto my-10"
                 />
                </div>
                  <div className="my-1 px-h border-2 border-primary/25 border-dashed absolute top-10 xl:hidden w-10 left-11"></div>

                  <div className="mx-10 md:mx-0 xl:ms-0 rounded-[30px] bg-gradient-box border-none ms-20 relative">
                    <p className="text-lg leading-10 p-5 text-wrap break-words md:text-base lg:mt-10">
                      <ul className="list-disc list-inside">
                        <li>
                          Go to 'Settings' in your wallet and find the networks
                          section.
                        </li>
                        <li>
                          Network Name: BaseRPC Endpoint:
                          https://mainnet.base.org/Chain ID: 8453Currency
                          Symbol: ETHBlock Explorer: https://basescan.org
                        </li>
                        <li>CONNECT TO BASE</li>
                        <li>
                          Once saved, you should be able to connect to Base by
                          selecting it from the network selection menu.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:flex-col xl:mt-20 xl:border-none -mt-8 relative border-l-2 border-primary/25 border-dashed">
                <div>
                  <img
                    src="/images/phase2.png"
                    alt="phase2"
                    className="-ml-2.5 absolute xl:hidden top-32 z-10 -left-14"
                  />
                </div>
                <div>
                  <img
                    src="/images/phase2.png"
                    alt="dot"
                    className="xl:flex hidden mx-auto my-10"
                  />
                </div>
                <div className="w-full xl:w-full">
                  <div className="mx-10 md:mx-0 xl:ms-0 xl:mt-0 relative bg-gradient-box rounded-[30px] ms-20 mt-36">
                    <div className="my-1 h-px border-2 border-primary/25 border-dashed absolute top-10 w-10 -left-11 xl:hidden"></div>
                    <ul className="list-disc list-inside text-lg leading-8 p-5 text-wrap md:text-base break-words">
                      <li>
                        Now you'll need to deposit some ETH onto Base! Here you
                        have a couple options:
                      </li>
                      <li>
                        1. Withdraw ETH to your Base wallet from Coinbase,
                        Binance, Byit or OKX Make sure to select Base as the
                        withdrawal network!
                      </li>
                      <li>
                        2. Bridge ETH to Base from another chain using these
                        bridges:- Official Base Bridge
                        https://bridge.base.org/deposit,- Orbiter
                        https://www.orbiter.finance/,- Stargate
                        https://stargate.finance/,
                      </li>
                      <li>
                        To use these bridges simply connect your wallet, select
                        the network you want to bridge from, choose Base as the
                        network to bridge to, and input the amount of ETH you
                        would like to bridge!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:flex-col xl:mt-20 xl:border-none -mt-8 relative border-l-2 border-primary/25 border-dashed">
              <div>
                  <img
                    src="/images/phase3.png"
                    alt="phase3"
                    className="-ml-2.5 absolute xl:hidden top-32 z-10 -left-14"
                  />
                </div>
                <div>
                  <img
                    src="/images/phase3.png"
                    alt="dot"
                    className="xl:flex hidden mx-auto my-10"
                 />
                </div>
                <div className="w-full xl:w-full">
                  <div className="mx-10 md:mx-0 xl:ms-0 xl:mt-0 relative bg-gradient-box rounded-[30px] ms-20 mt-36">
                    <div className="my-1 h-px border-2 border-primary/25 border-dashed absolute xl:hidden top-10 w-10 -left-11"></div>
                    <ul className="list-disc list-inside text-lg leading-8 p-5 md:text-base text-wrap break-words">
                      <li>
                        1. In your wallet, switch the network to Base in the
                        network dropdown menu
                      </li>
                      <li>2. Go to https://www.sushi.com/swap</li>
                      <li>3. Connect your wallet</li>
                      <li>
                        4. In the bottom swap field, select a token and input
                        the official $MOCHI token address
                        0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:flex-col xl:mt-20 xl:border-none -mt-8 relative border-l-2 border-primary/25 border-dashed">
              <div>
                  <img
                    src="/images/phase4.png"
                    alt="phase4"
                    className="-ml-2.5 absolute xl:hidden top-32 z-10 -left-14"
                  />
                </div>
                <div>
                  <img
                    src="/images/phase4.png"
                    alt="dot"
                    className="xl:flex hidden mx-auto my-10"
                 />
                </div>
                <div className="w-full xl:full">
                  <div className="mx-10 md:mx-0 xl:ms-0 xl:mt-0 relative bg-gradient-box rounded-[30px] ms-20 mt-36">
                    <div className="my-1 h-px border-2 border-primary/25 border-dashed absolute xl:hidden top-10 w-10 -left-11"></div>
                      <p className="uppercase text-lg p-5 md:text-base leading-8 text-wrap break-words">Perform the swap.
                      <ul className="list-disc list-inside text-lg leading-8 p-5 text-wrap break-words">
                      <li>1. Enter an amount of ETH</li>
                      <li>2. Set the
                      
                        slippage to 3-4% by clicking on the settings wheel and
                        adjusting it
                        </li>
                      <li>3. Press Swap</li>
                      <li>4. Confirm the transaction in your wallet</li>
                    </ul></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Plusechains;
