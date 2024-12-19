import React from "react";
import webdev from "../assets/wevdev.jpg";

const Service = () => {
  return (
    <div className="service  ">
      <div className="service-nav flex flex-col justify-center items-center g-3">
        <p className="text-[#55E6A5] font-normal text-lg ">My SERVICE</p>
        <h1 className="text-center text-white text-4xl font-bold ">
          Elevate Your Online Impact
        </h1>
        <h1 className="text-center text-white text-4xl font-bold mb-14">
          with My Expertise
        </h1>
      </div>
      <div className="serv-card-container justify-center flex w-full flex-row m-20 gap-16">
        <div className="serv-card border outline-2 w-1/3 p-8 rounded-lg flex flex-col justify-center items-center text-center ">
          <img
            src={webdev}
            width="80px"
            className="bg-transparent mb-5"
            alt=""
          />
          <h2 className="text-[#55E6A5] font-normal  mb-5 text-xl">
            Web Development
          </h2>
          <p className="text-[#A2A2A2]">
            As a web developer, I leverage advanced frameworks like React and
            Next.js, combining the versatility of JavaScript to deliver
            interactive and immersive web solutions for users worldwide.
          </p>
        </div>
        <div className="serv-card border outline-2 w-1/3 p-8 rounded-lg flex flex-col justify-center items-center text-center">
          <img
            src={webdev}
            width="80px"
            className="bg-transparent mb-5"
            alt=""
          />
          <h2 className="text-[#55E6A5] font-normal  mb-5 text-xl">
            Graphics Design
          </h2>
          <p className="text-[#A2A2A2]">
            I specialize in creating eye-catching graphics that elevate the
            visual charm of websites and applications, ensuring a more engaging
            and user-friendly experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
