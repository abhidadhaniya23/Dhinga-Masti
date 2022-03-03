import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () =>{
    return(
      <>
      <div className="mt-16">
          <h1 className="text-center"> Play Games </h1>
      <GamesCards />
      <GamesCards />
      <GamesCards />
      <GamesCards />
      </div>
      
      </>
    );
};
export default MultipleGames;