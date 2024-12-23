import React from "react";
import climbLadder from "../assets/climbLadder.jpg"

const About = () => {
  return (
    <div className="about flex">
      <div className="about-left w-1/2">
       <div className="service pl-20 g  ">
             <div className="service-nav flex flex-col justify-center   gap-3">
               <p className="text-[#55E6A5] font-normal text-lg ">ABOUT ME</p>
               <h1 className=" text-white text-4xl font-bold ">
                 Elevate Your Online Impact
               </h1>
               <h1 className=" text-white text-4xl font-bold mb-6">
                 with My Expertise
               </h1>
               <p className="text-[#A2A2A2] ">My passion for clean, thoughtful code and intuitive design stems from the belief that technology should enhance simplicity rather than add complexity. I strive to bridge the gap between complex concepts and seamless, user-friendly interfaces.
For me, development goes beyond functionality; it's about creating meaningful digital experiences that leave a lasting impression. As we collaborate, I aim to not only meet your technical requirements but also exceed your expectations by delivering engaging, impactful user experiences.</p>
             </div>
           </div>
      </div>
      <div className="about-right w-1/2">
      <img src={climbLadder} width={340} className="bg-transparent rounded-lg ml-40" alt="" />
      </div>
    </div>
  );
};

export default About;
