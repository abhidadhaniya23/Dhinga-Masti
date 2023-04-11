import FeaturesHead from "../Features/FeaturesHead";
import MultipleGames from "../Games/Components/MultipleGames";
import Quote from "../Quote/Quote";
import ReadingLight from "../ReadingLight";

const BodyComponent = () => {
  return (
    <>
      <div className="bg-featuresBg bg-fixed bg-right bg-cover">
        <div className="backdrop-blur-3xl">
          <FeaturesHead />
          <Quote />
          <ReadingLight />
          <MultipleGames />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
