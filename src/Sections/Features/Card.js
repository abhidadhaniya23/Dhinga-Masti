import React from "react";

const Card = ({ title, desc, color, icon }) => {
  return (
    <div className={`bg-white/60 sm:mt-28 hover:bg-${color}/50 sm:px-8 sm:pt-16 lg:w-80 lg:h-[21rem] w-96 h-[15rem] sm:pb-24 m-5 text-center relative backdrop-blur-3xl rounded-2xl`}>
      {/* <svg fill="none" stroke="currentColor" className="bg-gray-400 rounded-full w-10 h-10 lg:w-14 lg:h-14 -mt-120 lg:-mt-20 -mt-4 ml-[6.5rem] sm:ml-[6.5rem]" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg> */}
      <div className={`-mt-24 bg-${color} mx-auto w-16 h-16 flex justify-center rounded-full items-center`}>
        <i class={`text-2xl ${icon}`}></i>
      </div>
      <h2 className="text-3xl md:mt-10 ">{title}</h2>
      <span className={`inline-block sm:h-1 sm:w-24 w-16 h-1 rounded bg-${color} mt-6 mb-4`}></span>
      {/* <h1 className="sm:text-2xl text-sm text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1> */}
      <p className="leading-relaxed text-xs sm:text-base sm:mt-4 mt-2 mb-3">{desc}</p>
    </div>
  );
};

export default Card;
