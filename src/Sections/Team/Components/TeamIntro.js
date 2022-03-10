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
      twitter: "https://twitter.com/BhimaniRupen",
      insta: "https://www.instagram.com/rupen_bhimani/",
      github: "https://github.com/rupen109",
    },
    {
      name: "Vaidik Modi",
      skill: "Database Technology",
      color: "redPink",
      img: vaidik,
      twitter: "https://twitter.com/vaidik_modi",
      insta: "https://www.instagram.com/ll_v_m_408_ll/",
      github: "https://github.com/vaidik408",
    },
    {
      name: "Abhi Dadhaniya",
      skill: "Full stack Web-developer",
      color: "orangeColor",
      img: abhi,
      twitter: "https://twitter.com/AbhiDadhaniya3",
      insta: "https://www.instagram.com/_abhi_dadhaniya_/",
      github: "https://github.com/abhidadhaniya23",
    },
    {
      name: "Vanshika Gupta",
      skill: "Python Programmer",
      color: "cyanColor",
      img: vanshika,
      twitter: "https://twitter.com/vanshika_0111",
      insta: "https://www.instagram.com/vanshika_0111/",
      github: "https://github.com/vanshika0111",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-cover bg-center bg-IntroPatternPhone md:bg-IntroPatternScreen">
        <h1 className="pt-24 text-center text-white text ">Our Team</h1>
        <div className="container mx-auto ">
          <div className="flex flex-row flex-wrap items-center justify-center py-20 md:-ml-16">
            {team.map((teamcards, index) => (
              <TeamCards name={teamcards.name} color={teamcards.color} instagram={teamcards.insta} github={teamcards.github} twitter={teamcards.twitter} key={index} skill={teamcards.skill} img={teamcards.img}></TeamCards>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamIntro;
