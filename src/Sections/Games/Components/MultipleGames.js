import React from "react";
import GamesCards from "./GameCards";

const MultipleGames = () => {
  const gamesData = [
    {
      title: "2048",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/2048/index.html",
    },
    {
      title: "Color-Cubes",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Cubes/index.html",
    },
    {
      title: "Color-Game",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Game/index.html",
    },
    {
      title: "Digital-Puzzle",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Digital-Puzzle/index.html",
    },
    {
      title: "Hextris",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Hextris/index.html",
    },
    {
      title: "Math-Game",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Math-Game/index.html",
    },
    {
      title: "Tetris",
      desc: "",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Tetris/index.html",
    },
  ];
  return (
    <>
      <div className="w-full pb-24">
        <div className="container mx-auto">
          <h1 className="pt-16 pb-20 text-center"> Play Games </h1>
          {gamesData.map((game, index) => {
            <GamesCards title={game.title} key={index} desc={game.desc} img={game.img} link={game.link} />;
          })}
        </div>
      </div>
    </>
  );
};
export default MultipleGames;
