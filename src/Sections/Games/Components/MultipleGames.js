import React from "react";
import GamesCards from "./GameCards";
import img1 from "../../../Assets/games/1.png";
import img2 from "../../../Assets/games/2.png";
import img3 from "../../../Assets/games/3.png";
import img4 from "../../../Assets/games/4.png";
import img5 from "../../../Assets/games/5.png";
import img6 from "../../../Assets/games/6.png";
import img7 from "../../../Assets/games/7.png";
import img8 from "../../../Assets/games/8.png";
import img14 from "../../../Assets/games/14.png";
import img11 from "../../../Assets/games/11.png";
import img12 from "../../../Assets/games/12.png";
import img13 from "../../../Assets/games/13.png";

const MultipleGames = () => {
  const gamesData = [
    {
      title: "Color-Game",
      desc: "This  color game is very intresting. one color word is given from that you have to choose option for example , The text is Purple but text color is Red then you choose Red word from above buttons.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Games/index.html",
      img: img3,
    },
    {
      title: "Rubik's Cube",
      desc: "Rubik's Cube is a 3D puzzle game with a colourful user interface. To play the game, you have to move the cube to the endpoint through the tile grid while also avoiding to fall into the holes in less than 1024 moves to beat the high score.",
      link: "https://codepen.io/bsehovac/full/EMyWVv",
      img: img14,
    },
    {
      title: "Tower Blocks",
      desc: "Tower Blocks is a simple game where you have to stack the blocks on top of each other. The blocks are of different sizes and you have to stack them in a way that the bigger blocks are at the bottom and the smaller blocks are at the top. The game is over when you can't stack any more blocks.",
      link: "https://codepen.io/ste-vg/full/ppLQNW",
      img: img11,
    },
    {
      title: "2048",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/2048/index.html",
      desc: "2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Tiles with the same value that bump into one-another are merged.there is always some level of chance. If you beat the game and would like to master it, try to finish with a smaller score.",
      img: img6,
    },
    {
      title: "Kill Boxes",
      desc: "Kill Boxes is a simple game where you have to kill all the boxes. The boxes are of different sizes and you have to kill them in a way that the bigger boxes are at the bottom and the smaller boxes are at the top. The game is over when you can't kill any more boxes.",
      link: "https://codepen.io/chris-creditdesign/full/emKQwY",
      img: img12,
    },
    {
      title: "Hextris",
      desc: "Hextris is a simple reincarnation of Tetris in hexagon form. Meaning that colored lines will fall from six sides towards a central hexagon, and you need to rotate the hexagon to get the colors to match. When you eventually can’t keep up, and the hexagon fills with colored lines, the game is over.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Hextris/index.html",
      img: img7,
    },
    {
      title: "The Aviator",
      desc: "The Aviator is a simple game where you have to fly the plane and avoid the obstacles. The plane is of different sizes and you have to fly it in a way that the bigger plane is at the bottom and the smaller plane is at the top. The game is over when you can't fly any more plane.",
      link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Math-Game/index.html",
      img: img13,
    },
  ];
  return (
    <>
      <div id="games" className="w-full pb-24">
        <div className="container mx-auto">
          <h1 className="pt-16 pb-20 text-center"> Play Games </h1>
          {gamesData.map((game, index) => (
            <GamesCards
              title={game.title}
              key={index}
              desc={game.desc}
              img={game.img}
              link={game.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default MultipleGames;
