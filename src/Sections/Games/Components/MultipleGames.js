import React from "react";
import GamesCards from "./GameCards";
import img1 from "../../../Assets/games/1.png";
import img2 from "../../../Assets/games/2.png";
import img3 from "../../../Assets/games/3.png";
import img4 from "../../../Assets/games/4.png";
import img5 from "../../../Assets/games/5.png";
import img6 from "../../../Assets/games/6.png";
import img7 from "../../../Assets/games/7.png";

const MultipleGames = () => {
  const gamesData = [
    {
      title: "2048",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/2048/index.html",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      img: img6,
    },
    {
      title: "Color-Cubes",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Cubes/index.html",
      img: img1,
    },
    {
      title: "Color-Game",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Games/index.html",
      img: img3,
    },
    {
      title: "Digital-Puzzle",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Digital-Puzzle/index.html",
      img: img4,
    },
    {
      title: "Hextris",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Hextris/index.html",
      img: img7,
    },
    {
      title: "Math-Game",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Math-Game/index.html",
      img: img2,
    },
    {
      title: "Tetris",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Tetris/index.html",
      img: img5,
    },
  ];
  return (
    <>
      <div id="games" className="w-full pb-24">
        <div className="container mx-auto">
          <h1 className="pt-16 pb-20 text-center"> Play Games </h1>
          {gamesData.map((game, index) => (
            <GamesCards title={game.title} key={index} desc={game.desc} img={game.img} link={game.link} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MultipleGames;
