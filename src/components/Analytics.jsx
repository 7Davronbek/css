import React from "react";
import Card1 from "../assets/gallary3.png";

const Analytics = () => {
  return (
    <div className="Analytics w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Card1} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse tempore libero expedita accusamus autem iusto provident dolores natus fuga, sint cumque ipsam dolor culpa ullam enim sequi quaerat officiis.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
