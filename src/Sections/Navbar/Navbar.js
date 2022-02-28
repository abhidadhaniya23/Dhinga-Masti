import Links from "./Components/Links";

const Navbar = () => {
  return (
    <ul className="flex items-center justify-center py-4 text-white bg-gray-900 font-text">
      <Links href="#" link="Home" />
      <Links href="#" link="Features" />
      <Links href="#" link="Children" />
      <Links href="#" link="Play Games" />
      <Links href="#" link="About Us" />
    </ul>
  );
};

export default Navbar;
