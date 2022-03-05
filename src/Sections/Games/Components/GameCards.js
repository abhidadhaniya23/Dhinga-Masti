import React from "react";
import games from "../../../Assets/games.jpeg";
// import dummy from "../../../Assets/dummy.jpeg";

const GamesCards = () => {

    return (
        <div className="bg-white sm:w-[56rem] sm:h-[15rem] w-80  h-[8rem]  flex flex-row m-4 sm:ml-80 ml-12  sm:mt-14 mt-12 odd:flex-row-reverse rounded-xl overflow-hidden">
            <div className="sm:flex">
                <img className="relative object-cover w-[48rem] h-32 sm:w-[50rem] sm:h-[15rem] rounded-t " src={games} />
            </div>
            <div className="flex flex-col sm:mt-3 sm:p-4 ml-9 overflow-hidden sm:text-base text-xs ">
                <p className="sm:text-2xl text-sm  mt-4"> Shooting Stars</p>
                <div className=" h-1 w-16 mt-2  mb-3 bg-yellow-400 rounded text-black"></div>
                Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                dollar toast  gan taxidermy.
            </div>
        </div>
    );
};
export default GamesCards;