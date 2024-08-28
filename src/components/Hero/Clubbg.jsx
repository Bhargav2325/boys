import React from "react";

const Clubbg = () => {
  return (
    <>
      <div className="bg-black w-full">
        <div className="bg-clubbg flex min-h-screen bg-center bg-cover -z-10">
          {/* <img
            src="./images/clubbg.png"
            alt="clubbg"
            className="z-10 absolute w-full h-full lg:object-cover"
          /> */}
          <div className="max-w-7xl mx-auto flex lg:flex-col xl:px-4 items-center">
            <div className="w-[65%] lg:w-full z-10 ">
              <h1 className="uppercase text-white text-[100px] lg:text-center md:text-2xl xl:mb-10">
                welcome to BOYS CLUB
              </h1>
              <img
                src="./images/club.png"
                alt="club"
                className="size-[50%] mx-auto z-10 relative flex md:size-auto lg:mx-auto lg:mt-0 xl:my-10 justify-center"
              />
            </div>
            <div className="relative w-[35%] self-center lg:w-full z-10">
              <div className="p-10 rounded-[30px] border backdrop-blur-sm bg-gradient-club-box text-white self-center">
                <p className="text-center leading-10">
                  Ah, Boy's Club, where to begin with this cultural phenomenon?
                  Created by the illustrious Matt Furie, Boy's Club is the comic
                  series that gave us Pepe the Frog, a character who went from
                  comic relief to internet meme to a symbol of... well, let's
                  just say his journey was more complicated than a soap opera
                  plotline. Born from Furie's pen in the wild, lawless lands of
                  the mid-2000s, this series is a deep dive into the lives of
                  four roommates: Andy, Brett, Landwolf, and the infamous Pepe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clubbg;
