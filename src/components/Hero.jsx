import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="Hero text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col align-middle justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold p-2">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold me-2">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold text-[#aaa]"
            strings={["BTC", "NFT"]}
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3 hover:bg-[#000] hover:border-spacing-3 ease-linear duration-300 hover:text-white border-2 border-[#00df9a] hover:border-[#00df9a] ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
