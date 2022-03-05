import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () =>{
    return(
      <>
      <div className="pt-16 bg-[#F3F4F5] pb-20">
          <h1 className="text-center mb-24 lg:-mt-20"> Play Games </h1>
      <GamesCards />
      <GamesCards />
      <GamesCards />
      <GamesCards />
      </div>
      </>
    );
};
export default MultipleGames;