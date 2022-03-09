import React from "react";

const SocialIcon = ({ color, twitter, instagram, github }) => {
  return (
    <>
      <a href={twitter} className="bg-white shadow-md duration-200 active:shadow hover:shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-1 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-twitter`}></i>
      </a>
      <a href={github} className="bg-white shadow-md duration-200 active:shadow hover:shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-1 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-github`}></i>
      </a>
      <a href={instagram} className="bg-white shadow-md duration-200 active:shadow hover:shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-1 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-instagram`}></i>
      </a>
    </>
  );
};

export default SocialIcon;
