import React from "react";
import TeamCards from "./TeamCards";
import code_with_alien from "../../../Assets/code_with_alien.png";

const TeamIntro = () => {
  const team = [
    {
      name: "Rupen Bhimani",
      skill: "Web-Developer",
      color: "purpleColor",
      img: "code_with_alien.png",
    },
    {
      name: "Abhi Dadhaniya",
      skill: "Web-developer",
      color: "orangeColor",
      img: "",
    },
    {
      name: "Vanshika Gupta",
      skill: "programmer",
      color: "cyanColor",
      img: "",
    },
    {
      name: "Vaidik Modi",
      skill: "cloud in air",
      color: "redPink",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-IntroPatternPhone md:bg-IntroPatternScreen bg-cover">
        <h2 className="text-center pt-24 text-white text-5xl ">Our Team</h2>
        <div className=" container mx-auto">
          <div className="flex justify-center items-center flex-row md:-ml-16 flex-wrap py-20">
            {team.map((teamcards, index) => (
              <TeamCards name={teamcards.name} color={teamcards.color} key={index} skill={teamcards.skill} img={code_with_alien}></TeamCards>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamIntro;
