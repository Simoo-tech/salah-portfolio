import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Helmet } from "react-helmet";

function Home() {
  // onclick handle
  const navigate = useNavigate();
  const onclick = () => {
    setTimeout(() => navigate("/about"), 600);
  };

  return (
    <section
      id="home"
      className="relative h-full flex justify-center items-center"
    >
      <Helmet>
        <title>Salah Eldin | Home </title>
      </Helmet>
      {/* shape */}
      <div
        id="shape"
        className="absolute bg-color3 h-full left-0 top-0 z-0
        xs:hidden
        lg:w-4/12 lg:block"
      />
      {/* container */}
      <div
        className="container relative flex justify-center text-white text flex-col gap-5
      xs:items-center xs:w-full
      lg:items-start lg:w-8/12"
      >
        <h1
          className="uppercase font-medium
        xs:text-[40px] xs:text-center
        md:text-6xl
        lg:text-7xl "
        >
          i'm <span className="text-color3"> Salah Eldin</span>
        </h1>
        <h2 className="skill xs:text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 20,
              strings: ["mern stack Developer", "UI/UX Desginer"],
            }}
          />
        </h2>
        <p
          className="xs:text-base md:text-lg leading-relaxed capitalize text-pretty
        xs:text-center lg:text-start"
        >
          i'm an egyptian based web-desginer & mern stack developer focused on
          build clean & user‑friendly experiences, Build clean code with
          consideration SEO rank, My goal is to turn your idea into a real
          website that will improve your business.
        </p>
        <button
          onClick={onclick}
          className="h-[50px] w-[260px] border-2 border-color3 rounded-full flex justify-center items-center
           uppercase relative font-medium group duration-300"
        >
          <span className="relative z-10 ">more about me</span>
          <span
            className="absolute left-0 h-full bg-color3 w-[50px] p-2 rounded-full flex justify-center items-center duration-300
          group-hover:w-full group-hover:justify-end"
          >
            <IoMdArrowRoundForward size={25} />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Home;
