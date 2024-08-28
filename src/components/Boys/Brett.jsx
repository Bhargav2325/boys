import React from "react";

const Brett = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-[138px] md:pt-[97px]">
        <div className="flex items-center mt-5 md:flex-col-reverse md:items-center md:justify-center xxl:px-4">
          <div className="w-1/2 md:w-full md:text-center">
            <h1 className="uppercase text-[64px] text-white mb-10 md:text-3xl md:my-10">
              brett
            </h1>
            <p className="text-white text-[20px] md:size-text-base uppercase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur modi odit ipsa sit perferendis, labore ratione dicta
              libero aut atque quibusdam similique aliquid eiusF omnis a id,
              quidem nemo sint.
            </p>
          </div>
          <div className="w-1/2 md:w-full">
            <img
              src="/images/brett2.gif"
              alt="brett"
              className=" mt-5 md:mx-auto md:size-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brett;
