import React from "react";
// import childPicture from "../../Assets/child.png";



const GamesCards = () => {

    return (
        <div class="p-4 md:w-1/2 justify-center items-center sm:ml-96">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                </div>
                {/* <img src={childPicture} className="w-[30rem] pt-12 relative left-[3rem] mx-auto pb-[18rem]" alt="" /> */}

                <p class=" leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                    dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four
                    dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.</p>
            </div>
        </div>
    );
};
export default GamesCards;