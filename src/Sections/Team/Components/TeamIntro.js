import React from "react";
import TeamCards from "./TeamCards";

const TeamIntro = () => {

    return (
        <>
            <section className="relative w-full min-h-screen  bg-fixed bg-Team bg-cover">
                <p className="text-center pt-24 text-white text-5xl ">OUR TEAM</p>
                <div className="flex flex-wrap p-40 lg:p-24  sm:pl-40 lg:pt-40 lg:-mt-20 -mt-20 pb-14">
                    <TeamCards />
                    <TeamCards />
                    <TeamCards />
                    <TeamCards />
                </div>
            </section>

        </>
    );
};

export default TeamIntro;