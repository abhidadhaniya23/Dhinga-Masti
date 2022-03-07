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
        
        <div className="flex flex-row w-1/2 h-56 my-4 rounded-xl bg-gray-300 odd:flex-row-reverse mx-auto justify-center items-center  overflow-hidden">
            <div className="w-full h-full">
                <img className="object-cover h-full w-full" src={games} alt="Games"/>
            </div>
            <div className="flex flex-col justify-center items-start px-8">
                <h2 className="sm:text-2xl text-sm"> Shooting Stars</h2>
                <span className=" h-1 w-16 mt-2  mb-3 bg-yellow-400 rounded text-black"></span>
                Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                Gastropub indxgo juice poutine.
                
            
            <button className="items-center justify-center w-36 mt-4 px-1 py-1 text-xl text-gray-900 rounded-full cursor-pointer outline focus:outline-offset-4 outline-offset-2 outline-gray-200 font-bolder bg-emerald-200">Play Games</button>    
            </div>
        </div>
    );
};
export default GamesCards;


