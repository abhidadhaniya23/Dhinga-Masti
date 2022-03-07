import FeaturesHead from "../Features/FeaturesHead";
import MultipleGames from "../Games/Components/MultipleGames";
import Quote from "../Quote/Quote";

const BodyComponent = () => {
  return (
    <>
      <div className="bg-featuresBg bg-fixed bg-center bg-cover">
        <div className="backdrop-blur-3xl">
          <FeaturesHead />
          <Quote />
          <MultipleGames />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
