import React from "react";
import games from "../../../Assets/games.jpeg";

const GamesCards = () => {
  return (
    // <div className="bg-white  flex flex-row m-4 mx-auto sm:mt-14 mt-12 odd:flex-row-reverse rounded-xl overflow-hidden">
    //     <div className="md:flex absolute w-52 h-52 ">
    //     </div>
    //     <div className="flex flex-col sm:mt-3 sm:p-4 ml-9 overflow-hidden sm:text-base text-xs ">
    //         <div className="flex flex-col ">
    //         </div>
    //     </div>
    // </div>

    <div className="flex flex-row w-4/6 h-72 my-12 rounded-xl hover:shadow-2xl duration-150 shadow-lg group bg-white/40 odd:flex-row-reverse mx-auto justify-center items-center  overflow-hidden">
      <div className="w-full h-full">
        <img className="object-cover h-full w-full" src={games} />
      </div>
      <div className="flex flex-col justify-center items-start px-8">
        <h2 className="text-4xl"> Shooting Stars</h2>
        <span className=" h-1 w-16 mt-2  mb-3 bg-yellow-400 rounded text-black"></span>
        <p className="text-base">Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four Gastropub indxgo juice poutine.</p>
        <button className="items-center justify-center w-36 mt-4 p-2 font-text text-base text-white rounded-full cursor-pointer outline outline-black focus:outline-offset-4 outline-offset-0 duration-100 bg-black">Play Games</button>
      </div>
    </div>
  );
};
export default GamesCards;
