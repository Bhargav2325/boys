import React from "react";

const Marketcap = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto xxl:px-4">
          <div className="my-20 border rounded-[30px] break-all md:w-auto bg-gradient-faq-box py-10 md:flex md:mx-auto xxl:px-4  justify-center relative z-10">
            <img
              src="/images/Ellipse.png"
              alt="ellipse"
              className="absolute inset-0 object-cover h-full w-full -z-10 "
            />
            <div className="flex lg:flex-col justify-center  items-center gap-10">
              <div>
                <div className="text-[60px] text-center md:text-2xl text-primary">
                  $239,071.00
                </div>
                <h1 className="text-[50px] text-center md:text-xl text-white">
                  TOTAL MARKET CAP
                </h1>
                <h2 className="text-[40px] text-center md:text-lg text-slate-400">
                  TOKENOMICS
                </h2>
              </div>
              <div>
                <ul className="list-disc text-white break-all list-inside mx-auto uppercase space-y-4">
                  <li>fixed supply : 420,690,000 (wolf,andy,bdog,brett)</li>
                  <li>contracts renounced and verified</li>
                  <li>initial lp's burned with 100% of supply</li>
                  <li>zero buy sell taxes</li>
                  <li>ribbetting thesis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Marketcap;
