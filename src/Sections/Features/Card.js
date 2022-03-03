import React from "react";

const Card = () => {

    return (
        <div class="bg-gray-300  bg-opacity-30 sm:mt-28 sm:px-8 sm:pt-16 w-96 sm:pb-24 m-5 text-center relative backdrop-blur-2xl">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="bg-gray-400 rounded-full  w-14 h-14 -mt-20 ml-[130px]" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h2 class="text-3xl mt-10 ">xyz</h2>
            <span class="inline-block sm:h-1 sm:w-24 w-7 h-1 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h1 class="sm:text-2xl text-sm text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
            <p class="leading-relaxed text-xs sm:text-xl mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
    );
};

export default Card;