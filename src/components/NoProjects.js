import React from "react";
import noProject from "../assets/no-project.svg";

export default function NoProjects({ name }) {
  return (
    <div
      id="no-projects-yet"
      className="col-span-full flex items-center flex-col gap-4 justify-center text-white "
    >
      <img src={noProject} alt="no-project-img" className="w-[250px]" />
      <h4
        className=" font-semibold capitalize
        xs:text-2xl 
        md:text-3xl"
      >
        No {name} yet ...
      </h4>
      <h5 className=" text-center md:text-lg">
        I'm doing my best to make more {name}
      </h5>
    </div>
  );
}
