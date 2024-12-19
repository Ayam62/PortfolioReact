import React from "react";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.webp";
import nodejs from "../assets/nodejs.webp";
import tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/JavaScript.png";
import css from "../assets/css3.png";
import Bootstrap from "../assets/Bootstrap.png";

const Skills = () => {
  return (
    <div className="skills my-40 ">
      <div className="skills-nav flex flex-col justify-center items-center g-3">
        <p className="text-[#55E6A5] font-normal text-lg ">My Skills</p>
        <h1 className="text-center text-white text-4xl font-bold ">
          Technology I use
        </h1>
        <h1 className="text-center text-white text-4xl font-bold mb-14">
          to provide best services
        </h1>
      </div>
      <div className="serv-card-container flex w-full flex-row">
        <div class="icon-marquee ">
          <div class="icon-wrapper">
            <img src={react} alt="React" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={git} alt="Git" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={github} alt="GitHub" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={nodejs} alt="Node.js" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={tailwind} alt="Tailwind" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={JavaScript} alt="JavaScript" class="icon" />
          </div>
          <div class="icon-wrapper">
            <img src={Bootstrap} alt="Bootstrap" class="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
