import React from "react";
import games from "../../../Assets/games.jpeg"


const TeamCards = () => {
    return (
        <>
            <div className="flex flex-row lg:first:ml-32 lg:mt-8 ">
                <div className="flex flex-wrap lg:w-[34rem] w-72 -ml-24 lg:ml-0 rounded-xl overflow-hidden bg-gray-200/80 backdrop-blur-3xl lg:mr-8 mb-8">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className=" rounded-full lg:rounded-none object-cover object-center lg:mt-0 mt-4 h-28 w-28 lg:h-48 lg:w-[35rem] sm:mb-0 mb-4" src={games} />
                        <div className="flex-col sm:pl-8">
                            <h2 className="title-font font-medium text-3xl text-gray-900">Rupen Bhimani</h2>
                            <h3 className=" mb-1">Full-Stack Developer</h3>
                            <div className="h-1 w-20 lg:ml-0 ml-24 bg-yellow-400 rounded"></div>
                            <p className="mb-8 text-sm mt-4 sm:mt-4">DIY tote bag drinking vinegar cronut adaptogen snut adaptogen squid fanny pack vaporware.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default TeamCards;