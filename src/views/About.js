import React, { lazy } from "react";
import { Helmet } from "react-helmet";
import { PersonalInfo } from "../components/About/PersonalInfo";
import { Certificates } from "../components/About/Certificate";

const Skills = lazy(() => import("../components/About/Skills"));

export default function About() {
  return (
    <section
      id="about-me"
      className="py-10 xs:pb-20 lg:m-0 h-full overflow-y-scroll"
    >
      <Helmet>
        <title>Salah Eldin | About</title>
      </Helmet>
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
        <Certificates />
      </div>
    </section>
  );
}
