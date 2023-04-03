import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="Navbar">
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">LOGO</h1>
        <ul className="hidden md:flex">
          <li className="p-4">HOME</li>
          <li className="p-4">COMPANY</li>
          <li className="p-4">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] ease-in-out duration-700 border-r border-r-gray-900 h-full pt-12 uppercase bg-[#333] z-10"
              : " top-0 w-[60%] h-full fixed left-[-100%] ease-in-out duration-700"
          }
        >
          <ul className="p-4">
            <li className="p-4 border-b border-x-gray-600">HOME</li>
            <li className="p-4 border-b border-x-gray-600">COMPANY</li>
            <li className="p-4 border-b border-x-gray-600">ABOUT</li>
            <li className="p-4 border-b border-x-gray-600">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
