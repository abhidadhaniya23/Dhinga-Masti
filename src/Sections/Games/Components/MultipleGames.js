import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () => {
  return (
    <>
      <div className="w-full pb-24">
        <div className="container mx-auto">
          <h1 className="text-center pb-20 pt-16"> Play Games </h1>
          <GamesCards />
          <GamesCards />
          <GamesCards />
          <GamesCards />
        </div>
      </div>
    </>
  );
};
export default MultipleGames;
