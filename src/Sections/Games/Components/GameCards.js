import React from "react";
import games from "../../../Assets/games.jpeg";

const GamesCards = () => {
  return (
    // <div className="flex flex-row m-4 mx-auto mt-12 overflow-hidden bg-white sm:mt-14 odd:flex-row-reverse rounded-xl">
    //     <div className="absolute md:flex w-52 h-52 ">
    //     </div>
    //     <div className="flex flex-col overflow-hidden text-xs sm:mt-3 sm:p-4 ml-9 sm:text-base ">
    //         <div className="flex flex-col ">
    //         </div>
    //     </div>
    // </div>

    <div className="flex flex-row items-center justify-center w-4/6 mx-auto my-12 overflow-hidden duration-150 shadow-lg h-72 rounded-xl hover:shadow-2xl group bg-white/40 odd:flex-row-reverse">
      <div className="w-full h-full">
        <img className="object-cover w-full h-full" src={games} />
      </div>
      <div className="flex flex-col items-start justify-center px-8">
        <h2 className="text-4xl"> Shooting Stars</h2>
        <span className="w-16 h-1 mt-2 mb-3 text-black bg-yellow-400 rounded "></span>
        <p className="text-base">Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four Gastropub indxgo juice poutine.</p>
        <a className="p-2 mt-4 text-base text-center text-white duration-100 bg-black rounded-full cursor-pointer w-36 font-text outline outline-black focus:outline-offset-4 outline-offset-0">Play Games</a>
      </div>
    </div>
  );
};
export default GamesCards;
