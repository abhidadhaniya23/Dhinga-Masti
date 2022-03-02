import "./App.css";
import Intro from "./Sections/Intro/Intro";
import Quote from "./Sections/Quote/Quote";
import FeaturesHead from "./Sections/Features/FeaturesHead";

// import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="fixed z-20 w-screen mx-auto"></div>
      <Intro />
      <FeaturesHead />
      <Quote />
    </>
  );
}

export default App;
