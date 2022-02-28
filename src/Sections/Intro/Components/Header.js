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
    <div className="relative -top-20">
      <motion.h1 variants={titleAnimate.heading} initial="hidden" animate="show" className="py-3">
        Dhinga Masti
      </motion.h1>
      <motion.p variants={titleAnimate.description} initial="hidden" animate="show" className="w-3/5 opacity-90">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iste suscipit minima consequuntur, adipisci sunt quis quos quisquam eveniet soluta
      </motion.p>
    </div>
  );
};

export default Header;
