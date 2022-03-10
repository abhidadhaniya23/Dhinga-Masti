import React from "react";

const Card = ({ title, desc, color, icon }) => {
  return (
    <div className={`bg-white/60 duration-300 sm:mt-28 hover:shadow-2xl shadow-lg group hover:bg-${color}/50 sm:px-8 sm:pt-16 lg:w-80 lg:h-[21rem] w-96 min-h-[15rem] sm:pb-24 m-5 text-center relative backdrop-blur-3xl rounded-2xl`}>
      <div className={`-mt-24 text-${color} bg-white group-hover:scale-125 shadow-xl duration-150 mx-auto w-16 h-16 -mt-[2rem] md:-mt-24 flex justify-center rounded-full items-center`}>
        <i className={`text-2xl ${icon}`}></i>
      </div>
      <h2 className={`text-3xl md:mt-10 mt-4 duration-200 group-hover:text-${color}`}>{title}</h2>
      <span className={`inline-block sm:h-1 duration-200 group-hover:w-28 w-16 h-1 rounded bg-${color} mt-6 mb-4`}></span>
      {/* <h1 className="sm:text-2xl text-sm text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1> */}
      <p className="leading-relaxed text-sm sm:text-base sm:mt-4 mt-2 mb-3 md:m-0 m-3">{desc}</p>
    </div>
  );
};

export default Card;
