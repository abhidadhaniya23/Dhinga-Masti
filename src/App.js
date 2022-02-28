import "./App.css";
import Intro from "./Sections/Intro/Intro";
import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="fixed z-20 w-screen mx-auto">
        <Navbar />
      </div>
      <Intro />
    </>
  );
}

export default App;
