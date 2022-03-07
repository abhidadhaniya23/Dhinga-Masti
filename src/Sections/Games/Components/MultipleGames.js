import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () => {
  return (
    <>
      <div className="bg-featuresBg bg-cover bg-center bg-fixed">
        <div className="w-full backdrop-blur-3xl pb-24">
          <div className="container mx-auto">
            <h1 className="text-center pb-20 pt-16"> Play Games </h1>
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
