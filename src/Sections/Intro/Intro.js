import React from "react";
import Header from "./Components/Header";
import Wave from "./Components/Wave";
import avatar from "../../Assets/Avatar.png";
import { motion } from "framer-motion";

const Intro = () => {
  const avatarAnimate = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 1 } },
  };
  return (
    <>
      <section className="h-auto text-white bg-center bg-cover relative md:h-[100vh] flex justify-center items-center bg-IntroPatternPhone md:bg-IntroPatternScreen">
        <Header />
        <Wave />
        <motion.img src={avatar} variants={avatarAnimate} initial="hidden" animate="show" className=" absolute top-[680px] right-2 sm:absolute sm:top-72 sm:right-52 sm:trans sm:z-10 sm:w-[35rem]" alt="" />
      </section>
    </>
  );
};

export default Intro;
