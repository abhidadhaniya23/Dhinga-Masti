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
            title: "Color-Game",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Games/index.html",
            img: img3,
        },
        {
            title: "2048",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/2048/index.html",
            desc: "2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Tiles with the same value that bump into one-another are merged.there is always some level of chance. If you beat the game and would like to master it, try to finish with a smaller score.",
            img: img6,
        },
        {
            title: "Color-Cubes",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Color-Cubes/index.html",
            img: img1,
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
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente alias facere cum distinctio corporis sint iure tempora error ullam, explicabo expedita, recusandae dolorem deserunt ipsa dolores similique, nulla pariatur.",
            link: "https://youth-avenue-2021.github.io/Toy_Curio_Games/Math-Game/index.html",
            img: img2,
        },
        {
            title: "Tetris",
            desc: "Eliminate four lines at once and you officially achieve a Tetris Line Clear. Before a Tetrimino reaches the bottom of the Matrix, you can move and rotate this shape to fit your desired position. Keep in mind that moving your Tetrimino shapes depends on which device you use to play Tetris",
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
