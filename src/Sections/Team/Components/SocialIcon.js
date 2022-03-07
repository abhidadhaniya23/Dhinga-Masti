import React from "react";

const SocialIcon = ({ color }) => {
  return (
    <>
      <a href="https://youtube.com" className="bg-white shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-2 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-instagram`}></i>
      </a>
      <a href="https://youtube.com" className="bg-white shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-2 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-twitter`}></i>
      </a>
      <a href="https://youtube.com" className="bg-white shadow-xl md:w-[2.5rem] w-8 h-8 md:h-[2.5rem] rounded-full mx-2 flex justify-center items-center">
        <i className={`text-xl text-${color} fa-brands fa-github`}></i>
      </a>
    </>
  );
};

export default SocialIcon;
