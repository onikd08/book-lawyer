import React from "react";
import CountUp from "react-countup";

const Honor = ({ num, msg, img }) => {
  return (
    <div className="bg-base-100 min-w-64 rounded-lg ps-12 py-10 shadow-2xl">
      <img className="w-16 mb-3" src={img} alt="" />
      <div className="flex mb-2">
        <CountUp
          className="text-4xl"
          delay={1}
          end={num}
          duration={5}
        ></CountUp>
        <span className="text-4xl">+</span>
      </div>
      <p className="text-start">{msg}</p>
    </div>
  );
};

export default Honor;
