import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () => {
  return (
    <>
      <div className="bg-featuresBg bg-cover bg-fixed">
        <div className="py-20 w-full backdrop-blur-3xl">
          <div className="container mx-auto">
            <h1 className="text-center mb-24 lg:-mt-20 "> Play Games </h1>
            <GamesCards />
            <GamesCards />
            <GamesCards />
            <GamesCards />
          </div>
        </div>
      </div>
    </>
  );
};
export default MultipleGames;
