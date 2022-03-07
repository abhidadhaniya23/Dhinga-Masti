import React from "react";

const Card = ({title, desc}) => {
 
    return (
        <div className="bg-gray-400  bg-opacity-30 sm:mt-28 sm:px-8 sm:pt-16 lg:w-80 lg:h-[21rem] w-96 h-[15rem] sm:pb-24 m-5 text-center relative rounded-2xl">
            <svg fill="none" stroke="currentColor" className="bg-gray-400 rounded-full w-10 h-10 lg:w-14 lg:h-14 -mt-120 lg:-mt-20 -mt-4 mx-auto" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h2 className="text-3xl lg:mt-10 ">{title}</h2>
            <span className="inline-block sm:h-1 sm:w-24 w-16 h-1 rounded bg-indigo-500 mt-6 mb-4"></span>
            {/* <h1 className="sm:text-2xl text-sm text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1> */}
            <p className="leading-relaxed text-xs sm:text-base sm:mt-4 mt-2 mb-3">{desc}</p>
        </div>
    );
};

export default Card;