import React from "react";
import Card1 from "../assets/gallary3.png";

const Card = () => {
  return (
    <div className="Card w-full px-4 bg-black">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" w-full flex flex-col p-4 m-4 rounded-lg cursor-pointer shadow-lg shadow-[#222] hover:scale-105 duration-300">
          <img className="w-[100%] mx-auto my-4" src={Card1} alt="/" />
          <h2 className="text-2xl font-bold text-white text-center py-8">
            Single User
          </h2>
          <p className="text-center text-4xl font-medium mb-4 text-white">
            $149
          </p>
          <div>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              500 GB Storage
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              Send up to 2 GB
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              1 Granted User
            </p>
            <button className="text-white text-center mx-auto flex my-5 bg-[#00df9a] py-3 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col p-4 m-4 rounded-lg cursor-pointer shadow-lg shadow-[#222] hover:scale-105 duration-300">
          <img className="w-[100%] mx-auto my-4" src={Card1} alt="/" />
          <h2 className="text-2xl font-bold text-white text-center py-8">
            Single User
          </h2>
          <p className="text-center text-4xl font-medium mb-4 text-white">
            $149
          </p>
          <div>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              500 GB Storage
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              Send up to 2 GB
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              1 Granted User
            </p>
            <button className="text-white text-center mx-auto flex my-5 bg-[#00df9a] py-3 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col p-4 m-4 rounded-lg cursor-pointer shadow-lg  shadow-[#222] hover:scale-105 duration-300">
          <img className="w-[100%] mx-auto my-4" src={Card1} alt="/" />
          <h2 className="text-2xl font-bold text-white text-center py-8">
            Single User
          </h2>
          <p className="text-center text-4xl font-medium mb-4 text-white">
            $149
          </p>
          <div>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              500 GB Storage
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              Send up to 2 GB
            </p>
            <p className="py-2 border0b mx-8 mt-6 text-white text-center">
              1 Granted User
            </p>
            <button className="text-white text-center mx-auto flex my-5 bg-[#00df9a] py-3 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
