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
import img9 from "../../../Assets/games/9.png";

const MultipleGames = () => {
    const gamesData = [
        {
            title: "Color-Game",
            desc: "This  color game is very intresting. one color word is given from that you have to choose option for example , The text is Purple but text color is Red then you choose Red word from above buttons.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Games/index.html",
            img: img3,
        },
        {
            title:"Tower Building",
            desc: "In every game player starts with 3 hp. Every time a Tower block is dropped player is deduct 1 hp; game ends when hp is depleted.Player is rewarded with 25 point for every succesful stacked blocks(Success).",
            link: "https://www.towergame.app/",
            img: img8, 
        },
        {
           title: "1024-Cube Game",
           desc: "1024 js game is powered by HTML5 and JavaScript, it is a 3D puzzle game with a colourful user interface. To play the game, you have to move the cube to the endpoint through the tile grid while also avoiding to fall into the holes in less than 1024 moves to beat the high score",
           link: "https://js13kgames.com/games/1024-moves/index.html",
           img: img9,

        },
        {
            title: "2048",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/2048/index.html",
            desc: "2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Tiles with the same value that bump into one-another are merged.there is always some level of chance. If you beat the game and would like to master it, try to finish with a smaller score.",
            img: img6,
        },
    
        {
            title: "Digital-Puzzle",
            desc: "Digital puzzle is a game in which the numbers are to be arranged in an ascending order. All you need to do is, move the blocks using arrow keys and finish the task. ",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Digital-Puzzle/index.html",
            img: img4,
        },
        {
            title: "Hextris",
            desc: "Hextris is a simple reincarnation of Tetris in hexagon form. Meaning that colored lines will fall from six sides towards a central hexagon, and you need to rotate the hexagon to get the colors to match. When you eventually can’t keep up, and the hexagon fills with colored lines, the game is over.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Hextris/index.html",
            img: img7,
        },
        {
            title: "Math-Game",
            desc: "The user can test their calculation skills through this app. You have 10 seconds to answer with either 0-9 on the keyboard or on-screen buttons. If you are able to give the right solution to the problem",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Math-Game/index.html",
            img: img2,
        },
        {
            title: "Tetris",
            desc: "Eliminate four lines at once and you officially achieve a Tetris Line Clear. Before a Tetrimino reaches the bottom of the Matrix, you can move and rotate this shape to fit your desired position. Keep in mind that moving your Tetrimino shapes depends on which device you use to play Tetris",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Tetris/index.html",
            img: img5,
        },
        {
            title: "Color-Cubes",
            desc: "Tap the cube carefully through each obstacle and your cube will switch color with some Powerups. You must follow the color pattern on each cube. And It's Totally Creative And Mind Sharp Game Ever.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Cubes/index.html",
            img: img1,
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
