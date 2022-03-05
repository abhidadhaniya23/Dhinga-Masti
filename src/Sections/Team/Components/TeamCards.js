import React from "react";
import games from "../../../Assets/games.jpeg"


const TeamCards = () => {
    return (
        <>
       
         <div className="flex flex-wrap first:ml-32 ">
            <div className="lg:w-[34rem] rounded-xl overflow-hidden bg-gray-200  mr-8 mb-8">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className=" rounded-t object-cover object-center lg:h-48 lg:w-[35rem] sm:mb-0 mb-4" src={games} />
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-2xl text-gray-900">Rupen Bhimani</h2>
                        <h3 className=" mb-1">Full-Stack Developer</h3>
                        <div className="h-1 w-20 bg-yellow-400 rounded"></div>
                        <p className="mb-4 text-sm sm:mt-4">DIY tote bag drinking vinegar cronut adaptogen snut adaptogen squid fanny pack vaporware.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    );
};

export default TeamCards;