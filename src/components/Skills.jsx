import React from "react";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.webp"
import nodejs from "../assets/nodejs.webp"
import tailwind from "../assets/tailwind.png"
import JavaScript from "../assets/JavaScript.png"
import css from "../assets/css3.png"
import Bootstrap from "../assets/Bootstrap.png"


const Skills = () => {
  return (
    <div className="service">
      <div className="service-nav flex flex-col justify-center items-center g-3">
        <p className="text-[#55E6A5] font-normal text-lg ">My Skills</p>
        <h1 className="text-center text-white text-4xl font-bold ">
          Technology I use
        </h1>
        <h1 className="text-center text-white text-4xl font-bold mb-14">
          to provide best services
        </h1>
      </div>
      <div className="serv-card-container flex w-full flex-row">
        <marquee scrollamount="45" className="text-stone-100 flex w-full flex-row ">
          <div className="flex gap-20">
            <img src={react} className="bg-transparent " width="100px" alt="" />
            <img src={git} className="bg-transparent " width="100px" alt="" />
            <img src={github} className="bg-transparent " width="100px" alt="" />
            <img src={nodejs} className="bg-transparent " width="100px" alt="" />
            <img src={tailwind} className="bg-transparent rounded-full " width="100px" alt="" />
            <img src={JavaScript} className="bg-transparent rounded " width="100px" alt="" />
            <img src={Bootstrap} className="bg-transparent rounded " width="110px" alt="" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Skills;
