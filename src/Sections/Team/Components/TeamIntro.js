import React from "react";
import TeamCards from "./TeamCards";

const TeamIntro = () => {

    return (
        <>
            <h1 className="text-center lg:pt-28 lg:-mt-4 bg-TeamBgGradient bg-cover text-white">OUR TEAM</h1>
            <div className=" flex flex-wrap sm:pl-40 lg:pt-24 pb-40 bg-TeamBgGradient bg-cover">
               
                <TeamCards />
                <TeamCards />
                <TeamCards />
                <TeamCards />
            </div>
        </>
    );
};

export default TeamIntro;