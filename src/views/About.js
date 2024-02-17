import React from "react";
import cv from "../assets/Salah.pdf";
import { IoMdArrowRoundForward } from "react-icons/io";
import { personalInfo, skills } from "../Data";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Salah Eldin | About</title>
      </Helmet>
      <section id="about-me" className="py-10 h-full overflow-y-scroll">
        {/* page title */}
        <div
          id="page-title"
          className="text-white text-center relative font-extrabold uppercase z-0 
        xs:mb-5
        md:mb-16"
        >
          <h1
            className=" opacity-5 w-full
        xs:text-7xl
        md:text-8xl
        lg:text-9xl"
          >
            RESUME
          </h1>
          <h2
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 w-full
          xs:text-4xl
          md:text-6xl
          lg:text-7xl "
          >
            about <span className="text-color3">me</span>
          </h2>
        </div>
        {/* container */}
        <div className="container text-white">
          <PersonalInfo />
          <Skills />
        </div>
      </section>
    </>
  );
};

export default About;

const PersonalInfo = () => {
  const lists = personalInfo.map((list, i) => {
    return (
      <li
        key={i}
        className="w-6/12 mb-5 text-[17px] text-gray-300 gap-1 flex 
      xs:flex-col xs:text-[16px] 
      md:flex-row md:text-lg"
      >
        {list.name}:<span className="font-medium text-white">{list.val}</span>
      </li>
    );
  });

  return (
    <div
      id="personal-info"
      className="flex justify-between mb-20
    xs:flex-col xs:items-center xs:gap-10
    lg:flex-row lg:items-start lg:gap-0"
    >
      {/* info */}
      <div
        id="info"
        className="flex flex-col gap-8
      xs:w-full
      md:w-10/12
      lg:w-6/12"
      >
        <h3 className="text-2xl font-bold w-full">PERSONAL INFO</h3>
        <ul className="w-full flex flex-wrap">{lists}</ul>
        <div className="links flex w-full gap-5">
          <a
            href={cv}
            download="Salah-Eldin-Cv's"
            className=" border-2 border-color3 rounded-full flex items-center
            uppercase relative font-medium group duration-300
            xs:h-[48px] xs:w-[190px] xs:justify-end xs:pr-5 xs:hover:pr-9
            md:h-[52px] md:w-[220px] md:justify-center md:pr-0 md:hover:pr-0"
          >
            <span className="relative z-10"> Download cv</span>
            <span
              className="absolute left-0 h-full bg-color3 w-[45px] p-1 rounded-full flex justify-center items-center duration-300
              group-hover:w-full group-hover:justify-end"
            >
              <IoMdArrowRoundForward
                size={25}
                className="group-hover:rotate-90 group-hover:animate-pulse"
              />
            </span>
          </a>
        </div>
      </div>
      {/* rate and projects done */}
      <div
        id="rate"
        className="flex flex-wrap p-3 gap-5 justify-center
        xs:w-full
        md:w-10/12
        lg:w-6/12"
      >
        <div
          className="box border-2 h-[150px] rounded-lg border-color4 p-4 flex flex-col justify-center
        xs:px-5 xs:w-6/12
        md:w-5/12
        xl:px-10"
        >
          <p className="text-7xl text-color3 font-extrabold ">
            4<sup className="font-normal">+</sup>
          </p>
          <span
            className="relative flex items-start gap-5
      before:w-[30px] before:bg-color4 before:h-[0.5px] before:top-1 before:block before:mt-3"
          >
            YEARS OF <br />
            EXPERIENCE
          </span>
        </div>
        <div className="box w-5/12 h-[150px] rounded-lg border-2 border-color3" />
        <div className="box w-5/12 h-[150px] rounded-lg border-2 border-color3" />
        <div
          className="box border-2 h-[150px] rounded-lg border-color4 p-4 flex flex-col justify-center
        xs:px-5 xs:w-6/12
        md:w-5/12
        xl:px-10"
        >
          <p className="text-7xl text-color3 font-extrabold ">
            3<sup className="font-normal">+</sup>
          </p>
          <span
            className="relative flex items-start gap-5
      before:w-[30px] before:bg-color4 before:h-[0.5px] before:top-1 before:block before:mt-3"
          >
            COMPLETED <br />
            PROJECTS
          </span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillShape = skills.map((skill, i) => {
    return (
      <div key={i} id="skill" className={`w-full flex flex-col relative gap-1`}>
        <p className="text-lg absolute right-0">{skill.percent}%</p>
        <p className="xs:text-base md:text-lg font-light uppercase">
          {skill.name}
        </p>
        <div className="w-full h-[10px] rounded-lg bg-color4 relative">
          <div
            style={{ width: `${skill.percent}%` }}
            className={` absolute top-0 left-0 bg-color3 block h-full rounded-lg`}
          />
        </div>
      </div>
    );
  });

  return (
    <div id="skill" className="flex justify-center flex-col items-center">
      <h4 className="text-2xl font-bold uppercase pt-10 border-t-2 text-center border-color4 w-6/12">
        my skills
      </h4>
      <div className="w-full my-16 grid gap-8 xs:grid-cols-1 md:grid-cols-2 ">
        {skillShape}
      </div>
    </div>
  );
};
