import { motion } from "framer-motion";

const Header = () => {
  const titleAnimate = {
    heading: {
      hidden: { opacity: 0, y: -100 },
      show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 } },
    },
    description: {
      hidden: { opacity: 0, x: -40 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
    },
  };
  return (
    <div className="sm:relative sm:-top-20 flex-wrap h-screen w-auto justify-items-center">
      <motion.h1 variants={titleAnimate.heading} initial="hidden" animate="show" className=" sm:py-3 md:mx-0 py-8 mx-7 sm:mt-64 mt-[300px] text-center md:text-left">
        Dhinga Masti
      </motion.h1>
      <motion.p variants={titleAnimate.description} initial="hidden" animate="show" className="sm:w-3/5 sm:opacity-90 text-center md:text-left ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iste suscipit minima consequuntur, adipisci sunt quis quos quisquam eveniet soluta
      </motion.p>
    </div>
  );
};

export default Header;
