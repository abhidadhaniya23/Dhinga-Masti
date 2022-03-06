import React from "react";
import TeamCards from "./TeamCards";

const TeamIntro = () => {

    return (
        <>
            <h1 className="text-center lg:-mt-4 grid gap-0 mt-20 text-white">OUR TEAM</h1>
            <div className="p-40 lg:p-24 flex flex-wrap sm:pl-40 lg:pt-40 lg:-mt-20 -mt-20 pb-14 bg-Team bg-cover ">
                
                <TeamCards />
                <TeamCards />
                <TeamCards />
                <TeamCards />
            </div>
        </>
    );
};

export default TeamIntro;