import "./App.css";
import Intro from "./Sections/Intro/Intro";
import TeamIntro from "./Sections/Team/Components/TeamIntro";
import BodyComponent from "./Sections/BlurBodyComponents/BodyComponent";
// import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="fixed z-20 w-screen mx-auto"></div>
      <Intro />
      <BodyComponent />
      <TeamIntro />
    </>
  );
}

export default App;
