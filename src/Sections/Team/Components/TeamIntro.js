import React from "react";
import TeamCards from "./TeamCards";
import code_with_alien from "../../../Assets/code_with_alien.png";


const TeamIntro = () => {

    const team=[
        {
            name: "Rupen Bhimani",
            skill: "Web-Developer",
            about: "sab moh maya hai , duniya me ..mat kar maya ko ahankarbusy self-learner busy self-learner ",
            img: "code_with_alien.png",
        },

        {
            name: "Abhi Dadhaniya",
            skill:"Web-developer",
            about: "busy self-learner busy self-learnerbusy self-learnerbusy self-learner busy self-learner",
            img: "",
        },

        {
            name: "Vanshika Gupta",
            skill: "programmer",
            about: "busy self-learnerbusy self-learnerbusy self-learnerbusy self-learnerbusy self-learner busy self-learner",
            img: "",
        },

        {
            name: "Vaidik Modi",
            skill: "cloud in air",
            about: "busy self-learnerbusy self-learnerbusy self-learnerbusy self-learnerbusy self-learner busy self-learner",

        }
    ]

    return (
        <>
            <section className="relative w-full min-h-screen  bg-fixed bg-Team bg-cover">
                <p className="text-center pt-24 text-white text-5xl ">OUR TEAM</p>
                <div className="flex flex-wrap p-40 lg:p-24  sm:pl-40 lg:pt-40 lg:-mt-20 -mt-20 pb-14">
                    
                {team.map((teamcards, index) => (
                     <TeamCards name={teamcards.name} key={index} index={index} skill={teamcards.skill} about={teamcards.about} img={code_with_alien} ></TeamCards>   
                    ))}

                </div>
            </section>

        </>
    );
};

export default TeamIntro;