import React from "react";
import BelowWave from "../Waves/BelowWave";
import UpperWave from "../Waves/UpperWave";
import childPicture from "../../Assets/child.png";

const Quote = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-x-hidden bg-fixed bg-cover bg-QuoteBgPattern">
        <UpperWave />
        <div className="container h-full mx-auto text-center font-text">
          <h1 className="text-center text-white pt-36">What's New !</h1>
          <p className="w-3/5 px-5 mx-auto mt-10 text-white rounded-lg py-7 backdrop-blur-2xl bg-white/10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem facilis ipsum odio mollitia? Maxime, eligendi! Quasi dignissimos impedit, quisquam ut eaque reiciendis, et amet totam alias fugit vitae quia.</p>
          <img src={childPicture} className="w-[30rem] pt-12 relative left-[3rem] mx-auto pb-[18rem]" alt="" />
        </div>
        <BelowWave />
      </section>
    </>
  );
};

export default Quote;
