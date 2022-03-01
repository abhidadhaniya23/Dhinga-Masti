import { motion } from "framer-motion";
import playBtn from "../../../Assets/playBtn.png";

const Header = () => {
  const titleAnimate = {
    heading: {
      hidden: { opacity: 0, y: -100 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
    },
    description: {
      hidden: { opacity: 0, x: -40 },
      show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } },
    },
    button: {
      hidden: { opacity: 0, x: -40 },
      show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } },
    },
  };
  return (
    <div className="flex-wrap w-auto h-screen sm:relative relative md:w-[60rem] sm:-top-20 justify-items-center">
      <motion.h1 variants={titleAnimate.heading} initial="hidden" animate="show" className=" sm:py-3 md:mx-0 py-8 mx-7 sm:mt-64 mt-[300px] text-center md:text-left">
        Dhinga Masti
      </motion.h1>
      <motion.p variants={titleAnimate.description} initial="hidden" animate="show" className="text-center sm:w-3/5 sm:opacity-90 md:text-left ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iste suscipit minima consequuntur, adipisci sunt quis quos quisquam eveniet soluta
      </motion.p>
      <motion.a href="#" variants={titleAnimate.button} initial="hidden" animate="show" className="z-30 flex flex-row items-center justify-center w-56 px-5 py-3 mt-10 text-2xl text-gray-900 duration-300 rounded-full cursor-pointer outline focus:outline-offset-4 outline-offset-0 outline-gray-200 font-bolder bg-gray-50">
        <img src={playBtn} alt="" className="w-[2rem] mr-4" />
        Play Games
      </motion.a>
    </div>
  );
};

export default Header;
