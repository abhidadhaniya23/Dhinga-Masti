import React from "react";
import TeamCards from "./TeamCards";
import abhi from "../../../Assets/Team/abhi.png";
import vanshika from "../../../Assets/Team/vanshika.png";
import rupen from "../../../Assets/Team/rupen.png";
import vaidik from "../../../Assets/Team/vaidik.png";

const TeamIntro = () => {
  const team = [
    {
      name: "Rupen Bhimani",
      skill: "Front end Web-Developer",
      color: "purpleColor",
      img: rupen,
    },
    {
      name: "Vaidik Modi",
      skill: "Database Technology",
      color: "redPink",
      img: vaidik,
    },
    {
      name: "Abhi Dadhaniya",
      skill: "Full stack Web-developer",
      color: "orangeColor",
      img: abhi,
    },
    {
      name: "Vanshika Gupta",
      skill: "Python Programming",
      color: "cyanColor",
      img: vanshika,
    },
  ];

  return (
    <>
      <section className="relative w-full bg-IntroPatternPhone md:bg-IntroPatternScreen bg-cover">
        <h2 className="text-center pt-24 text-white text-5xl ">Our Team</h2>
        <div className=" container mx-auto">
          <div className="flex justify-center items-center flex-row md:-ml-16 flex-wrap py-20">
            {team.map((teamcards, index) => (
              <TeamCards name={teamcards.name} color={teamcards.color} key={index} skill={teamcards.skill} img={teamcards.img}></TeamCards>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamIntro;
