import React from "react";
import games from "../../../Assets/games.jpeg";
// import dummy from "../../../Assets/dummy.jpeg";

const GamesCards = () => {
<<<<<<< HEAD
  return (
    <div className="bg-white/50 sm:w-[56rem] sm:h-[14rem] w-80  h-[8rem]  flex flex-row m-4 sm:ml-80 ml-12  sm:mt-14 mt-12 odd:flex-row-reverse rounded-xl overflow-hidden">
      <div className="sm:flex">
        <img className="object-cover w-[48rem] h-32 sm:w-[42rem] sm:h-[15rem]" src={games} />
      </div>
      <div className="flex flex-col sm:mt-3 sm:p-4 ml-9 overflow-hidden sm:text-base text-xs ">
        <p className="sm:text-2xl text-sm  mt-4"> Shooting Stars</p>
        <div className=" h-1 w-16 mt-2  mb-3 bg-yellow-400 rounded text-black"></div>
        <div className="">Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast gan taxidermy.</div>
      </div>
    </div>
  );
=======

    return (
        <div className="bg-white sm:w-[56rem] sm:h-fit w-80  h-[8rem]  flex flex-row m-4 mx-auto sm:mt-14 mt-12 odd:flex-row-reverse rounded-xl overflow-hidden">
            <div className="sm:flex">
                <img className="object-cover w-[48rem] h-32 sm:w-[42rem] sm:h-[15rem]" src={games}/>
            </div>
            <div className="flex flex-col sm:mt-3 sm:p-4 ml-9 overflow-hidden sm:text-base text-xs ">
                <p className="sm:text-2xl text-sm  mt-4"> Shooting Stars</p>
                <div className=" h-1 w-16 mt-2  mb-3 bg-yellow-400 rounded text-black"></div>
                <div className="flex flex-col">
                    Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                    dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                    dollar toast  gan taxidermy.
                <button className="items-center justify-center w-36 mt-4 px-1 py-1  text-xl text-gray-900 rounded-full cursor-pointer outline focus:outline-offset-4 outline-offset-2 outline-gray-200 font-bolder bg-emerald-200">Play Games</button>    
                </div>
            </div>
        </div>
    );
>>>>>>> 05d0884aca02b6f092c90eea08343ee6c9ca9409
};
export default GamesCards;
